/* ====== EDIT THIS PART ====== */
const SHOP_NAME = "Hotspot";
const WHATSAPP = "96103059976"; // country code + number, no + or spaces (Lebanon = 961)
const CURRENCY = "$";
const PAYMENT_NOTE = "Pay on delivery"; // shown in the WhatsApp order message
const ORDER_PREFIX = "#";  // text before the order number, e.g. "#" gives #0001. Use "" for none.
const ORDER_DIGITS = 4;    // number of digits, 4 gives 0001, 0002 ...
const ORDER_START = 1;     // the very first order number (use 0 to start from 0)
// img: photo file name inside the "images" folder, e.g. img:"images/case1.jpg". Leave it out to show a colored tile.
// inStock: false shows "Sold out". To add an item, copy one block, change the id to a new number, and edit the rest.
// colors: OPTIONAL. Two (or more) color choices. Each has a name, a hex for the little circle, and its own photo.
//   colors:[{name:"Black",hex:"#111111",img:"images/a1.png"},{name:"Red",hex:"#d71f2b",img:"images/a1-red.png"}]
//   Picking a color swaps the photo. Leave "colors" out and the product works as before.
// deals: OPTIONAL quantity prices. "price" stays the price of 1 piece; each deal is {qty, price}.
//   Example: 1 piece $2, 3 pieces $5  ->  price:2, deals:[{qty:3,price:5}]
//   The cart works it out: 4 pieces = $5 + $2 = $7, 6 pieces = $10. You can list more than one deal.
// desc: short text shown on the card AND in the popup.
// details: list shown only in the popup. Use "Label: value" for two columns, or plain text for a single line.
const PRODUCTS = [
 {id:1,name:"FlashLight",cat:"Light",price:15,inStock:true,img:"a1.png",color:"#3f6e9a",
  desc:"Bright rechargeable flashlight",
  details:["Type: Rechargeable","Charging: USB","Warranty: 1 month"]},

 {id:2,name:"Projector",cat:"Light",price:80,inStock:true,img:"a2.png",color:"#5b5f6e",
  desc:"Mini projector for movies and games",
  details:["Connection: HDMI / USB / Phone","Use: Home, indoor","Warranty: 1 month"]},

 {id:3,name:"Speaker Wireless",cat:"Speaker",price:13,inStock:true,img:"a3.png",color:"#0f5c5a",
  desc:"Portable Bluetooth speaker",
  details:["Connection: Bluetooth","Charging: USB","Warranty: 1 month"]},

 {id:4,name:"SUP 3'",cat:"Games",price:12,inStock:true,img:"a4.png",color:"#8a5a2b",
  desc:"Handheld game console",
  details:["Games: Built-in","Charging: USB","Warranty: 1 month"]},

 {id:5,name:"Fast charger 25W",cat:"Chargers",price:15,inStock:true,color:"#b4566a",
  deals:[{qty:2,price:28},{qty:5,price:65}],
  desc:"25W fast wall charger",
  details:["Power: 25W","Port: USB-C","Warranty: 1 month"]},

 {id:6,name:"Wireless Microphone HIFI Speaker",cat:"Speaker",price:18,inStock:true,img:"a5.png",color:"#7a6a8f",
  desc:"Wireless microphone with built-in speaker",
  details:["Connection: Bluetooth","Use: Karaoke, parties","Warranty: 1 month"]},

 {id:7,name:"Samsung Watch",cat:"Watch",price:110,inStock:true,img:"a6.png",color:"#a3476e",
  desc:"Smart watch",
  details:["Brand: Samsung","Connection: Bluetooth","Warranty: 1 month"]},

 {id:8,name:"Airpods",cat:"Earphones",price:25,inStock:true,img:"a7.png",color:"#4c7a5a",
  colors:[{name:"Black",hex:"#1a1a1a",img:"a7.png"},{name:"White",hex:"#ffffff",img:"a8.png"}],
  desc:"ANC+ENC Technology, Connection support up to tow phones",
  details:["Brand: Hoco","Connection: Bluetooth"]}
];
/* ============================ */
