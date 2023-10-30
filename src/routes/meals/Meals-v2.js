const cloudName = import.meta.env.VITE_CLOUDNAME;

const kadhaiPaneer = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350667/images/kadhai_paneer_jvptug.jpg`;
const pizza = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350669/images/pizza_xmudbt.jpg`;
const chickenTikka = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350663/images/chicken_tikka_dthiwe.jpg`;
const biryani = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350664/images/biryani_nsxkvh.jpg`;
const bbq = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350663/images/bbq_goe6yx.jpg`;
const friedFish = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/fried_fish_g4gyee.jpg`;
const friedRice = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/fried_rice_f8yvpy.jpg`;
const noodles = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350668/images/noodles_trpsen.jpg`;
const eggBenedict = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350664/images/egg_benedict_nxd02s.jpg`;
const pancakes = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350668/images/pancakes_em8go7.jpg`;
const waffles = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350671/images/waffle_csi8ft.jpg`;
const frenchToast = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350665/images/french_toast_l2usrq.jpg`;
const cereal = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350663/images/cereal_js3upk.jpg`;
const smoothies = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350670/images/smoothies_yip4no.jpg`;
const avocadoToast = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350662/images/avocado_toast_mh7qzb.jpg`;
const burritos = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350663/images/burritos_ehjhuj.jpg`;
const croissants = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350664/images/croissants_brxjzf.jpg`;
const yogurt = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350671/images/yogurt_acik2s.jpg`;
const chocolateCake = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350664/images/chocolate_cake_xnohq0.jpg`;
const iceCream = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/ice_cream_b54is1.jpg`;
const cheeseCake = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350663/images/cheese_cake_iboxun.jpg`;
const applePie = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350662/images/apple_pie_cvitd1.jpg`;
const brownies = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350662/images/brownies_tl8muu.jpg`;
const tiramisu = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350671/images/tiramisu_gfoaek.jpg`;
const macarons = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350667/images/macarons_wnsthj.jpg`;
const cremeBrulee = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350664/images/creme_brulee_m9jdju.jpg`;
const pannaCotta = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350668/images/panna_cotta_tzzkp7.jpg`;
const gelato = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/gelato_qspilq.jpg`;
const pasta = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350669/images/pasta_xg3cnp.jpg`;

const allItems = {
  mainDish: [
    {
      id: 1,
      img: kadhaiPaneer,
      caption: "Kadhai Paneer - A Flavorful Delight!",
      description:
        "A fragrant Indian vegetarian delight featuring paneer (cottage cheese) cooked with aromatic spices in a traditional wok.",
      price: "₹250",
      rating: "4.9",
    },
    {
      id: 2,
      img: pizza,
      caption: "Pizza - A Perfect Fusion of Flavors and Happiness!",
      description:
        "A classic favorite with a crispy crust, savory tomato sauce, melted cheese, and a variety of delicious toppings.",
      price: "₹150",
      rating: "4.5",
    },
    {
      id: 3,
      img: chickenTikka,
      caption: "Chicken Tikka - A Spicy Grilled Delight!",
      description:
        "Succulent chicken pieces marinated in aromatic spices and yogurt, grilled to perfection, delivering a burst of flavors.",
      price: "₹200",
      rating: "4.7",
    },
    {
      id: 4,
      img: biryani,
      caption: "Biryani - A Flavorful Rice Delicacy!",
      description:
        "Fragrant and flavorful rice dish layered with tender meat, aromatic spices, and caramelized onions, offering a harmonious blend of tastes and textures.",
      price: "₹100",
      rating: "4.6",
    },
    {
      id: 5,
      img: bbq,
      caption: "Smoky BBQ Delights",
      description:
        "Savor the rich, smoky flavors of perfectly grilled barbecue dishes.",
      price: "₹320",
      rating: "4.2",
    },
    {
      id: 6,
      img: friedFish,
      caption: "Crispy Fried Fish",
      description:
        "Enjoy tender and flaky fish, coated in a crispy, golden-brown batter.",
      price: "₹120",
      rating: "4.5",
    },
    {
      id: 7,
      img: friedRice,
      caption: "Flavorful Fried Rice Dishes",
      description:
        "Satisfy your cravings with aromatic fried rice, bursting with savory ingredients and spices.",
      price: "₹120",
      rating: "4.6",
    },
    {
      id: 8,
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
      id: 9,
      img: eggBenedict,
      caption: "Eggs Benedict - A Classic Breakfast Treat!",
      description:
        "A traditional breakfast dish consisting of poached eggs served on English muffins with Canadian bacon and hollandaise sauce.",
      price: "₹300",
      rating: "4.9",
    },
    {
      id: 10,
      img: pasta,
      caption: "Creamy Garlic Parmesan Pasta",
      description:
        "Indulge in a delightful culinary experience with our Creamy Garlic Parmesan Pasta",
      price: "₹150",
      rating: "4.7",
    },
    {
      id: 11,
      img: pancakes,
      caption: "Fluffy and Delicious Pancakes!",
      description:
        "A popular breakfast dish consisting of flat cakes made from a batter of flour, milk, and eggs. Pancakes are often served with syrup, fruit, and whipped cream.",
      price: "₹200",
      rating: "4.8",
    },
    {
      id: 12,
      img: waffles,
      caption: "Crispy and Golden Brown Waffles!",
      description:
        "A popular breakfast dish consisting of a batter of flour, milk, and eggs that is cooked in a waffle iron. Waffles are often served with syrup, fruit, and whipped cream.",
      price: "₹250",
      rating: "4.7",
    },
    {
      id: 13,
      img: frenchToast,
      caption: "Sweet and Savory French Toast!",
      description:
        "A popular breakfast dish consisting of slices of bread that are dipped in a batter of milk and eggs and then cooked in a pan. French toast is often served with syrup, fruit, and whipped cream.",
      price: "₹200",
      rating: "4.6",
    },
    {
      id: 14,
      img: cereal,
      caption: "Cereal - A Quick and Easy Breakfast Option!",
      description:
        "A popular breakfast food consisting of dried cereal grains that are eaten with milk or yogurt. Cereal is often served with fruit and nuts.",
      price: "₹150",
      rating: "4.5",
    },
    {
      id: 15,
      img: smoothies,
      caption: "Smoothies - A Healthy and Nutritious Breakfast on the Go!",
      description:
        "A blended drink made with fruits, vegetables, and yogurt. Smoothies are a popular breakfast option because they are quick to make and easy to digest.",
      price: "₹250",
      rating: "4.4",
    },
    {
      id: 16,
      img: avocadoToast,
      caption: "Avocado toast - A Trendy and Delicious Breakfast Option!",
      description:
        "Toast topped with mashed avocado, often seasoned with salt, pepper, and red pepper flakes. Avocado toast is a popular breakfast option because it is healthy and satisfying.",
      price: "₹200",
      rating: "4.3",
    },
    {
      id: 17,
      img: burritos,
      caption: "Burritos - A Hearty and Flavorful Breakfast Option!",
      description:
        "A tortilla filled with scrambled eggs, cheese, and other breakfast ingredients, such as meat, vegetables, and salsa. Breakfast burritos are often served with sour cream and guacamole.",
      price: "₹300",
      rating: "4.2",
    },
    {
      id: 18,
      img: croissants,
      caption: "Croissants - A Flaky and Buttery Breakfast Treat!",
      description:
        "A pastry made from laminated dough. Croissants are often served with butter, jam, or chocolate. Croissants are a popular breakfast option because they are light and airy.",
      price: "₹250",
      rating: "4.1",
    },
    {
      id: 19,
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
      id: 20,
      img: chocolateCake,
      caption: "Chocolate Cake - A Decadent Delight!",
      description:
        "A rich and moist chocolate cake that is perfect for any occasion. This cake is often served with chocolate frosting and fresh berries.",
      price: "₹100",
      rating: "4.9",
    },
    {
      id: 21,
      img: iceCream,
      caption: "Ice Cream Sundae - A Classic Summer Treat!",
      description:
        "A bowl of ice cream topped with whipped cream, chocolate sauce, and a variety of toppings, such as nuts, sprinkles, and maraschino cherries",
      price: "₹50",
      rating: "4.8",
    },
    {
      id: 22,
      img: cheeseCake,
      caption: "Cheesecake - A Creamy and Delicious Dessert!",
      description:
        "A dessert consisting of a layer of cheesecake filling on top of a crust, such as a graham cracker crust or a cookie crust. Cheesecake is often served with fresh fruit or whipped cream",
      price: "₹80",
      rating: "4.7",
    },
    {
      id: 23,
      img: applePie,
      caption: "Apple Pie - A Classic American Dessert!",
      description:
        "A dessert consisting of a flaky pie crust filled with sliced apples and spices. Apple pie is often served with whipped cream or vanilla ice cream.",
      price: "₹70",
      rating: "4.6",
    },
    {
      id: 24,
      img: brownies,
      caption: "Fudgy and Delicious Brownies!",
      description:
        "A dense and rich chocolate dessert that is often served with ice cream or whipped cream. Brownies are often flavored with nuts, chocolate chips, or caramel.",
      price: "₹60",
      rating: "4.5",
    },
    {
      id: 25,
      img: tiramisu,
      caption: "Tiramisu - A Classic Italian Dessert!",
      description:
        "A coffee-flavored dessert made with ladyfingers dipped in espresso and layered with a creamy mascarpone filling. Tiramisu is often dusted with cocoa powder before serving.",
      price: "₹120",
      rating: "4.9",
    },
    {
      id: 26,
      img: macarons,
      caption: "Macarons - Delicate and Colorful Cookies!",
      description:
        "A small, delicate cookie made with almond flour, egg whites, and sugar. Macarons are often filled with ganache, buttercream, or jam.",
      price: "₹150",
      rating: "4.8",
    },
    {
      id: 27,
      img: cremeBrulee,
      caption: "Creme Brulee - A Classic French Dessert!",
      description:
        "A custard dessert with a hard caramel topping. Creme brulee is often flavored with vanilla or coffee.",
      price: "₹180",
      rating: "4.7",
    },
    {
      id: 28,
      img: pannaCotta,
      caption: "Panna Cotta - A Creamy and Italian Dessert!",
      description:
        "A custard dessert made with cream, milk, and sugar. Panna cotta is often flavored with vanilla or other extracts.",
      price: "₹200",
      rating: "4.6",
    },
    {
      id: 29,
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
