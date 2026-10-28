/* ====== EDIT THIS PART ====== */
const SHOP_NAME = "Hotspot";
const WHATSAPP = "96103059976"; // country code + number, no + or spaces (Lebanon = 961)
const CURRENCY = "$";
// img: photo file name inside the "images" folder, e.g. img:"images/case1.jpg". Leave it out to show a colored tile.
// inStock: false shows "Sold out". To add an item, copy one block, change the id to a new number, and edit the rest.
// desc: short text shown on the card AND in the popup.
// details: list shown only in the popup. Use "Label: value" for two columns, or plain text for a single line.
const PRODUCTS = [
 {id:1,name:"FlashLight",cat:"Light",price:15,inStock:true,img:"images/a1.png",color:"#3f6e9a",
  desc:"Bright rechargeable flashlight",
  details:["Type: Rechargeable","Charging: USB","Warranty: 1 month"]},

 {id:2,name:"Projector",cat:"Light",price:80,inStock:true,img:"a2.png",color:"#5b5f6e",
  desc:"Mini projector for movies and games",
  details:["Connection: HDMI / USB","Use: Home, indoor","Warranty: 1 month"]},

 {id:3,name:"Speaker Wireless",cat:"Speaker",price:13,inStock:true,img:"a3.png",color:"#0f5c5a",
  desc:"Portable Bluetooth speaker",
  details:["Connection: Bluetooth","Charging: USB","Warranty: 1 month"]},

 {id:4,name:"SUP 3'",cat:"Games",price:12,inStock:true,img:"a4.png",color:"#8a5a2b",
  desc:"Handheld game console",
  details:["Games: Built-in","Charging: USB","Warranty: 1 month"]},

 {id:5,name:"Fast charger 25W",cat:"Chargers",price:15,inStock:true,color:"#b4566a",
  desc:"25W fast wall charger",
  details:["Power: 25W","Port: USB-C","Warranty: 1 month"]},

 {id:6,name:"Wireless Microphone HIFI Speaker",cat:"Speaker",price:18,inStock:true,img:"a5.png",color:"#7a6a8f",
  desc:"Wireless microphone with built-in speaker",
  details:["Connection: Bluetooth","Use: Karaoke, parties","Warranty: 1 month"]},

 {id:7,name:"Samsung Watch",cat:"Watch",price:110,inStock:true,img:"a6.png",color:"#a3476e",
  desc:"Smart watch",
  details:["Brand: Samsung","Connection: Bluetooth","Warranty: 1 month"]},

 {id:8,name:"Tempered glass protector",cat:"Screen protectors",price:4,inStock:false,color:"#4c7a5a",
  desc:"Scratch-resistant screen protector",
  details:["Type: Tempered glass","Fits: Ask us for your model"]}
];
/* ============================ */
