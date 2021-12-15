const PRODUCTS = [
    {
        id: 100,
        name: 'Onion Rings',
        price: 50000,
        image: require('../../assets/denkalaha/appetizer/ONION_RING.jpg'),
        description: 'Deep Fried Onion Rings Served with Choices Of Sauces.'
    },
    {
        id: 101,
        name: 'French Fries',
        price: 49000,
        image: require('../../assets/denkalaha/appetizer/FRENCH_FRIES.png'),
        description: 'Juluenne Cut Deep Fried Potatoes Served with Choice of Sauces.'
    },
    {
        id: 102,
        name: 'Potato Wedges',
        price: 59000,
        image: require('../../assets/denkalaha/appetizer/POTATO_WEDGES.jpg'),
        description: 'Deep Fried Potato Wedges, herbs, Garlic Oil Served With Choice of Sauces '
    },
    {
        id: 103,
        name: 'Sweet Potato Fries',
        price: 55000,
        image: require('../../assets/denkalaha/appetizer/SWEET_POTATO.jpg'),
        description: 'Deep Fried Sweet potatoes, Cajun Salt Served With Choice of Sauces'
    },
    {
        id: 104,
        name: 'Mozzarella Croquette',
        price: 59000,
        image: require('../../assets/denkalaha/appetizer/moza.jpg'),
        description: 'Deep Fried Mashed Potato And Mozzarella Cheese Served With Choices Of Sauces'
    },
    {
        id: 105,
        name: 'Chicken Wings',
        price: 59000,
        image: require('../../assets/denkalaha/appetizer/CHICKEN_WINGS.jpg'),
        description: 'Deep Fried Chicken Wings Served With Choices of Sauces'
    },
    {
        id: 106,
        name: 'Chicken Fingers',
        price: 59000,
        image: require('../../assets/denkalaha/appetizer/CF.jpg'),
        description: 'Deep Fried Chicken Served With Choices of Sauces'
    },
    {
        id: 107,
        name: 'Chicken Nugget',
        price: 59000,
        image: require('../../assets/denkalaha/appetizer/nuget.jpg'),
        description: 'Deep Fried Minged Chicken Served With Choices of Sauce'
    },
    {
        id: 108,
        name: 'Poutine French Fries',
        price: 54000,
        image: require('../../assets/denkalaha/appetizer/putin.jpg'),
        description: 'French Fries Served With Curry Sauce/Brown Sauce'
    },
    {
        id: 109,
        name: 'Calamari',
        price: 68000,
        image: require('../../assets/denkalaha/appetizer/CALAMARI.jpg'),
        description: 'Deep Fried Calamari Rings Served With Choices Of Sauce'
    },
    {
        id: 200,
        name: 'Corn Dog',
        price: 35000,
        image: require('../../assets/denkalaha/appetizer/CORN_DOG.jpg'),
        description: 'Deep Fried Sausage, Cornmeal Batter Served With Choices Of Sauces'
    },
    {
        id: 201,
        name: 'Mac Daddy',
        price: 49000,
        image: require('../../assets/denkalaha/appetizer/MCD.jpg'),
        description: 'Deep Fried Maccaroni Mixed With Smooked Beef, Parmesan, Mozzarella Coated With Bread Crumbs'
    },
    {
        id: 202,
        name: 'nachos',
        price: 109000,
        image: require('../../assets/denkalaha/appetizer/NACHOS.jpg'),
        description: 'Deep Fried Corn Tortilla Served With Choices Of Sauces'
    },
    {
        id: 203,
        name: 'Sausage & Fries',
        price: 75000,
        image: require('../../assets/denkalaha/appetizer/SAUSAGE_FRIES.jpg'),
        description: 'French Fries and Beef Sausage Served With Choices Of Sauces'
    },
    {
        id: 204,
        name: 'Snack Platter 1',
        price: 165000,
        image: require('../../assets/denkalaha/appetizer/SAUSAGE_FRIES.jpg'),
        description: 'Deep Fried Sausage, Cornmeal Batter Served With Choices Of Sauces'
    },
    {
        id: 205,
        name: 'Snack Platter 2',
        price: 175000,
        image: require('../../assets/denkalaha/appetizer/SAUSAGE_FRIES.jpg'),
        description: 'Deep Fried Sausage, Cornmeal Batter Served With Choices Of Sauces'
    },
    {
        id: 206,
        name: 'Snack Platter 3',
        price: 216000,
        image: require('../../assets/denkalaha/appetizer/SAUSAGE_FRIES.jpg'),
        description: 'Deep Fried Sausage, Cornmeal Batter Served With Choices Of Sauces'
    },
    {
        id: 207,
        name: 'Aglio Olio',
        price: 49000,
        image: require('../../assets/denkalaha/pasta/aglio.jpeg'),
        description: 'Spaghetti, Garlic, Olive Oil, Chilli Slices, Cherry Tomato, Chilli Flakes'
    },
    {
        id: 208,
        name: 'Bolognese',
        price: 62000,
        image: require('../../assets/denkalaha/pasta/BOLOGNESE.jpg'),
        description: 'Spaghetti, Napolitana Sauce, Minced Beef'
    },
    {
        id: 209,
        name: 'Carbonara',
        price: 74000,
        image: require('../../assets/denkalaha/pasta/CARBONARA.jpg'),
        description: 'Spaghetti, Cream, Ham, Onion, Garlic'
    },
    {
        id: 300,
        name: 'Fish & Chips',
        price: 119000,
        image: require('../../assets/denkalaha/pasta/fish.jpg'),
        description: 'Deep Fried Beef Sutchi Catfish Served With Fries'
    },
    {
        id: 301,
        name: 'Anker Pint',
        price: 55000,
        image: require('../../assets/denkalaha/BEVERAGE/anker.jpg'),
        description: 'Deep Fried Beef Sutchi Catfish Served With Fries'
    },
    {
        id: 302,
        name: 'Absolute Blue 75 CL',
        price: 1400000,
        image: require('../../assets/denkalaha/BEVERAGE/ABSOLUT_BLUE_75CL.jpg'),
        description: 'Deep Fried Beef Sutchi Catfish Served With Fries'
    },
    {
        id: 303,
        name: 'Fish & Chips',
        price: 119000,
        image: require('../../assets/denkalaha/pasta/fish.jpg'),
        description: 'Deep Fried Beef Sutchi Catfish Served With Fries'
    },
    {
        id: 304,
        name: 'Fish & Chips',
        price: 119000,
        image: require('../../assets/denkalaha/pasta/fish.jpg'),
        description: 'Deep Fried Beef Sutchi Catfish Served With Fries'
    },
    {
        id: 305,
        name: 'Fish & Chips',
        price: 119000,
        image: require('../../assets/denkalaha/pasta/fish.jpg'),
        description: 'Deep Fried Beef Sutchi Catfish Served With Fries'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}