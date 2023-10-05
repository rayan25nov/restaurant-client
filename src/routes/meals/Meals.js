import kadhaiPaneer from "/src/assets/images/kadhai_paneer.jpg";
import pizza from "/src/assets/images/pizza.jpg";
import chickenTikka from "/src/assets/images/chicken_tikka.jpg";
import biryani from "/src/assets/images/biryani.jpg";
import bbq from "/src/assets/images/bbq.jpg";
import friedFish from "/src/assets/images/fried_fish.jpg";
import friedRice from "/src/assets/images/fried_rice.jpg";
import noodles from "/src/assets/images/noodles.jpg";
import eggBenedict from "/src/assets/images/egg_benedict.jpg";
import pancakes from "/src/assets/images/pancakes.jpg";
import wafflesImage from "/src/assets/images/waffle.jpg";
import frenchToast from "/src/assets/images/french_toast.jpg";
import cerealImage from "/src/assets/images/cereal.jpg";
import smoothies from "/src/assets/images/smoothies.jpg";
import avocadoToast from "/src/assets/images/avocado_toast.jpg";
import burritos from "/src/assets/images/burritos.jpg";
import croissants from "/src/assets/images/croissants.jpg";
import yogurt from "/src/assets/images/yogurt.jpg";
import chocolateCake from "/src/assets/images/chocolate_cake.jpg";
import iceCream from "/src/assets/images/ice_cream.jpg";
import cheeseCake from "/src/assets/images/cheese_cake.jpg";
import applePie from "/src/assets/images/apple_pie.jpg";
import brownies from "/src/assets/images/brownies.jpg";
import tiramisu from "/src/assets/images/tiramisu.jpg";
import macarons from "/src/assets/images/macarons.jpg";
import cremeBrulee from "/src/assets/images/creme_brulee.jpg";
import pannaCotta from "/src/assets/images/panna_cotta.jpg";
import gelato from "/src/assets/images/gelato.jpg";
const allItems = {
  mainDish: [
    {
      img: kadhaiPaneer,
      caption: "Kadhai Paneer - A Flavorful Delight!",
      description:
        "A fragrant Indian vegetarian delight featuring paneer (cottage cheese) cooked with aromatic spices in a traditional wok.",
      price: "₹250",
      rating: "4.9",
    },
    {
      img: pizza,
      caption: "Pizza - A Perfect Fusion of Flavors and Happiness!",
      description:
        "A classic favorite with a crispy crust, savory tomato sauce, melted cheese, and a variety of delicious toppings.",
      price: "₹150",
      rating: "4.5",
    },
    {
      img: chickenTikka,
      caption: "Chicken Tikka - A Spicy Grilled Delight!",
      description:
        "Succulent chicken pieces marinated in aromatic spices and yogurt, grilled to perfection, delivering a burst of flavors.",
      price: "₹200",
      rating: "4.7",
    },
    {
      img: biryani,
      caption: "Biryani - A Flavorful Rice Delicacy!",
      description:
        "Fragrant and flavorful rice dish layered with tender meat, aromatic spices, and caramelized onions, offering a harmonious blend of tastes and textures.",
      price: "₹100",
      rating: "4.6",
    },
    {
      img: bbq,
      caption: "Smoky BBQ Delights",
      description:
        "Savor the rich, smoky flavors of perfectly grilled barbecue dishes.",
      price: "₹320",
      rating: "4.2",
    },
    {
      img: friedFish,
      caption: "Crispy Fried Fish",
      description:
        "Enjoy tender and flaky fish, coated in a crispy, golden-brown batter.",
      price: "₹120",
      rating: "4.5",
    },
    {
      img: friedRice,
      caption: "Flavorful Fried Rice Dishes",
      description:
        "Satisfy your cravings with aromatic fried rice, bursting with savory ingredients and spices.",
      price: "₹120",
      rating: "4.6",
    },
    {
      img: noodles,
      caption: "Noodle Extravaganza",
      description:
        "Experience the world of noodles, from slurp-worthy ramen to stir-fried classics.",
      price: "₹65",
      rating: "4.4",
    },
  ],
  breakFast: [
    {
      img: eggBenedict,
      caption: "Eggs Benedict - A Classic Breakfast Treat!",
      description:
        "A traditional breakfast dish consisting of poached eggs served on English muffins with Canadian bacon and hollandaise sauce.",
      price: "₹300",
      rating: "4.9",
    },
    {
      img: pancakes,
      caption: "Fluffy and Delicious Pancakes!",
      description:
        "A popular breakfast dish consisting of flat cakes made from a batter of flour, milk, and eggs. Pancakes are often served with syrup, fruit, and whipped cream.",
      price: "₹200",
      rating: "4.8",
    },
    {
      img: wafflesImage,
      caption: "Crispy and Golden Brown Waffles!",
      description:
        "A popular breakfast dish consisting of a batter of flour, milk, and eggs that is cooked in a waffle iron. Waffles are often served with syrup, fruit, and whipped cream.",
      price: "₹250",
      rating: "4.7",
    },
    {
      img: frenchToast,
      caption: "Sweet and Savory French Toast!",
      description:
        "A popular breakfast dish consisting of slices of bread that are dipped in a batter of milk and eggs and then cooked in a pan. French toast is often served with syrup, fruit, and whipped cream.",
      price: "₹200",
      rating: "4.6",
    },
    {
      img: cerealImage,
      caption: "Cereal - A Quick and Easy Breakfast Option!",
      description:
        "A popular breakfast food consisting of dried cereal grains that are eaten with milk or yogurt. Cereal is often served with fruit and nuts.",
      price: "₹150",
      rating: "4.5",
    },
    {
      img: smoothies,
      caption: "Smoothies - A Healthy and Nutritious Breakfast on the Go!",
      description:
        "A blended drink made with fruits, vegetables, and yogurt. Smoothies are a popular breakfast option because they are quick to make and easy to digest.",
      price: "₹250",
      rating: "4.4",
    },
    {
      img: avocadoToast,
      caption: "Avocado toast - A Trendy and Delicious Breakfast Option!",
      description:
        "Toast topped with mashed avocado, often seasoned with salt, pepper, and red pepper flakes. Avocado toast is a popular breakfast option because it is healthy and satisfying.",
      price: "₹200",
      rating: "4.3",
    },
    {
      img: burritos,
      caption: "Burritos - A Hearty and Flavorful Breakfast Option!",
      description:
        "A tortilla filled with scrambled eggs, cheese, and other breakfast ingredients, such as meat, vegetables, and salsa. Breakfast burritos are often served with sour cream and guacamole.",
      price: "₹300",
      rating: "4.2",
    },
    {
      img: croissants,
      caption: "Croissants - A Flaky and Buttery Breakfast Treat!",
      description:
        "A pastry made from laminated dough. Croissants are often served with butter, jam, or chocolate. Croissants are a popular breakfast option because they are light and airy.",
      price: "₹250",
      rating: "4.1",
    },
    {
      img: yogurt,
      caption: "A Healthy and Layered Breakfast Option!",
      description:
        "A layered breakfast consisting of yogurt, fruit, granola, and nuts. Yogurt parfaits are a popular breakfast option because they are healthy and easy to make.",
      price: "₹200",
      rating: "4.0",
    },
  ],
  desserts: [
    {
      img: chocolateCake,
      caption: "Chocolate Cake - A Decadent Delight!",
      description:
        "A rich and moist chocolate cake that is perfect for any occasion. This cake is often served with chocolate frosting and fresh berries.",
      price: "₹100",
      rating: "4.9",
    },
    {
      img: iceCream,
      caption: "Ice Cream Sundae - A Classic Summer Treat!",
      description:
        "A bowl of ice cream topped with whipped cream, chocolate sauce, and a variety of toppings, such as nuts, sprinkles, and maraschino cherries",
      price: "₹50",
      rating: "4.8",
    },
    {
      img: cheeseCake,
      caption: "Cheesecake - A Creamy and Delicious Dessert!",
      description:
        "A dessert consisting of a layer of cheesecake filling on top of a crust, such as a graham cracker crust or a cookie crust. Cheesecake is often served with fresh fruit or whipped cream",
      price: "₹80",
      rating: "4.7",
    },
    {
      img: applePie,
      caption: "Apple Pie - A Classic American Dessert!",
      description:
        "A dessert consisting of a flaky pie crust filled with sliced apples and spices. Apple pie is often served with whipped cream or vanilla ice cream.",
      price: "₹70",
      rating: "4.6",
    },
    {
      img: brownies,
      caption: "Fudgy and Delicious Brownies!",
      description:
        "A dense and rich chocolate dessert that is often served with ice cream or whipped cream. Brownies are often flavored with nuts, chocolate chips, or caramel.",
      price: "₹60",
      rating: "4.5",
    },
    {
      img: tiramisu,
      caption: "Tiramisu - A Classic Italian Dessert!",
      description:
        "A coffee-flavored dessert made with ladyfingers dipped in espresso and layered with a creamy mascarpone filling. Tiramisu is often dusted with cocoa powder before serving.",
      price: "₹120",
      rating: "4.9",
    },
    {
      img: macarons,
      caption: "Macarons - Delicate and Colorful Cookies!",
      description:
        "A small, delicate cookie made with almond flour, egg whites, and sugar. Macarons are often filled with ganache, buttercream, or jam.",
      price: "₹150",
      rating: "4.8",
    },
    {
      img: cremeBrulee,
      caption: "Creme Brulee - A Classic French Dessert!",
      description:
        "A custard dessert with a hard caramel topping. Creme brulee is often flavored with vanilla or coffee.",
      price: "₹180",
      rating: "4.7",
    },
    {
      img: pannaCotta,
      caption: "Panna Cotta - A Creamy and Italian Dessert!",
      description:
        "A custard dessert made with cream, milk, and sugar. Panna cotta is often flavored with vanilla or other extracts.",
      price: "₹200",
      rating: "4.6",
    },
    {
      img: gelato,
      caption: "Gelato - A Rich and Italian Ice Cream!",
      description:
        "A frozen dessert similar to ice cream, but made with less milk and more cream. Gelato is often flavored with fresh fruits and nuts.",
      price: "₹220",
      rating: "4.5",
    },
  ],
};

export default allItems;
