export type MenuItem = {
  name: string;
  price: number;
  desc: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  type: "veg" | "nonveg";
  items: MenuItem[];
};

export const restaurant = {
  nameTelugu: "పోరిగింటి పుల్లకూర",
  subTelugu: "రెస్టారెంట్",
  tagTelugu: "వెజ్ & నాన్ వెజ్",
  nameEnglish: "Poruginti Pullakura Restaurant",
  tagEnglish: "Veg • Non-Veg",
  note: "Every Parcel ₹20/- Extra Charge",
};

/**
 * Builds a stable, relevant food photo for each dish.
 * Uses an on-the-fly image service so the demo needs zero local assets;
 * the seed keeps each dish's image consistent across reloads.
 */
function seedFrom(text: string): number {
  let h = 0;
  for (let i = 0; i < text.length; i++) {
    h = (h * 31 + text.charCodeAt(i)) >>> 0;
  }
  return h % 100000;
}

export function itemImage(name: string): string {
  const prompt = `${name}, authentic south indian restaurant dish, freshly served, appetizing, professional food photography, top view`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?width=600&height=450&nologo=true&seed=${seedFrom(name)}`;
}

export const menu: MenuCategory[] = [
  {
    id: "nonveg-main",
    title: "Non-Veg Main Course",
    type: "nonveg",
    items: [
      { name: "Poruginti Pullakura Combo", price: 330, desc: "Our signature platter — a hearty mix of house specials." },
      { name: "Chicken Dum Biryani", price: 270, desc: "Slow-cooked dum biryani layered with tender chicken." },
      { name: "Mogalai Chicken Biryani", price: 350, desc: "Rich Mughlai-style biryani with aromatic spices." },
      { name: "Chicken Kunda (Pot) Biryani", price: 420, desc: "Earthen-pot biryani sealed for a deep smoky flavour." },
      { name: "Sp Chicken Biryani", price: 380, desc: "Chef's special biryani, generously loaded with chicken." },
      { name: "Chicken Roast Biryani", price: 270, desc: "Spicy roasted chicken over fragrant basmati rice." },
      { name: "Chicken Joint Biryani", price: 290, desc: "Juicy chicken leg joints on long-grain rice." },
      { name: "Chicken Wings Biryani", price: 310, desc: "Crispy wings tossed into flavourful biryani." },
      { name: "Mutton Dhum Biryani", price: 380, desc: "Tender mutton dum biryani, slow-cooked to perfection.", note: "Only on Sundays" },
      { name: "Prawns Roast Biryani", price: 410, desc: "Roasted prawns with spiced basmati rice." },
    ],
  },
  {
    id: "veg-main",
    title: "Veg Main Course",
    type: "veg",
    items: [
      { name: "Bagara Rice", price: 160, desc: "Mildly spiced aromatic Hyderabadi-style rice." },
      { name: "Ragi Sankati", price: 130, desc: "Traditional finger-millet mudda — wholesome and rustic." },
      { name: "Veg Meals", price: 150, desc: "Full veg thali with rice, curries, dal & sides." },
    ],
  },
  {
    id: "nonveg-starters",
    title: "Non-Veg Starters",
    type: "nonveg",
    items: [
      { name: "BBQ Chicken", price: 130, desc: "Smoky grilled chicken with a tangy BBQ glaze." },
      { name: "Chilli Chicken", price: 250, desc: "Indo-Chinese chicken tossed in spicy chilli sauce." },
      { name: "Chicken Manchuria", price: 250, desc: "Crispy chicken in tangy Manchurian gravy." },
      { name: "Chicken 65", price: 250, desc: "The classic fiery deep-fried chicken bites." },
      { name: "Cashew Chicken", price: 300, desc: "Chicken stir-fried with roasted cashews." },
      { name: "Chicken Wings", price: 280, desc: "Crispy spiced wings — finger-licking good." },
      { name: "Chilly Egg", price: 170, desc: "Boiled eggs tossed in spicy chilli masala." },
      { name: "Apollo Fish", price: 250, desc: "Crispy boneless fish in tangy spices." },
      { name: "Egg Omlet", price: 70, desc: "Fluffy spiced omelette, simple and satisfying." },
    ],
  },
  {
    id: "veg-starters",
    title: "Veg Starters",
    type: "veg",
    items: [
      { name: "Veg Manchuria", price: 160, desc: "Crispy veg balls in tangy Manchurian sauce." },
      { name: "Paneer 65", price: 210, desc: "Spicy deep-fried cottage cheese bites." },
      { name: "Chilli Mushroom", price: 210, desc: "Mushrooms tossed in chilli-garlic sauce." },
      { name: "French Fries", price: 130, desc: "Golden, crispy, lightly salted fries." },
    ],
  },
  {
    id: "nonveg-curries",
    title: "Non-Veg Curries",
    type: "nonveg",
    items: [
      { name: "Chicken Boneless Curry", price: 320, desc: "Boneless chicken in a rich, spicy gravy." },
      { name: "Chicken Curry / Roast", price: 280, desc: "Home-style chicken curry or dry roast." },
      { name: "Mogalai Chicken Curry", price: 350, desc: "Creamy, royal Mughlai chicken curry." },
      { name: "Metti Chicken Curry", price: 350, desc: "Fenugreek-spiced country chicken curry." },
      { name: "Natu Kodi Pulusu", price: 400, desc: "Tangy country-chicken pulusu, village style." },
      { name: "Mutton Curry / Roast", price: 430, desc: "Slow-cooked mutton curry or spicy roast." },
      { name: "Prawns Curry / Roast", price: 410, desc: "Prawns in a spicy coastal masala." },
      { name: "Egg Burji", price: 170, desc: "Scrambled spiced egg bhurji." },
    ],
  },
  {
    id: "veg-curries",
    title: "Veg Curries",
    type: "veg",
    items: [
      { name: "Kaju Tomato", price: 180, desc: "Cashews in a tangy tomato gravy." },
      { name: "Paneer Butter Masala", price: 250, desc: "Paneer in a creamy, buttery tomato gravy." },
      { name: "Paneer Masala", price: 210, desc: "Cottage cheese in spiced onion-tomato masala." },
      { name: "Mushroom Curry", price: 210, desc: "Mushrooms simmered in a spiced gravy." },
      { name: "Mixed Veg Curry", price: 150, desc: "Seasonal vegetables in a savoury curry." },
    ],
  },
  {
    id: "nonveg-rice",
    title: "Non-Veg Fried Rice",
    type: "nonveg",
    items: [
      { name: "Egg Fried Rice", price: 150, desc: "Wok-tossed rice with egg and veggies." },
      { name: "Chicken Fried Rice", price: 210, desc: "Classic chicken fried rice." },
      { name: "Sp Chicken Fried Rice", price: 260, desc: "Special fried rice loaded with chicken." },
      { name: "Schezwan Fried Rice", price: 230, desc: "Spicy Schezwan-style fried rice." },
    ],
  },
  {
    id: "chinese-veg",
    title: "Chinese Items (Veg)",
    type: "veg",
    items: [
      { name: "Veg Fried Rice", price: 150, desc: "Wok-tossed rice with crunchy vegetables." },
      { name: "Jeera Rice", price: 150, desc: "Fragrant cumin-tempered basmati rice." },
      { name: "Paneer Fried Rice", price: 180, desc: "Fried rice tossed with soft paneer." },
      { name: "Mushroom Fried Rice", price: 180, desc: "Fried rice with savoury mushrooms." },
    ],
  },
  {
    id: "roti",
    title: "Roti",
    type: "veg",
    items: [
      { name: "Pulka", price: 14, desc: "Soft, fluffy hand-rolled wheat roti." },
      { name: "Bobbattu", price: 20, desc: "Sweet stuffed flatbread — a festive treat." },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    type: "veg",
    items: [
      { name: "Vanilla Ice Cream", price: 50, desc: "Creamy, classic vanilla scoop." },
      { name: "Fruit Salad with Vanilla Ice Cream", price: 80, desc: "Fresh fruits topped with vanilla ice cream." },
    ],
  },
];
