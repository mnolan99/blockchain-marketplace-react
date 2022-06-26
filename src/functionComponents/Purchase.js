// Imports
import "./Purchase.css";
import { useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Button, Modal, Input } from "antd";

// Component that returns the JSX code to display the information relating to the purchase
function Purchase({ product }) {
  // Get the state of the Modal and set it to visible if the button to buy is clicked
  // Set the delivery address entered by the user at checkout
  // Set the account (walletID) and send it through the Moralis API
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [delivery, setDelivery] = useState("");
  const { Moralis, account, chainId } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const handleOk = async () => {
    // Get  time when confirm button clicked
    var today = new Date().toUTCString();
    // Get only the time from the date function
    const formattedButtonClick = today.substr(17, 8);

    // Get the current price and conversion rate of Matic using the Matic address available on etherscan.io
    // (https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0) and the Moralis API.
    const maticDetails = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      chain: "eth",
    };
    const price = await Moralis.Web3API.token.getTokenPrice(maticDetails);

    // Once we have the current price of Matic, we use the API to convert
    // the dollar cost of the item to Matic. USD was used here as it is
    // currently the only currency that the Moralis API supports.
    const priceMatic = product.price / price.usdPrice;

    // After conversion, send the Matic from buyer's cryptocurrency
    // wallet to the site owner's wallet.
    const transactionDetails = {
      type: "native",
      amount: Moralis.Units.ETH(priceMatic),
      receiver: "0x404541effdB6F481805B63bb8b451B5b457F1E64",
    };
    let result = await Moralis.transfer(transactionDetails);
    const hashNumber = result.hash;

    // Update the Moralis database with the transaction details. Store the buyer's
    // wallet address, and delivery address, along with the product purchased, and the amount.
    const TransactionReceipt = Moralis.Object.extend("TransactionReceipt");
    const transactionReceipt = new TransactionReceipt();
    transactionReceipt.set("Customer", account);
    transactionReceipt.set("Delivery", delivery);
    transactionReceipt.set("Product", product.name);
    transactionReceipt.set("Price", product.price);
    transactionReceipt.save();
    setIsModalVisible(false);

    // Get the transaction details from the blockchain, searching by hash number
    const fetchTransaction = async () => {
      const options = {
        chain: "mumbai",
        transaction_hash: hashNumber,
      };

      // Store transaction details
      const transaction = await Web3Api.native.getTransaction(options);
      const detailsArray = [];
      const blockNumber = transaction.block_number;
      const blockHash = transaction.block_hash;
      const fromAddress = transaction.from_address;
      const toAddress = transaction.to_address;
      const blockTimestamp = transaction.block_timestamp;
      const formattedBlockTimestamp = blockTimestamp.substr(11, 8);

      // Add transaction details to details array
      detailsArray.push(
        formattedButtonClick,
        blockNumber,
        blockHash,
        fromAddress,
        toAddress,
        formattedBlockTimestamp
      );

      // Write transaction details to a txt document and prompt this to be downloaded in the browser
      // This is used for testing and to gather data for conducting the study
      var hiddenElement = document.createElement("a");
      hiddenElement.href = "data:attachment/text," + encodeURI(detailsArray);
      hiddenElement.target = "_blank";
      hiddenElement.download = "transactionDetailsMoralis.txt";
      hiddenElement.click();
    };

    // Run the fetchTransaction function after 40 seconds.
    // This timeout allows enough time for the transaction
    // to be processed on the blockchain before fetching the details
    setTimeout(fetchTransaction, 40000);
  };

  return (
    <>
      {/* Display additional information about the product and allow the user to select
          purchase by clicking the Buy Now button. This button will only be displayed if the product
          the chainID of the MetaMask wallet matches "0x13881" which is the chainID for Mumbai Testnet.
          This stops users from sending cryptocurrency on a different network, which could cause them to 
          lose the funds indefinitely. */}
      <span className="price"> Price: ${product.price}</span>
      <p style={{ borderBottom: "1px solid #3f3f42" }}>No Additional Costs</p>
      <h1 style={{ color: "green", textAlign: "center" }}>In Stock</h1>
      {chainId === "0x13881" && (
        <Button className="link" onClick={() => setIsModalVisible(true)}>
          Buy Now
        </Button>
      )}

      {/* Pop-up modal to display the transaction information and allow the user to
          confirm if they would like to complete the purchase. This also allows them to
          set the delivery address for the transaction. */}
      <Modal
        title="Purchase Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <div style={{ display: "flex" }}>
          <img
            src={product.image}
            alt="Product"
            style={{ width: "250px" }}
          ></img>
          <div>
            <h3>{product.name}</h3>
            <h2>${product.price}</h2>
            <h4>Delivery Address</h4>
            <Input
              className="deliveryAddress"
              onChange={(value) => setDelivery(value.target.value)}
            ></Input>
            <h3 style={{ color: "red", marginTop: "20px" }}>Important!</h3>
            <p style={{ fontFamily: "Montserrat" }}>
              Only continue with this purchase if you are paying through the
              Polygon Testnet.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Purchase;
