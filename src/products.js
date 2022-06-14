// Import photos from assets file so that they can be used in the products dictionary
import MacbookAir2020 from "./assets/Products/2020-Macbook-Air.jpg";
import Macbookpro2021 from "./assets/Products/2021-Macbook-Pro.jpg";
import AsusChromebook from "./assets/Products/ASUS-Chromebook.jpg";
import AsusExpertbook from "./assets/Products/ASUS-Expert.jpg";
import LenovoIdeaPad from "./assets/Products/Lenovo-Ideapad.jpg";
import AirpodsPro from "./assets/Products/AirpodsPro-2021.jpg";
import SonyMDR from "./assets/Products/SonyMDR-ZX110-Headphones.jpg";
import SonyWH from "./assets/Products/SonyWH-CH5-Headphones.jpg";
import NewBalanceTee from "./assets/Products/NewBalanceClassicTee.jpg";
import NikeMensTshirt from "./assets/Products/NikeMensTee.jpg";
import UnderArmourSport from "./assets/Products/MensUASportStyleTee.jpg";
import HolureTee from "./assets/Products/HolureTee.jpg";
import TCAShorts from "./assets/Products/TCAShorts.jpg";
import LixadaShorts from "./assets/Products/LixadaShorts.jpg";
import UnderArmourRaidShorts from "./assets/Products/UnderArmourRaidShorts.jpg";
import UnderArmourPerfShorts from "./assets/Products/UAPerfShorts.jpg";
import NikeDryShorts from "./assets/Products/NikesShorts.jpg";
import LeviHighJeans from "./assets/Products/Levi724Jeans.jpg";
import LeeJeans from "./assets/Products/LeeJeans.jpg";
import LeviMileJeans from "./assets/Products/LeviMileJeans.jpg";
import PepeJeans from "./assets/Products/PepeJeans.jpg";
import BetronHeadphones from "./assets/Products/BetronHeadphones.jpg";
import SamsungHeadphones from "./assets/Products/SamsungHeadphones.jpg";
import PureHeadphones from "./assets/Products/PureHeadphones.jpg";

