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
const burgers = `https://res.cloudinary.com/${cloudName}/image/upload/v1697350666/images/burgers_hvaxhv.jpg`;

const allItems = {
  mainDish: [
    {
      id: 1,
      img: kadhaiPaneer,
      caption: "Kadhai Paneer - A Flavorful Delight!",
      description:
        "Indulge in the rich and aromatic flavors of this exquisite Indian vegetarian masterpiece, where succulent cubes of paneer (cottage cheese) are skillfully prepared with an array of fragrant spices in a time-honored traditional wok. Immerse your senses in the symphony of spices as they dance together, creating a harmonious blend that elevates the taste of this culinary delight. Each bite is a journey through the vibrant tapestry of Indian cuisine, showcasing the perfect balance of textures and flavors that make this dish an absolute sensory delight.",
      price: "250",
      rating: "4.1",
      quantity: 1,
    },
    {
      id: 2,
      img: pizza,
      caption: "Pizza - A Perfect Fusion of Flavors and Happiness!",
      description:
        "Savor the timeless allure of a classic favorite - a pizza that tantalizes the taste buds with its crispy crust, adorned with a luscious layer of savory tomato sauce. Revel in the joy of gooey, melted cheese generously blanketing the surface, creating a perfect harmony of textures and flavors. What sets this pizza apart is the delightful medley of delectable toppings that elevate it to culinary perfection. Whether adorned with succulent meats, fresh vegetables, or a combination of both, each bite is a symphony of taste that captures the essence of this beloved dish.",
      price: "150",
      rating: "4.0",
      quantity: 1,
    },
    {
      id: 3,
      img: chickenTikka,
      caption: "Chicken Tikka - A Spicy Grilled Delight!",
      description:
        "Delight your palate with the exquisite taste of succulent chicken pieces, meticulously marinated in a harmonious blend of aromatic spices and creamy yogurt. Expertly grilled to perfection, each mouthwatering morsel promises a symphony of flavors that captivates the senses. The infusion of spices, combined with the tenderizing effect of yogurt, creates a tantalizing marinade that imparts depth and richness to the chicken. As the grill works its magic, the result is a culinary masterpiece - a burst of flavors that dance on your taste buds, offering a perfect balance of smokiness, spice, and juiciness.",
      price: "200",
      rating: "4.5",
      quantity: 1,
    },
    {
      id: 4,
      img: biryani,
      caption: "Biryani - A Flavorful Rice Delicacy!",
      description:
        "Immerse yourself in the indulgent experience of a fragrant and flavorful rice dish, where layers of tender meat, aromatic spices, and caramelized onions come together in perfect harmony. Each spoonful unveils a symphony of tastes and textures, creating a culinary masterpiece that's a delight to the senses. The rice, infused with the aromatic spices, forms a canvas for the succulent tender meat to shine. As you delve into the layers, the caramelized onions add a touch of sweetness and depth, enhancing the overall flavor profile.",
      price: "100",
      rating: "4.6",
      quantity: 1,
    },
    {
      id: 5,
      img: bbq,
      caption: "Smoky BBQ Delights",
      description:
        "Indulge your senses in the enticing allure of rich, smoky flavors that emanate from perfectly grilled barbecue dishes. Each bite is a symphony of charred perfection, delivering a culinary experience that transcends the ordinary. The grilling process imparts a unique smokiness to the dishes, enhancing their depth and creating a tantalizing complexity of taste. Whether it's succulent meats, vibrant vegetables, or a combination of both, the grill marks the beginning of a gastronomic journey that promises satisfaction with every mouthful.",
      price: "320",
      rating: "4.2",
      quantity: 1,
    },
    {
      id: 6,
      img: friedFish,
      caption: "Crispy Fried Fish",
      description:
        "Indulge in the ultimate seafood delight with our 'Crispy Fried Fish.' Delight your taste buds with the exquisite experience of savoring tender and flaky fish, perfectly encased in a tantalizingly crispy, golden-brown batter. This culinary masterpiece offers a symphony of textures, as each bite reveals the succulent juiciness of the fish juxtaposed against the satisfying crunch of the expertly crafted coating. The golden-brown exterior serves as a gateway to a world of flavor, preserving the natural juiciness of the fish while delivering a delightful contrast in every mouthful.",
      price: "120",
      rating: "4.5",
      quantity: 1,
    },
    {
      id: 7,
      img: friedRice,
      caption: "Flavorful Fried Rice Dishes",
      description:
        "Embark on a culinary journey with our enticing 'Flavorful Fried Rice Dishes.' Elevate your dining experience as you satisfy your cravings with each aromatic bite of our expertly crafted fried rice, meticulously prepared to perfection. Immerse your senses in the symphony of flavors that dance through each grain of rice, a medley of savory ingredients and spices that come together harmoniously. Our flavorful fried rice dishes are a celebration of culinary finesse, where the artful combination of high-quality ingredients results in a dish that transcends the ordinary. Each spoonful unveils a tapestry of tastes, from the richness of perfectly cooked rice to the vibrant notes of seasonings and the delectable blend of savory ingredients.",
      price: "120",
      rating: "4.6",
      quantity: 1,
    },
    {
      id: 8,
      img: noodles,
      caption: "Noodle Extravaganza",
      description:
        "Embark on a captivating journey through the diverse world of noodles, where each strand tells a tale of culinary excellence. Immerse yourself in the rich and flavorful universe, ranging from the slurp-worthy delights of ramen to the sizzling artistry of stir-fried classics. Our menu invites you to experience the intricate dance of textures and tastes that noodles bring to the table.Savor the umami-packed goodness of ramen, where every spoonful is a symphony of broth, perfectly cooked noodles, and an array of delectable toppings.",
      price: "65",
      rating: "3.2",
      quantity: 1,
    },
  ],
  breakFast: [
    {
      id: 9,
      img: eggBenedict,
      caption: "Eggs Benedict - A Classic Breakfast Treat!",
      description:
        "Delight your mornings with a classic breakfast indulgence – our traditional dish features expertly poached eggs nestled on English muffins, accompanied by savory Canadian bacon, and crowned with the luscious richness of hollandaise sauce. This iconic breakfast ensemble brings together the perfect harmony of textures and flavors, as the velvety hollandaise sauce cascades over the perfectly poached eggs, creating a decadent symphony on the palate. The English muffins provide a satisfying base, while the addition of Canadian bacon adds a savory touch, elevating the entire dish to a breakfast masterpiece.",
      price: "300",
      rating: "4.9",
      quantity: 1,
    },
    {
      id: 10,
      img: pasta,
      caption: "Creamy Garlic Parmesan Pasta",
      description:
        "Embark on a culinary journey of indulgence with our exquisite Creamy Garlic Parmesan Pasta. Immerse your senses in the rich and velvety allure of this pasta creation, where perfectly cooked noodles are generously coated in a luscious blend of creamy garlic and Parmesan sauce. Each forkful promises a symphony of flavors, as the robust garlic notes harmonize with the nutty undertones of Parmesan, creating a delectable and satisfying taste experience.The velvety texture of the sauce lovingly embraces each strand of pasta, ensuring a luxurious and comforting mouthfeel with every bite.",
      price: "150",
      rating: "4.7",
      quantity: 1,
    },
    {
      id: 11,
      img: pancakes,
      caption: "Fluffy and Delicious Pancakes!",
      description:
        "Kickstart your day with the perfect morning indulgence – our fluffy pancakes, expertly crafted to bring a smile to your face. Picture a stack of golden-brown delights, each layer a pillowy masterpiece waiting to be savored. These pancakes are more than just breakfast; they're a celebration on a plate.Let the warm aroma of freshly cooked pancakes awaken your senses as you anticipate the moment they arrive at your table.",
      price: "70",
      rating: "4.8",
      quantity: 1,
    },
    {
      id: 12,
      img: waffles,
      caption: "Crispy and Golden Brown Waffles!",
      description:
        "Indulge in the morning delight of a beloved breakfast classic waffles. Picture a light and airy batter made from a perfect blend of flour, milk, and eggs, expertly poured into a waffle iron to achieve that golden crispiness on the outside and a fluffy interior. The result is a stack of waffles that promises to elevate your breakfast experience to new heights.Dress up your waffles according to your desires the canvas is yours to customize. Drizzle them with rich, golden syrup that seeps into every groove, creating a sweet and decadent embrace.",
      price: "250",
      rating: "4.7",
      quantity: 1,
    },
    {
      id: 13,
      img: frenchToast,
      caption: "Sweet and Savory French Toast!",
      description:
        "Delight in the comfort of a beloved breakfast classic French Toast. This iconic dish involves slices of bread luxuriously dipped in a batter crafted from a harmonious blend of milk and eggs before being expertly cooked to golden perfection in a pan. The result is a symphony of textures, with the exterior crisped to a delightful golden brown, encapsulating a soft and custardy interior that melts in your mouth.Enhance your French Toast experience with a drizzle of rich syrup, allowing its sweet embrace to mingle with the warm notes of the cooked bread.",
      price: "200",
      rating: "4.6",
      quantity: 1,
    },
    {
      id: 14,
      img: cereal,
      caption: "Cereal - A Quick and Easy Breakfast Option!",
      description:
        "A popular breakfast food consisting of dried cereal grains that are eaten with milk or yogurt. Cereal is often served with fruit and nuts.",
      price: "150",
      rating: "4.5",
      quantity: 1,
    },
    {
      id: 15,
      img: smoothies,
      caption: "Smoothies - A Healthy and Nutritious Breakfast on the Go!",
      description:
        "A blended drink made with fruits, vegetables, and yogurt. Smoothies are a popular breakfast option because they are quick to make and easy to digest.",
      price: "250",
      rating: "4.4",
      quantity: 1,
    },
    {
      id: 16,
      img: avocadoToast,
      caption: "Avocado toast - A Trendy and Delicious Breakfast Option!",
      description:
        "Toast topped with mashed avocado, often seasoned with salt, pepper, and red pepper flakes. Avocado toast is a popular breakfast option because it is healthy and satisfying.",
      price: "200",
      rating: "4.3",
      quantity: 1,
    },
    {
      id: 17,
      img: burritos,
      caption: "Burritos - A Hearty and Flavorful Breakfast Option!",
      description:
        "A tortilla filled with scrambled eggs, cheese, and other breakfast ingredients, such as meat, vegetables, and salsa. Breakfast burritos are often served with sour cream and guacamole.",
      price: "300",
      rating: "4.2",
      quantity: 1,
    },
    {
      id: 18,
      img: croissants,
      caption: "Croissants - A Flaky and Buttery Breakfast Treat!",
      description:
        "A pastry made from laminated dough. Croissants are often served with butter, jam, or chocolate. Croissants are a popular breakfast option because they are light and airy.",
      price: "250",
      rating: "4.1",
      quantity: 1,
    },
    {
      id: 19,
      img: yogurt,
      caption: "A Healthy and Layered Breakfast Option!",
      description:
        "A layered breakfast consisting of yogurt, fruit, granola, and nuts. Yogurt parfaits are a popular breakfast option because they are healthy and easy to make.",
      price: "200",
      rating: "4.0",
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
  ],
  desserts: [
    {
      id: 21,
      img: chocolateCake,
      caption: "Chocolate Cake - A Decadent Delight!",
      description:
        "A rich and moist chocolate cake that is perfect for any occasion. This cake is often served with chocolate frosting and fresh berries.",
      price: "100",
      rating: "4.9",
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
    {
      id: 23,
      img: cheeseCake,
      caption: "Cheesecake - A Creamy and Delicious Dessert!",
      description:
        "A dessert consisting of a layer of cheesecake filling on top of a crust, such as a graham cracker crust or a cookie crust. Cheesecake is often served with fresh fruit or whipped cream",
      price: "80",
      rating: "4.7",
      quantity: 1,
    },
    {
      id: 24,
      img: applePie,
      caption: "Apple Pie - A Classic American Dessert!",
      description:
        "A dessert consisting of a flaky pie crust filled with sliced apples and spices. Apple pie is often served with whipped cream or vanilla ice cream.",
      price: "70",
      rating: "4.6",
      quantity: 1,
    },
    {
      id: 25,
      img: brownies,
      caption: "Fudgy and Delicious Brownies!",
      description:
        "A dense and rich chocolate dessert that is often served with ice cream or whipped cream. Brownies are often flavored with nuts, chocolate chips, or caramel.",
      price: "60",
      rating: "4.5",
      quantity: 1,
    },
    {
      id: 26,
      img: tiramisu,
      caption: "Tiramisu - A Classic Italian Dessert!",
      description:
        "A coffee-flavored dessert made with ladyfingers dipped in espresso and layered with a creamy mascarpone filling. Tiramisu is often dusted with cocoa powder before serving.",
      price: "120",
      rating: "4.9",
      quantity: 1,
    },
    {
      id: 27,
      img: macarons,
      caption: "Macarons - Delicate and Colorful Cookies!",
      description:
        "A small, delicate cookie made with almond flour, egg whites, and sugar. Macarons are often filled with ganache, buttercream, or jam.",
      price: "150",
      rating: "4.8",
      quantity: 1,
    },
    {
      id: 28,
      img: cremeBrulee,
      caption: "Creme Brulee - A Classic French Dessert!",
      description:
        "A custard dessert with a hard caramel topping. Creme brulee is often flavored with vanilla or coffee.",
      price: "180",
      rating: "4.7",
      quantity: 1,
    },
    {
      id: 29,
      img: pannaCotta,
      caption: "Panna Cotta - A Creamy and Italian Dessert!",
      description:
        "A custard dessert made with cream, milk, and sugar. Panna cotta is often flavored with vanilla or other extracts.",
      price: "200",
      rating: "4.6",
      quantity: 1,
    },
    {
      id: 30,
      img: gelato,
      caption: "Gelato - A Rich and Italian Ice Cream!",
      description:
        "A frozen dessert similar to ice cream, but made with less milk and more cream. Gelato is often flavored with fresh fruits and nuts.",
      price: "220",
      rating: "4.5",
      quantity: 1,
    },
  ],
};

export default allItems;
