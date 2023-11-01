const cloudName = import.meta.env.VITE_CLOUDNAME;

const kadhaiPaneer = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350667/images/kadhai_paneer_jvptug.jpg`;
const pizza = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350669/images/pizza_xmudbt.jpg`;
const chickenTikka = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350663/images/chicken_tikka_dthiwe.jpg`;
const biryani = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350664/images/biryani_nsxkvh.jpg`;
const bbq = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350663/images/bbq_goe6yx.jpg`;
const friedFish = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/fried_fish_g4gyee.jpg`;
const friedRice = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/fried_rice_f8yvpy.jpg`;
const noodles = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350668/images/noodles_trpsen.jpg`;
const pancakes = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350668/images/pancakes_em8go7.jpg`;
const iceCream = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/ice_cream_b54is1.jpg`;
const burgers = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/burgers_hvaxhv.jpg`;

const menuItems = [
  {
    id: 1,
    img: kadhaiPaneer,
    caption: "Kadhai Paneer - A Flavorful Delight!",
    description:
      "A fragrant Indian vegetarian delight featuring paneer (cottage cheese) cooked with aromatic spices in a traditional wok.",
    price: "250",
    rating: "4.9",
    quantity: 1,
  },
  {
    id: 2,
    img: pizza,
    caption: "Pizza - A Perfect Fusion of Flavors and Happiness!",
    description:
      "A classic favorite with a crispy crust, savory tomato sauce, melted cheese, and a variety of delicious toppings.",
    price: "150",
    rating: "4.5",
    quantity: 1,
  },
  {
    id: 3,
    img: chickenTikka,
    caption: "Chicken Tikka - A Spicy Grilled Delight!",
    description:
      "Succulent chicken pieces marinated in aromatic spices and yogurt, grilled to perfection, delivering a burst of flavors.",
    price: "200",
    rating: "4.7",
    quantity: 1,
  },
  {
    id: 4,
    img: biryani,
    caption: "Biryani - A Flavorful Rice Delicacy!",
    description:
      "Fragrant and flavorful rice dish layered with tender meat, aromatic spices, and caramelized onions, offering a harmonious blend of tastes and textures.",
    price: "100",
    rating: "4.6",
    quantity: 1,
  },
  {
    id: 5,
    img: bbq,
    caption: "Smoky BBQ Delights",
    description:
      "Savor the rich, smoky flavors of perfectly grilled barbecue dishes.",
    price: "320",
    rating: "4.2",
    quantity: 1,
  },
  {
    id: 6,
    img: friedFish,
    caption: "Crispy Fried Fish",
    description:
      "Enjoy tender and flaky fish, coated in a crispy, golden-brown batter.",
    price: "120",
    rating: "4.5",
    quantity: 1,
  },
  {
    id: 7,
    img: friedRice,
    caption: "Flavorful Fried Rice Dishes",
    description:
      "Satisfy your cravings with aromatic fried rice, bursting with savory ingredients and spices.",
    price: "120",
    rating: "4.6",
    quantity: 1,
  },
  {
    id: 8,
    img: noodles,
    caption: "Noodle Extravaganza",
    description:
      "Experience the world of noodles, from slurp-worthy ramen to stir-fried classics.",
    price: "65",
    rating: "4.4",
    quantity: 1,
  },
  {
    id: 11,
    img: pancakes,
    caption: "Fluffy and Delicious Pancakes!",
    description:
      "Start your day with fluffy pancakes, drizzled with syrup and topped with your favorite extras.",
    price: "70",
    rating: "4.8",
    quantity: 1,
  },
  {
    id: 20,
    img: burgers,
    caption: "Irresistible Burger Creations",
    description:
      "Sink your teeth into juicy, mouthwatering burgers with a variety of toppings and flavors.",
    price: "60",
    rating: "4.4",
    quantity: 1,
  },
  {
    id: 22,
    img: iceCream,
    caption: "Ice Cream Sundae - A Classic Summer Treat!",
    description:
      "A bowl of ice cream topped with whipped cream, chocolate sauce, and a variety of toppings, such as nuts, sprinkles, and maraschino cherries",
    price: "50",
    rating: "4.8",
    quantity: 1,
  },
];

export default menuItems;