// Dictionary for all available products, showing the products name, price, rating, and description.
export const products = {
  Laptops: [
    {
      name: "Apple MacBook Pro Laptop 2021",
      price: 999.99,
      rating: 5,
      image: Macbookpro2021,
      about:
        "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance. Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever. Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games. 16-core Neural Engine for up to 5x faster machine learning performance. Longer battery life, up to 21 hours",
    },
    {
      name: "Apple MacBook Air Laptop 2020",
      price: 929.99,
      rating: 5,
      image: MacbookAir2020,
      about:
        "All-Day Battery Life — Go longer than ever with up to 18 hours of battery life depending on use. Powerful Performance — Take on everything from professional-quality editing to action- packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using far less power. Superfast Memory — 8GB of unified memory makes your entire system speedy and responsive. That way, it can support tasks like memory-hogging multi-tab browsing and opening a huge graphic file quickly and easily. Stunning Display — With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colours are more vibrant.",
    },
    {
      name: 'ASUS Chromebook CX1100 11.6" Laptop',
      price: 129.99,
      rating: 4,
      image: AsusChromebook,
      about:
        "Intel Celeron N3350 Processor 1.1 GHz (2M Cache, up to 2.4 GHz, 2 cores) - 11.6-inch LED Backlit HD (1366 x 768) 16:9 - 4GB LPDDR4 on board - Operating System : Chrome",
    },
    {
      name: 'ASUS ExpertBook B1500 15.6" Full HD Laptop',
      price: 299.99,
      rating: 3,
      image: AsusExpertbook,
      about:
        "WAMD Ryzen 3 3250U Processor 2.6 GHz (4M Cache, up to 3.5 GHz, 2 cores) - 8GB DDR4 RAM on board - 256GB M.2 NVMe PCIe 3.0 SSD - Operating System : Windows 10 Home with free upgrade to Windows 10",
    },
    {
      name: "Lenovo IdeaPad 3 15 Inch Full HD Laptop",
      price: 499.99,
      rating: 3,
      image: LenovoIdeaPad,
      about:
        "YOUR DAILY COMPUTING COMPANION - Thin, light in a stylish blue body, powered by a reliable Intel processor. Pre-loaded with Windows 11. GREAT COMMUNICATIONS - Built in webcam with privacy shutter and stable connection through built in Intel WiFi 6. RUN YOUR FAVOURITE PROGRAMS AND GAMES - Powerful enough to run Microsoft Office, Zoom, Teams and games like Roblox and Minecraft (not included). BRIGHT DISPLAY - Full HD (1080 x 1920) with IPS technology and anti-glare display framed by narrow bezels ",
    },
  ],
  Headphones: [
    {
      name: "Apple AirPods Pro with MagSafe charging case (2021)",
      price: 189.99,
      rating: 4,
      image: AirpodsPro,
      about:
        "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music. Transparency mode for hearing and interacting with the world around you. Spatial audio with dynamic head tracking places sound all around you. Adaptive EQ automatically tunes music to your ears. Three sizes of soft, tapered silicone tips for a customisable fit",
    },
    {
      name: "Sony MDR-ZX110 Overhead Headphones - Black",
      price: 12.99,
      rating: 2,
      image: SonyMDR,
      about:
        "30 mm dome drivers for balanced sound. High energy neodymium magnets deliver powerful sound. 12-22 kHz frequency range. Padded ear cups for comfortable listening. Choice of colours to suit your style.",
    },
    {
      name: "Sony WH-CH510 Wireless Bluetooth Headphones with Mic",
      price: 29.99,
      rating: 4,
      image: SonyWH,
      about:
        "Up to 35 hours long battery life. 10 minutes Quick Charge for 90 minutes playback. Sleek, swivel fold design for compact on-ear style. Built-in microphone, enabling hands free voice calls",
    },
    {
      name: "Betron ProX7 Earphones, In Ear Headphones with Mic and Volume Control, Dual Driver Quality Headset, Black",
      price: 1.99,
      rating: 2,
      image: BetronHeadphones,
      about:
        "Complete with a dynamic dual driver system unlike standard headphones, these noise isolating headphones are designed to provide HD stereo and bass sound, whether working out or simply relaxing at home. Complete with a selection of different-sized earbuds, you can select the most compatible fit for your ear shape. Ensuring optimum comfort all day long, you ll never have to worry about these headphones feeling painful or uncomfortable. Featuring an innovative tangle-free design, the Y-shaped cord of these headphones has been carefully crafted to remain smooth and hassle-free; allowing you to go about your day without wasting time untangling wires.",
    },
    {
      name: "Samsung EHS64 3.5 mm Earphones with Remote - White",
      price: 0.99,
      rating: 3,
      image: SamsungHeadphones,
      about:
        "Genuine Samsung accessory. In-Line Mic with Remote Function. Call Answer/End Button. Stereo Sound. Soft Ear-Gels help isolating noise",
    },
    {
      name: "JVC Gumy In-Ear Wired Headphones Earphones Compatible with iPod, iPhone, Samsung - White",
      price: 1.49,
      rating: 1,
      image: PureHeadphones,
      about:
        "Powerful sound with 13.5mm neodymium driver unit. Oval form soft rubber body for comfortable fit. 1m colour cord with nickel-plated iPhone compatible slim plug. Available in eight vivid colours. Environmentally-friendly package made of 75% recycled plastic from post-consumer waste",
    },
  ],
  Tops: [
    {
      name: "New Balance Classic Arch Tee",
      price: 17.49,
      rating: 5,
      image: NewBalanceTee,
      about:
        "Cotton/polyester jersey fabric for comfort. Athletic fit built to skim your chest, waist and hip — perfect for active movement with a fit that's not too tight. Cotton Jersey. Fastening: No Closure",
    },
    {
      name: "Nike Men's M Nk Dry Park Vii Jsy Ss T-shirt",
      price: 15.49,
      rating: 3,
      image: NikeMensTshirt,
      about:
        "Park VII SS Jersey. 100 Percent polyester. Machine Wash. Fastening: Pull On. Collar Style: One Piece Collar",
    },
    {
      name: "Under Armour Men's Sportstyle Top",
      price: 11.99,
      rating: 4,
      image: UnderArmourSport,
      about:
        "Everyday Style – This men's graphic tee is crafted to offer comfort and style. The tee can be worn casually or during workouts and is soft and loose. Soft on Skin –The men's short sleeve tee is crafted using super soft, comfortable fabric that is kind to skin and offers relief all day long. 60% Cotton, 40% Polyester",
    },
    {
      name: "Holure Men's 3 Pack Sportswear Breathable Quick-Drying Short-Sleeved T-Shirt",
      price: 29.99,
      rating: 3,
      image: HolureTee,
      about:
        "-SHIRT FABRIC - Solid: Mesh Fabric, 100% Polyester, Machine Washable.(Heather Grey: 90.5% Polyester,9.5% spandex, NO MESH). Lightweight, stretchy, moisture-wicking power fabric workout out training shirts. 100% Polyester. Machine Wash. Fastening: Pull On",
    },
  ],
  Shorts: [
    {
      name: "TCA Men's Aeron Gym/Running Shorts with Pockets",
      price: 19.99,
      rating: 4,
      image: TCAShorts,
      about:
        "The perfect blend of comfort and performance. Classic fit short built from breathable Aeron fabric. Perfect for relaxed runs, strength training and general activity. Endorsed by professional athletes. TCA D.R.Y. technology wicks sweat from the skin, allowing it to rapidly evaporate on the fabric surface, keeping you dry, light and comfortable at all times.",
    },
    {
      name: "Lixada Mens 2-in-1 Running Shorts Quick Drying Breathable Active Training Exercise Jogging Cycling Shorts with Longer Liner",
      price: 12.99,
      rating: 3,
      image: LixadaShorts,
      about:
        "HIGH QUALITY MATERIAL, MORE DURABLE: Lixada running shorts are made from 100% super breathable polyester fabric, more durable and comfortable, it can really keep you cool during training. Compared to other running shorts, our shorts have double reinforced stitching to ensure its best performance and durability. Most importantly, the lining is much smoother than others. Friction-free and moisture-wicking: Built-in long mesh lining wicks moisture and dries quickly for optimal comfort and privacy protection, which is really a good feature for humans. The long lining is smooth and comfortable, you will not suffer from rubbing during running or training.",
    },
    {
      name: "Under Armour Raid 8 Men's Sports Shorts",
      price: 28.99,
      rating: 5,
      image: UnderArmourRaidShorts,
      about:
        "Comfortable Shorts Designed to be comfy and essential, these men's exercise shorts are ideal for sports, training, running, jogging and the gym. Ultralight & Fast-Drying Crafted from quick-drying material, the running shorts are incredibly light and prevent the build-up of perspiration. 90% Polyester, 10% Elastane",
    },
    {
      name: "Under Armour Men's Qualifier Wg Perf Short 5in Short",
      price: 23.49,
      rating: 4,
      image: UnderArmourPerfShorts,
      about:
        "Ultra-light, stretch-woven fabric for totally unrestricted movement. 4-way stretch construction moves better in every direction. 100% Synthetic. Machine Wash",
    },
    {
      name: "NIKE Men's M Nk Dry Park Iii Short Nb K Sport Shorts",
      price: 23.49,
      rating: 4,
      image: NikeDryShorts,
      about:
        "Contrast mesh panel on both sides. Nike Dry fabric. 100% Polyester. Machine Wash. Fastening: Pull On",
    },
  ],
  Jeans: [
    {
      name: "Levi's Women's 724 High Rise Straight to The Nine Jeans",
      price: 51.49,
      rating: 4,
      image: LeviHighJeans,
      about:
        "70% Lyocell, 18% Polyester, 10% Cotton, 2% Elastane. Machine Wash. Fastening: Button, Zipper. High - Straight - Regular",
    },
    {
      name: "Lee Women's Petite Relaxed Fit Straight Leg Jean",
      price: 30.99,
      rating: 3,
      image: LeeJeans,
      about:
        "Mid rise; relaxed fit through the thigh. 5-pocket denim jean that sits at the waist and moves with you for all-day comfort. 82% Cotton, 17% Polyester, 1% Elastane. Machine Wash. Fastening: Zipper. High - Straight",
    },
    {
      name: "Levi's Women's Mile High Super Skinny Black Celestial Jeans",
      price: 32.99,
      rating: 5,
      image: LeviMileJeans,
      about:
        "EExtra high rise. Ultra sleek look. 74% Cotton, 15% Lyocell, 6% Polyester, 5% Elastane. Machine Wash. Fastening: Button, Zipper. - High Skinny",
    },
    {
      name: "Pepe Jeans Women's Soho Skinny Jeans",
      price: 35.99,
      rating: 4,
      image: PepeJeans,
      about:
        "Features edged pockets and waist. Pepe Jeans London detail is embroidered on the coin pocket. 83.5% Cotton, 14.5% Polyester, 2% Elastane. Machine Wash. Fastening: Button, Zipper",
    },
  ],
};
