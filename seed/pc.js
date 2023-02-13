const db = require('../db')
const pc = require('../models/pc')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const pcs = 
    [
        {
          backdrop_path: "https://i.imgur.com/fpzAuvq.jpg",
          id: 1,
          title: "ALIENWARE AURORA RYZEN™ EDITION R14 GAMING DESKTOP",
          CPU: "AMD Ryzen™ 5 5600X (35 MB total cache, 6 cores, 12 threads, up to 4.60 GHz Max Boost Clock)",
          GPU: "AMD® Radeon™ RX 6500 XT, 4 GB GDDR6",
          memory: "16GB, 2x8GB, DDR4, 3200MHz, XMP",
          storage: "512 GB, M.2, PCIe NVMe, SSD",
          powerAndCooling: "Dark side of the Moon 460W Bronze Rated Power Supply / Air-Cooled Processor and Solid Side Panel",
          price: "$1,509.99",
          release_date: "February 02, 2023"
        },
        {
            backdrop_path: "https://i.imgur.com/Eapuvma.jpg",
            id: 2,
            title: "INFINITY XLC GAMING PC",
            CPU: "Intel® Core™ Processor i9-13900K 8P/16 + 16E 3.00GHz [Turbo 5.7GHz] 36MB Cache LGA1700",
            GPU: "GeForce RTX™ 4070 Ti 12GB GDDR6X Video Card (Ada Lovelace) [VR Ready] (Single Card)",
            memory: "16GB (16GBx1) DDR5/6000MHz Dual Channel Memory (Team T-Delta RGB)",
            storage: "1TB WD Black SN750SE PCIe Gen 4 SSD + 4TB SATA III Hard Drive Combo (Combo Drive)",
            powerAndCooling: "850 Watts - High Power 850W 80+ GOLD ATX 3.0 Ready / CyberPowerPC DEEPCOOL Castle 240EX ARGB 240mm AIO Liquid CPU Cooling System w/ Copper Cold Plate (2 x Standard 120MM Fans)",
            price: "$2,489.99",
            release_date: "February 10, 2023"
          },
          {
            backdrop_path: "https://i.imgur.com/gp0Yz83.jpg",
            id: 3,
            title: "Digital Storm Lumos",
            CPU: "Intel Core i5-13600KF (5.1 GHz Turbo) (20-Thread) (14-Core) 3.5 GHz (Raptor Lake)",
            GPU: "1x GeForce GTX 1650 4GB",
            memory: "16GB DDR4 3200MHz Digital Storm Performance Series",
            storage: "1x SSD M.2 (500GB Digital Storm M.2 Performance Series) (NVM Express)",
            powerAndCooling: "700W Digital Storm Performance Series / H20: Stage 1: Digital Storm Vortex Liquid CPU Cooler (Single Fan)",
            price: "$1,511.99",
            release_date: "February 06, 2023"
          },
          {
            backdrop_path: "https://i.imgur.com/e9W4HV7.jpg",
            id: 4,
            title: "AMD Ryzen 3 Barebones",
            CPU: "AMD A6-9500E Bristol Ridge 3.0GHz ",
            GPU: "GeForce GT 710 1GB, PCI EXpress 2.0",
            memory: "MEMORY DDR4 8GB",
            storage: "500GB SATA3, 6GB/s 32m cache ",
            powerAndCooling: "400W ATX Power Supply / AMD Cooler Aluminum CPU fan  (Single Fan)",
            price: "$539.50",
            release_date: "February 11, 2023"
          },
          {
            backdrop_path: "https://i.imgur.com/PFMVUgD.jpg",
            id: 5,
            title: "VENGEANCE i7400 Gaming PC",
            CPU: " Intel Core i9-13900K ",
            GPU: " NVIDIA GeForce RTX 4090",
            memory: "64GB (2x32GB) DDR5-5600MHz",
            storage: " 2TB NVMe SSD ",
            powerAndCooling: "1000W ATX 80 PLUS Gold / Liquid CPU, Air GPU",
            price: "$3,949.99",
            release_date: "February 07, 2023"
          },
          {
            backdrop_path: "https://i.imgur.com/VOfCA1i.jpg",
            id: 6,
            title: "VENGEANCE i7400 Gaming PC",
            CPU: "  Intel Core i5-6500 3.2GHz 4C ",
            GPU: " Intel HD 530 Graphics",
            memory: " 16GB DDR4",
            storage: "  240GB SSD+1TB HDD ",
            powerAndCooling: "High Power 850W 80+ GOLD / AMD Cooler Aluminum CPU fan  (Single Fan)",
            price: "$479.99",
            release_date: "February 01, 2023"
          }
    ]
    await pc.insertMany(pcs)
    console.log("Created some pcs!")
}
const run = async () => {
    await main()
    db.close()
}

run()