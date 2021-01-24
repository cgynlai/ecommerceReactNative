const products = [
   {
      id: "1",
      name: "Calbury",
      Ingredients: "Choco, skimmed milk and permitted flavour",
      weight: "425g",
      description: "Calbury Milk Choco.",
      image: require("./assets/Image/calbury_chocoA.jpg"),
      price: 4.90,
      cat_id: "snack"
   },

   {
      id: "2",
      name: "noodle",
      Ingredients: "Wheat flour, salt and water",
      weight: "340g",
      description: "Non-fried Shanghai style noodle. Good for soup and stir frying.",
      image: require("./assets/Image/dry_noodle.jpg"),
      price: 1.90,
      cat_id: "noodle"
   },
   {
      id: "3",
      name: "Udon",
      Ingredients: "Wheat flour, tapioca starch,salt and water",
      weight: "400g",
      description: "Korean udon. Good for soup and stir frying.",
      image: require("./assets/Image/Udon.jpg"),
      price: 3.50,
      cat_id: "noodle"
   },
   {
      id: "4",
      name: "knife cooking oil",
      Ingredients: "refined palm oil, peanut oil",
      weight: "1.5L",
      description: "king oil, rich in Vitamin E. Ideal for cooking, dressing salads and cold dishes.",
      image: require("./assets/Image/knife_cooking_oil.jpg"),
      price: 9.90,
      cat_id: "cooking oil"
   },

   {
      id: "5",
      name: "cooking_oil",
      Ingredients: "refined palm oil, peanut oil",
      weight: "1.5L",
      description: "king oil, rich in Vitamin E. Ideal for cooking, dressing salads and cold dishes.",
      image: require("./assets/Image/cooking_oil.jpg"),
      price: 8.90,
      cat_id: "cooking oil"
   },
   {
      id: "6",
      name: "cracker",
      Ingredients: "wheat cereal, Vitamin A,B1, B2,B3, calcium and sugar.",
      weight: "180g",
      description: "combination of essential nutrients containing vitamins and minerals. ",
      image: require("./assets/Image/hupseng_cracker.jpg"),
      "price": 4.90,
      "cat_id": "cookies"
   },

   {
      id: "7",
      name: "Nutella",
      Ingredients: "Hazelnuts 13%, Sugar, Vegetable fat, skimmed milk powder, emulsifier and lecithin.",
      weight: "680g",
      description: "Hazelnut spread with Cocoa. Enjoy your breakfast with great and unique taste.",
      image: require("./assets/Image/nutella.jpg"),
      price: 8.90,
      cat_id: "canned food"
   },

   {
      id: "8",
      name: "Potato chip",
      Ingredient: "Potato, salt, vegetable oil and flavoring",
      weiht: "185g",
      description: "Classic potato chips. Snacks for your leisure time.",
      image: require("./assets/Image/chip.jpg"),
      price: 4.90,
      cat_id: "snack"
   },

   {
      id: "9",
      name: "Pasta",
      Ingredients: "wheat flour and salt",
      weight: "125g",
      description: "delicious pasta for all kind of meal.",
      image: require("./assets/Image/pasta.jpg"),
      price: 2.90,
      cat_id: "noodle"
   },
   {
      id: "10",
      name: "Oatmeal",
      Ingredients: "Oat,fruit grain and sugar.",
      weight: "1kg",
      description: "Rich in fiber, protein and beta glucan. Just add hot water.",
      image: require("./assets/Image/oatmeal.jpg"),
      price: 4.90,
      cat_id: "cereal"
   },
   {
      id: "11",
      name: "Tuna",
      Ingredients: "Tuna solid, extra virgin olive oil and chili.",
      weight: "33g",
      description: "Tuna in extra virgin olive oil, consumer healthier choice 2019.",
      image: require("./assets/Image/Tuna.jpg"),
      price: 1.90,
      cat_id: "canned food"
   },
   {
      id: "12",
      name: "Mackerel",
      Ingredients: "Mackerel, Tomato sauce and salt",
      weight: "425g",
      description: "Penguin high quality ready to eat mackerel in tomato sauce.",
      image: require("./assets/Image/Mackerelnew.jpg"),
      price: 2.90,
      cat_id: "canned food"
   },
   {
      id: "13",
      name: "Chilli Sauce",
      Ingredient: "Chilli, permitted flavour and sugar.",
      weiht: "380ml",
      description: "Maggie spicy chilli sauce ",
      image: require("./assets/Image/chilli_sauce.jpg"),
      price: 4.90,
      cat_id: "sauce"
   },
   {
      id: "14",
      name: "Chips More",
      Ingredient: "Choco, flour,permitted flavour and sugar.",
      weiht: "380g",
      description: "Chips more cookie ",
      image: require("./assets/Image/chips_moreA.jpg"),
      price: 3.90,
      cat_id: "cookies"
   },


   {
      id: "15",
      name: "Sardine",
      Ingredient: "Sardine, Tomato sauce and salt",
      weiht: "225g",
      description: "ready to eat sardine in tomato suase.",
      image: require("./assets/Image/sardine.jpg"),
      price: 2.90,
      cat_id: "canned food"
   },
   {
      id: "16",
      name: "Cashew Nuts",
      Ingredient: "Cashew nuts and salt",
      weiht: "225g",
      description: "Tong Garden salted cashew nuts",
      image: require("./assets/Image/cashew_nut.jpg"),
      price: 2.90,
      cat_id: "snack"
   },
   {
      id: "17",
      name: "Lay's Potato",
      Ingredient: "Potato, salt, vegetable oil and chilli",
      weiht: "185g",
      description: "Classic potato chips with hot spicy squid flavor.",
      image: require("./assets/Image/potato_chips.jpg"),
      price: 4.90,
      cat_id: "snack"
   },
   {
      id: "18",
      name: "Oyster Sauce",
      Ingredients: "Oyster, soy and permitted flavor.",
      weight: "380ml",
      description: "Maggie spicy chilli sauce ",
      image: require("./assets/Image/oyster_sauce.jpg"),
      price: 6.90,
      cat_id: "sauce"
   },


   {
      id: "19",
      name: "Soy Sauce",
      Ingredients: "Water, soybeans, wheat and salt.",
      weight: "480ml",
      description: "Kikkoman naturally brewed all purposed seasoning ",
      image: require("./assets/Image/soy_sauce.png"),
      price: 5.90,
      cat_id: "sauce",
      sales_id: true
   },
   {
      id: "20",
      name: "Nestum Grain",
      Ingredient: "Grain, corn, cereal and sugar.",
      weiht: "650g",
      description: "Rich in fiber, protein and beta glucan. Just add hot water.",
      image: require("./assets/Image/nestum_grain1.png"),
      price: 5.50,
      cat_id: "cereal"

   },
   {
      id: "21",
      name: "Butter Cookies",
      Ingredient: "Choco, Butter, flour and sugar.",
      weiht: "790g",
      description: "Chips more cookie ",
      image: require("./assets/Image/butter_cookie.png"),
      price: 12.90,
      cat_id: "cookies",
      sales_id: true
   },

   {
      id: "22",
      name: "Corn Flakes",
      Ingredients: "Corn, Cereal,fruit grain and sugar.",
      weight: "450g",
      description: "Rich in fiber, protein and beta glucan.",
      image: require("./assets/Image/corn_flakes.jpg"),
      price: 3.50,
      cat_id: "cereal"
   },

   {
      id: "23",
      name: "Honsen Pineapple",
      Ingredients: "Pineapples slices and syrup",
      weight: "325g",
      description: "Honsen canned pineapples slices in syrup.",
      image: require("./assets/Image/canned_fruit.png"),
      price: 3.90,
      cat_id: "canned food",
      sales_id: true

   },
   {
      id: "24",
      name: "Pasta Sauce",
      Ingredients: "Tomatoes, garlic, herbs and permitted flavor.",
      weight: "380ml",
      description: "Leggo's Bolognese sauce with garlic and herbs.",
      image: require("./assets/Image/tomato_sauce.png"),
      price: 5.90,
      cat_id: "sauce",
      sales_id: true
   }
]

export const getProducts = () => {
   return products;
   
}

