const { Product } = require('../models');

const snackums = [
    {
        "itemName": "Takis Fuego",
        "priceUSD": 1.49,
        "country": "mexico",
        "description": "Spicy rolled tortilla chips with a fiery flavor that's hard to resist."
    },
    {
        "itemName": "Sabritones",
        "priceUSD": 1.99,
        "country": "mexico",
        "description": "Puffed wheat snacks with a zesty chili and lime flavor."
    },
    {
        "itemName": "Chamoy-covered apples",
        "priceUSD": 2.99,
        "country": "mexico",
        "description": "Tart green apples covered in a sweet and tangy chamoy sauce."
    },
    {
        "itemName": "Tajin Seasoning",
        "priceUSD": 3.99,
        "country": "mexico",
        "description": "A zesty and tangy seasoning made with chili powder, lime, and salt."
    },
    {
        "itemName": "Churros",
        "priceUSD": 2.49,
        "country": "mexico",
        "description": "Crispy fried dough coated in cinnamon and sugar, perfect for dipping in hot chocolate or caramel sauce."
    },
    {
        "itemName": "Elote (Mexican corn on the cob)",
        "priceUSD": 3.99,
        "country": "mexico",
        "description": "Grilled corn on the cob brushed with mayonnaise, cotija cheese, and chili powder."
    },
    {
        "itemName": "Mango con chile y limon",
        "priceUSD": 2.99,
        "country": "mexico",
        "description": "Fresh mango slices dusted with chili powder and lime juice for a sweet and spicy snack."
    },
    {
        "itemName": "Chamoy Gummies",
        "priceUSD": 1.99,
        "country": "mexico",
        "description": "Chewy gummy candies with a sweet and tangy chamoy flavor."
    },
    {
        "itemName": "Flautas",
        "priceUSD": 4.99,
        "country": "mexico",
        "description": "Rolled tortillas filled with seasoned chicken or beef and deep-fried until crispy and golden brown."
    },
    {
        "itemName": "Dulce de Leche-filled Wafers",
        "priceUSD": 3.49,
        "country": "mexico",
        "description": "Thin and crispy wafer cookies filled with sweet and creamy dulce de leche."
    },
    {
        "itemName": "Mexican Hot Chocolate",
        "priceUSD": 5.99,
        "country": "mexico",
        "description": "Rich and creamy hot chocolate flavored with cinnamon, vanilla, and a touch of chili powder."
    },
    {
        "itemName": "Mexican-style roasted peanuts",
        "priceUSD": 1.99,
        "country": "mexico",
        "description": "Roasted peanuts with a spicy and smoky seasoning blend."
    },
    {
        "itemName": "Quesadillas",
        "priceUSD": 4.49,
        "country": "mexico",
        "description": "Grilled flour tortillas filled with melted cheese and your choice of meat or vegetables."
    },
    {
        "itemName": "Chicharrones",
        "priceUSD": 2.99,
        "country": "mexico",
        "description": "Crispy pork rinds seasoned with chili powder and lime juice."
    },
    {
        "itemName": "Salsa and chips",
        "priceUSD": 3.99,
        "country": "mexico",
        "description": "Freshly made salsa with diced tomatoes, onions, cilantro, and jalapeño peppers served with crispy tortilla chips."
    },
    {
        "itemName": "Pocky",
        "priceUSD": 3.99,
        "counrty": "japan",
        "description": "A thin, crunchy biscuit stick coated in various flavors of chocolate, such as strawberry, matcha, and chocolate."
    },
    {
        "itemName": "KitKat",
        "priceUSD": 4.99,
        "counrty": "japan",
        "description": "A chocolate-covered wafer biscuit that comes in a variety of unique and unusual flavors, such as green tea, sake, and wasabi."
    },
    {
        "itemName": "Calbee Jagabee Potato Sticks",
        "priceUSD": 2.99,
        "counrty": "japan",
        "description": "Crispy, crunchy potato sticks that come in a variety of flavors, such as butter soy sauce and honey butter."
    },
    {
        "itemName": "Umaibo",
        "priceUSD": 1.99,
        "counrty": "japan",
        "description": "A puffed corn snack that comes in various flavors, such as cheese, teriyaki burger, and corn potage."
    },
    {
        "itemName": "Hello Panda",
        "priceUSD": 3.49,
        "counrty": "japan",
        "description": "A crunchy, bite-sized biscuit with a creamy chocolate or strawberry filling that's shaped like a panda face."
    },
    {
        "itemName": "Dagashi Snacks",
        "priceUSD": 5.99,
        "counrty": "japan",
        "description": "A variety of traditional Japanese sweets and snacks, such as senbei rice crackers, mochi, and hi-chew candy."
    },
    {
        "itemName": "Pretz",
        "priceUSD": 2.99,
        "counrty": "japan",
        "description": "A savory biscuit stick that comes in various flavors, such as pizza, salad, and garlic."
    },
    {
        "itemName": "Lotte Koala's March",
        "priceUSD": 3.49,
        "counrty": "japan",
        "description": "A biscuit snack with a creamy chocolate or strawberry filling that's shaped like a koala face."
    },
    {
        "itemName": "Dorayaki",
        "priceUSD": 6.99,
        "counrty": "japan",
        "description": "A traditional Japanese sweet made of two pancake-like layers with a sweet red bean filling in the center."
    },
    {
        "itemName": "Onigiri",
        "priceUSD": 4.99,
        "counrty": "japan",
        "description": "A triangular-shaped rice ball wrapped in seaweed and filled with various ingredients, such as salmon, tuna, or pickled plum."
    },
    {
        "itemName": "Yatsuhashi",
        "priceUSD": 7.99,
        "counrty": "japan",
        "description": "A traditional Kyoto sweet made of mochi (sticky rice cake) filled with sweet red bean paste and flavored with cinnamon."
    },
    {
        "itemName": "Sakura Mochi",
        "priceUSD": 6.99,
        "counrty": "japan",
        "description": "A traditional Japanese sweet made of mochi (sticky rice cake) filled with sweet red bean paste and wrapped in a pickled cherry blossom leaf."
    },
    {
        "itemName": "Ramune",
        "priceUSD": 2.99,
        "counrty": "japan",
        "description": "A carbonated soft drink that comes in a unique glass bottle sealed with a marble, with flavors like original, strawberry, and melon."
    },
    {
        "itemName": "Haribo Goldbears",
        "priceUSD": 1.99,
        "counrty": "germany",
        "description": "A classic gummy candy that comes in a variety of fruity flavors."
      },
      {
        "itemName": "Ritter Sport Milk Chocolate",
        "priceUSD": 2.49,
        "counrty": "germany",
        "description": "Creamy milk chocolate with a snap of the distinctive square shape."
      },
      {
        "itemName": "Bahlsen Leibniz Cookies",
        "priceUSD": 3.99,
        "counrty": "germany",
        "description": "Buttery, crispy biscuits that are perfect for snacking or dipping in coffee."
      },
      {
        "itemName": "Lorenz Crunchips",
        "priceUSD": 1.79,
        "counrty": "germany",
        "description": "Crispy, flavorful potato chips in a variety of different flavors."
      },
      {
        "itemName": "Milka Chocolate Bar",
        "priceUSD": 1.99,
        "counrty": "germany",
        "description": "Creamy milk chocolate made with Alpine milk and a variety of other delicious flavors."
      },
      {
        "itemName": "Knoppers Wafers",
        "priceUSD": 2.99,
        "counrty": "germany",
        "description": "Crispy wafers with a creamy nougat filling and a milk chocolate coating."
      },
      {
        "itemName": "Manner Wafers",
        "priceUSD": 2.49,
        "counrty": "germany",
        "description": "Thin and crispy wafer cookies with a layer of hazelnut cream filling."
      },
      {
        "itemName": "Kinder Chocolate",
        "priceUSD": 1.99,
        "counrty": "germany",
        "description": "Smooth milk chocolate with a creamy milk filling."
      },
      {
        "itemName": "Hanuta Hazelnut Sandwich",
        "priceUSD": 2.99,
        "counrty": "germany",
        "description": "A delicious hazelnut cream filling between two crispy wafer layers."
      },
      {
        "itemName": "Bahlsen Hit Cocoa Cream Sandwich Cookies",
        "priceUSD": 3.49,
        "counrty": "germany",
        "description": "Soft cocoa cookies with a rich chocolate filling."
      },
      {
        "itemName": "Maggi Seasoning",
        "priceUSD": 3.99,
        "counrty": "germany",
        "description": "A versatile seasoning sauce that can be used in a variety of dishes."
      },
      {
        "itemName": "Milka Alpine Milk Chocolate with Whole Hazelnuts",
        "priceUSD": 2.99,
        "counrty": "germany",
        "description": "Creamy milk chocolate with whole hazelnuts."
      },
      {
        "itemName": "Milka Choco Wafer",
        "priceUSD": 1.99,
        "counrty": "germany",
        "description": "Crunchy wafer cookies with a milk chocolate coating."
      },
      {
        "itemName": "Paprika Chips",
        "priceUSD": 1.49,
        "counrty": "germany",
        "description": "Savory potato chips with a bold paprika flavor."
      },
      {
        "itemName": "Maultaschen",
        "priceUSD": 4.99,
        "counrty": "germany",
        "description": "Traditional German pasta pockets filled with ground meat, spinach, and spices."
      },
      {
        "itemName": "Stollen",
        "priceUSD": 5.99,
        "counrty": "germany",
        "description": "A traditional German fruitcake made with dried fruit, nuts, and spices."
      },
      {
        "itemName": "Schneeballen",
        "priceUSD": 3.99,
        "counrty": "germany",
        "description": "A sweet pastry made from shortcrust dough that is tasty"
      },
      {
        "itemName": "Tim Tams",
        "priceUSD": 3.99,
        "counrty": "australia",
        "description": "A classic Australian chocolate biscuit with a creamy filling sandwiched between two crunchy chocolate biscuits."
      },
      {
        "itemName": "Shapes",
        "priceUSD": 2.99,
        "counrty": "australia",
        "description": "Savory baked crackers in a variety of flavors, such as BBQ, pizza, and cheese and bacon."
      },
      {
        "itemName": "Caramello Koalas",
        "priceUSD": 1.99,
        "counrty": "australia",
        "description": "Milk chocolate koala-shaped treats with a soft caramel center."
      },
      {
        "itemName": "Milo",
        "priceUSD": 7.99,
        "counrty": "australia",
        "description": "A chocolate and malt powder mix that can be enjoyed hot or cold as a refreshing beverage or added to desserts."
      },
      {
        "itemName": "Vegemite",
        "priceUSD": 4.99,
        "counrty": "australia",
        "description": "A salty and savory spread made from yeast extract, perfect on toast or sandwiches."
      },
      {
        "itemName": "Freddo Frogs",
        "priceUSD": 1.49,
        "counrty": "australia",
        "description": "Milk chocolate frog-shaped treats that are a childhood favorite in Australia."
      },
      {
        "itemName": "Allen's Snakes",
        "priceUSD": 2.99,
        "counrty": "australia",
        "description": "Chewy gummy candies in the shape of snakes with fruity flavors like raspberry and blackcurrant."
      },
      {
        "itemName": "Red Rock Deli Chips",
        "priceUSD": 3.99,
        "counrty": "australia",
        "description": "Gourmet-style potato chips with unique flavors like sweet chili and sour cream, honey soy chicken, and sea salt."
      },
      {
        "itemName": "Arnott's Tiny Teddy Biscuits",
        "priceUSD": 1.99,
        "counrty": "australia",
        "description": "Cute bear-shaped biscuits in a variety of flavors, such as honey and chocolate."
      },
      {
        "itemName": "Fantales",
        "priceUSD": 2.49,
        "counrty": "australia",
        "description": "Caramel-filled chocolates with trivia questions on the wrapper, a favorite among moviegoers in Australia."
      },
      {
        "itemName": "Smith's Chips",
        "priceUSD": 2.99,
        "counrty": "australia",
        "description": "Thin and crispy potato chips in classic flavors like salt and vinegar, chicken, and BBQ."
      },
      {
        "itemName": "Chicos",
        "priceUSD": 1.99,
        "counrty": "australia",
        "description": "Chewy black jelly babies with a unique licorice flavor that's popular in Australia."
      },
      {
        "itemName": "Minties",
        "priceUSD": 2.99,
        "counrty": "australia",
        "description": "Chewy mint-flavored candies that have been a favorite in Australia for over 90 years."
      },
      {
        "itemName": "Cheezels",
        "priceUSD": 2.99,
        "counrty": "australia",
        "description": "Ring-shaped corn snacks coated in cheese-flavored powder, a classic snack in Australia."
      },
      {
        "itemName": "Redskin Lollies",
        "priceUSD": 1.99,
        "counrty": "australia",
        "description": "Chewy raspberry-flavored candies that are a childhood favorite in Australia."
      }
    ]

Product.bulkCreate(snackums);


