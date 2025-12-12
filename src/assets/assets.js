import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import short1 from './short1.jpg'
import short2 from './short2.jpg'
import short3 from './short3.jpg'
import skirt from './skirt.jpg'
import skirt2 from './skirt2.png'
import skirt3 from './skirt3.png'
import t1 from './t1.webp'
import t2 from './t2.webp'
import t3 from './t3.webp'
import tshirt1 from './tshirt.webp'
import tshirt2 from './tshirt2.webp'
import tshirt3 from './tshirt3.webp'
import w from './w.jpg'
import w2 from './w2.jpg'
import w3 from './w3.jpg'
import logo from './logo.png'
import searchicon from './searchicon.png'
import profileicon from './profileicon.png'
import carticon from './carticon.png'
import menuicon from './menuicon.png'
import back from './back.png'
import fashion from './fashion.jpg'
import exchangeicon from './exchangeicon.jpg'
import qualityicon from './qualityicon.jpg'
import supporticon from './supporticon.png'
import right from './right.png'
import Winterwear from './Winterwear.jpg'
import bb from './bb.jpg'
import bb2 from './bb2.jpg'
import bb3 from './bb3.jpg'
import bk from './bk.jpg'
import bk1 from './bk1.jpg'
import bk2 from './bk2.jpg'
import bk3 from './bk3.jpg'
import bkids from './bkids.png'
import bkids2 from './bkids2.png'
import gt from './gt.jpg'
import gt2 from './gt2.jpg'
import gt3 from './gt3.jpg'
import gw from './gw.png'
import s1 from './s1.webp'
import s2 from './s2.webp'
import s3 from './s3.webp'  
import s4 from './s4.webp'
import ski from './ski.png'
import ski1 from './ski1.png'
import wr from './wr.webp'
import wr1 from './wr1.jpg'
import wr2 from './wr2.jpg'
import ww from './ww.jpg'
import ww1 from './ww1.jpg'
import ww2 from './ww2.jpg'
import menshirt from './menshirt.webp'
import menshirt2 from './menshirt2.webp'
import menshirt1 from './menshirt1.webp'
import jeans from './jeans.webp'
import jeans1 from './jeans1.webp'
import jeans2 from './jeans2.webp'
import kurti from './kurti.webp'
import kurti1 from './kurti1.webp'
import kurti2 from './kurti2.webp'




export const assets = {
  kurti, kurti1, kurti2,
  jeans,jeans1,jeans2,
  menshirt,menshirt1,menshirt2,
  wr,
  wr1,
  wr2,
  ww,
  ww1,
  ww2,
  ski,
  ski1,
  s1,
  s2,
  s3,
  s4,
  gw,
  gt,
  gt2,
  gt3,
  bkids,
  bkids2,
  bb,
  bb2,
  bb3,
  bk,
  bk1,
  bk2,
  bk3,
  menuicon,
  right,
  Winterwear,
  qualityicon,
  supporticon,
  exchangeicon,
  fashion,
  back,
  profileicon,
  carticon,
  logo,
  searchicon,
  c1, c2, c3,
  short1, short2, short3,
  skirt, skirt2, skirt3,
  t1, t2, t3,
  tshirt1, tshirt2, tshirt3,
  w, w2, w3
}

export const products = [
  {
    _id: "1",
    name: "women stylish top wear",
    description: "Korean Retro Style Vintage Floral Jacquard Lace-up Corset Top",
    price: 799,
    image: [c1, c2, c3],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-06-10T10:20:30Z",
    bestseller: true,
  },
  {
    _id: "2",
    name: "Onepics",
    description: "Short Dress for Women and Girls",
    price: 1399,
    image: [short1, short2, short3, skirt],
    category: "Women",
    subCategory: ["Summerwear","Topwear"],
    sizes: ["S", "M", "L", "XL"],
    date: "2024-05-15T09:15:00Z",
    bestseller: true,
  },
  {
    _id: "3",
    name: "Skirt",
    description: "Floral Printed Flared Maxi Skirt.",
    price: 999,
    image: [skirt, skirt2, skirt3],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-04-20T14:30:00Z",
    bestseller: false,
  },
  {
    _id: "4",
    name: "Men's T-Shirt",
    description: "Casual Cotton Crew  Neck T-Shirt for Men",  
    price: 499,
    image: [tshirt1, tshirt2, tshirt3],
    category: "Men",  
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-06-05T11:00:00Z",
    bestseller: true,
    
  },
{
  _id: "5",
  name: "Winter Jacket",
  description: "Warm and Stylish Winter Jacket for Cold Weather",
  price: 2499,
  image: [Winterwear],
  category: "Women",
  subCategory: ["Winterwear", "Topwear"],
  sizes: ["M", "L", "XL"],    
  date: "2024-01-10T08:00:00Z",
  bestseller: false,
},
{
  _id: "6",
  name: "top",
  description: "Stylish Top for All Occasions",
  price: 699,
  image: [t1, t2, t3],
  category: "Women",
  subCategory: "Topwear",
  sizes: ["S", "M", "L", "XL"],
  date: "2024-03-12T12:00:00Z",
  bestseller: true, 

},
{
  _id: "7",
  name: "casual skirt",
  description: "Comfortable Casual Skirt for Daily Wear",
  price: 544,
  image: [ski, ski1],
  category: "Kids",
  subCategory: "Topwear",
  sizes: ["S", "M", "L"],
  date: "2024-05-22T10:30:00Z",
  bestseller: false,
},
{  _id: "8",
  name: "winter robe",
  description: "Cozy Winter Robe for Kids",
  price: 1299,
  image: [ww, ww1, ww2],
  category: "Kids",
  subCategory: "Winterwear",
  sizes: ["S", "M", "L"],
  date: "2024-01-25T09:00:00Z",
  bestseller: true,

},
{
  _id: "9",
  name: "sleeve top",
  description: "Elegant Sleeve Top for  Women",
  price: 899,
  image: [w, w2, w3],   
  category: "Women",
  subCategory: ["Topwear","Summerwear"],
  sizes: ["S", "M", "L", "XL"],
  date: "2024-02-18T16:45:00Z",
  bestseller: false,
},
{
  _id: "10",
  name: "graphic t-shirt",
  description: "Trendy Graphic T-Shirt for kidss",
  price: 599,
  image: [wr, wr1, wr2],  
  category: "Kids",
  subCategory: ["Topwear","Summerwear"],
  sizes: ["S", "M", "L"],
  date: "2024-04-30T14:20:00Z",
  bestseller: true,

},
{
  _id: "11",
  name:"men shirt",
  description:" Formal Shirt for Men",
  price: 1299,
 image: [ menshirt1, menshirt2],
  category:"Men",
  subCategory:"Topwear",
  sizes:["S","M","L","XL"],
  date:"2024-06-12T10:00:00Z",
  bestseller:true,
},
{
  _id:"12",
  name:"denim jeans",
  description:"Classic Denim Jeans for  Men",
  price:1599,
  image:[jeans,jeans1,jeans2],
  category:"Men",   
  subCategory:"Bottomwear",
  sizes:["S","M","L","XL"],
  date:"2024-05-18T11:30:00Z",
  bestseller:false,

},
{
  _id:"13",
  name:"traditional kurti",
  description:"Elegant Traditional Kurti for  Women",
  price:1099,
  image:[kurti1,kurti2,kurti,],
  category:"Women",         
  subCategory:["Topwear","Summerwear"],
  sizes:["S","M","L","XL"],
  date:"2024-04-25T09:15:00Z",
  bestseller:true,  
}

    
    
];
