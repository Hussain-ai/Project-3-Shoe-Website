//seeds.js
require('dotenv').config()
require('./config/database')
const review = require('./models/review')
const shop = require('./models/shop')
// const Product = require('./models/shop')
//place Products data info below
shop.insertMany([
    {
      name: "Money Heist Zig Kinetica II",
      desc:"Product Description:0Engineered, seamless design mesh upper with strategic support zones0Melded neoprene collar for comfort0Eyelets with secure lace-up closure0Float ride Fuel for an energized cushioning experience0Innovative Zig Energy Bands outsole stretches and snaps back to help return energy with each step0Patterned rubber outsole for traction and grip0Contrast Reebok signature branding",
      price:"70$",
      size: ["40","42","44","46","48"],
      category:"Men",
      img:"https://lh6.googleusercontent.com/YaU4yzzMghaqpIs-qAqAXj-m9ka2XwVWu2di4PTyPFhOMhVvnYFbF6Ahz6eINnM0Y7OXLWvcAbXJ43nPduLGVwVsqrpI-YSkTpbKh_yxykJTxahPBRHnTKd0eYBZushMs8Zyz5Q_LbENybDi7rEGtevkfhdgu-jNfRFhuZ9FaiIFq_e8zwGmvECZTtae1w=s800",
      reviews:''
    },
   
  {
      name: "Downshifter 12",
      desc:"Product Description:0Perfect sporty and casual pair to complement contemporary athleisure edits.0Stretchy and breathable mesh upper.0Eyelets with secure lace-up closure0Soft foam underfoot provides everyday cushioning0Pull tab on heel top for easy on-off0Patterned rubber outsole for traction and durability0Contrast Nike swoosh branding print",
      price:"34$",
      size:["40","42","44","46","48"],
      category:"Men",
      img:"https://lh3.googleusercontent.com/aH4ByaYkQta01QOPREmF7D2LWNlexhkUoAKCFyRF726CJfmSk1J_oekBfe4j3ngvmBaz3rz6tmi_HWajUQZavbxpmBUBAFYuM2Kt5ZtvTrWsd9gHDVbtma4Gl1UPEsW2V2rCHa2bQtQ4Fka4OQHtbNCBipm49ggQmB5Jez2jnP8VDzIg3kDPiU7TPq4Pew=s800$https://lh5.googleusercontent.com/IPznm5k4l72O8pGyXUZuLDB4GON0CY4V6oj36bsmrX9fsi0BoNUeCGOhC8PR-qpJuHCdCuWtu800sfXHlOLFzDFx5VhvYJqMpafJ3lKKXWl5GyfaJpAMW2dDzWGOrmEv_Rj91gRu8_6KG0XUiGdNDHJvfv4I1cMleOD6hy0gloewR6izEI5r2SltcEu32w=s800$https://lh3.googleusercontent.com/7-2dXjD8sCj3mMrfez-2h2Wzd6R-GdqO9TO6RzPAK7N9P4txWG0_w2fB4a2eSYO9LdTsFt7JvknmdLkcyQOCFTpOSGWQhTUFtELSWQQsJfT8e9s8Nat3oozK8vjw93Q4saor5yqWQ0t04_jxGlWTS0HAgoIPiz6HTX6ht6ecddzZt-ghsB5WZnzE3h5xyA=s800",
      reviews:""
  },
  {
      name:"Race 21 Shoes",
      desc:"Product Description:0Influenced by running style, these adidas shoes bring sports vibes to your everyday look.0Durable mesh and leather upper0Eyelets with secure lace-up closure0Cushioned footbed for added comfort0Sculpted Cloudfoam midsole for all day comfort0Patterned outsole for better grip and durability0Contrast adidas signature branding",
      price:"50$",
      size:["40","42","44","46","48"],
      category:"Men",
      img:"https://lh4.googleusercontent.com/0N1ArtnO3bHTR5rwMTUCyXVY7i4RrzewXcfyPx1lMvmCQg5gvSXtwhSkQP8DBuuXjmcQU_f39yOob34asARJKVGYA2O8yrPPlr--mYbmq9kCIFqUTuIO7n5HPdJTqZgC9rpG_zV1uRbK3Xa3bhoU9-iOCJKsjgUR6GEZpFjAshdYPx4Yf_cmLJBMa32H1A=s800$https://lh4.googleusercontent.com/1HFWKV48A8PASDQSTOvZhsZkq67mwV30kO0wNgnyrwGgAZFHn5BoPhtYqBRIsvtUB8sjVukfOBe8-LIohLf1XN_tPz-po4CuYmvaU_tU1Chul3U4FsFAFLlKtE45C2XPz4MEBYXZiuwnZVEdb-rwxaroq3Kr6lrqUcqC260iDMwngSgnRjmRjRAK70kjJw=s800$https://lh5.googleusercontent.com/DjeXDeILFjgqUoD5eXbtXqN05za8DxxrT7Ji_EodAZrqSWSXY1KY-mU2BXwj-czgI6fpaG75UgcpzYClCc3x3vLfhdg4LlnCJ7nW09CaEzDB2BVHX8gedkWWumC6ZL_0gfz2yjNEtwxzoBX8OlQ9yKbwBHLP8Pd7JUtmsP3aQMqQqbFfW6VbYxyacoVJCw=s800",
      reviews:''
  },
  {
      name:"Defyallday",
      desc:"Product Description0Durable and genuine leather upper0Eyelets for secure lacing system0Soft foam cushioning for added comfort0Patterned rubber outsole for durability and traction0Nike swoosh branding detail",
      price:"45$",
      size:["small","medium","large"],
      category:"Women",
      img:"https://lh3.googleusercontent.com/DJ4T_3gY1qjB33betG7bL0LhOL6cQYCDW8c_IIU_0dFwKG-pUh_Yo7h8TacKMcmrtdaPfqyFLBXBxjsaKX-sRvWvnwv1wVC2nPRvpX_OZUmQXPutBDeLzQZOG6kAL9pm-b8kakfRe94pA8Ypk8G36Ytr6tho0Z30pL0IZFsIN3I8hcdn1xnk7kW6nq2hjQ=s800",
      reviews:''
  },
  // {
  //     name:"",
  //     desc:"",
  //     price:"",
  //     img:""
  // }
  ] 
  )

// Product.deleteMany({}).then(()=> console.log('deleted!'))

// review.insertMany([
//     {
//         name: 'Hussein',
//         content: 'I get red text around name and content',
//     },
//     {
//         name: 'Mohd',
//         content: 'Hello World!',
//     },
//     {
//         name: 'Kareem',
//         content: 'If you can hear me put your hand down',
//     }
// ])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))





