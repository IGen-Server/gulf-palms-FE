import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const categories = [
  {
    name: "Citruses Trees",
    link: "/collections/citruses-trees",
    subcategories: [
      { name: "Clementine", link: "/collections/citruses-trees/clementine" },
      { name: "Lemon", link: "/collections/citruses-trees/lemon" },
      { name: "Orange", link: "/collections/citruses-trees/orange" },
      { name: "Others", link: "/collections/citruses-trees/others" },
    ],
  },
  {
    name: "Fertilizers",
    link: "/collections/fertilizers",
    subcategories: [
      {
        name: "Granular Fertilizers",
        link: "/collections/fertilizers/granular-fertilizers",
      },
      {
        name: "Liquid Fertilizer",
        link: "/collections/fertilizers/liquid-fertilizer",
      },
      {
        name: "Organic Fertilizers",
        link: "/collections/fertilizers/organic-fertilizers",
      },
      {
        name: "Soluble Fertilizers",
        link: "/collections/fertilizers/soluble-fertilizers",
      },
    ],
  },
  {
    name: "Fruits Trees",
    link: "/collections/fruits-trees",
    subcategories: [
      { name: "Berries", link: "/collections/fruits-trees/berries" },
      { name: "Fig", link: "/collections/fruits-trees/fig" },
      { name: "Grapes", link: "/collections/fruits-trees/grapes" },
      { name: "Mango", link: "/collections/fruits-trees/mango" },
      { name: "Others", link: "/collections/fruits-trees/others" },
    ],
  },
  {
    name: "Garden Accessories",
    link: "/collections/garden-accessories",
    subcategories: [
      {
        name: "Bamboo Sticks",
        link: "/collections/garden-accessories/bamboo-sticks",
      },
      { name: "Date Bags", link: "/collections/garden-accessories/date-bags" },
      {
        name: "Gravels & Stone",
        link: "/collections/garden-accessories/gravels-stone",
      },
      {
        name: "Holland Spring",
        link: "/collections/garden-accessories/holland-spring",
      },
      { name: "Shade Net", link: "/collections/garden-accessories/shade-net" },
      { name: "Tools", link: "/collections/garden-accessories/tools" },
    ],
  },
  {
    name: "Garden Furniture",
    link: "/collections/garden-furniture",
    subcategories: [
      { name: "Firepits", link: "/collections/garden-furniture/firepits" },
      {
        name: "Outdoor Furniture",
        link: "/collections/garden-furniture/outdoor-furniture",
      },
    ],
  },
  {
    name: "Grafted Sider",
    link: "/collections/grafted-sider",
    subcategories: [],
  },
  {
    name: "Indoor Plants",
    link: "/collections/indoor-plants",
    subcategories: [
      {
        name: "Cactus & Succulents",
        link: "/collections/indoor-plants/cactus-succulents",
      },
      {
        name: "Flowering Plants",
        link: "/collections/indoor-plants/flowering-plants",
      },
      { name: "Green Plants", link: "/collections/indoor-plants/green-plants" },
      {
        name: "Hanging Plants",
        link: "/collections/indoor-plants/hanging-plants",
      },
    ],
  },
  {
    name: "Ornamental Palms & Bonsai",
    link: "/collections/ornamental-palms-bonsai",
    subcategories: [
      {
        name: "Ficus Microcarpa",
        link: "/collections/ornamental-palms-bonsai/ficus-microcarpa",
      },
      {
        name: "Olive Trees",
        link: "/collections/ornamental-palms-bonsai/olive-trees",
      },
      { name: "Olives", link: "/collections/ornamental-palms-bonsai/olives" },
      {
        name: "Other Palms",
        link: "/collections/ornamental-palms-bonsai/other-palms",
      },
      {
        name: "Washingtonian Palms",
        link: "/collections/ornamental-palms-bonsai/washingtonian-palms",
      },
    ],
  },
  {
    name: "Ornamental Plants",
    link: "/collections/ornamental-plants",
    subcategories: [
      {
        name: "Bougainvillea",
        link: "/collections/ornamental-plants/bougainvillea",
      },
      { name: "Cactus", link: "/collections/ornamental-plants/cactus" },
      {
        name: "Climbers & Creepers",
        link: "/collections/ornamental-plants/climbers-creepers",
      },
      {
        name: "Desert Plants",
        link: "/collections/ornamental-plants/desert-plants",
      },
      {
        name: "Prennials and Seasonal",
        link: "/collections/ornamental-plants/prennials-seasonal",
      },
      { name: "Shrubs", link: "/collections/ornamental-plants/shrubs" },
      { name: "Trees", link: "/collections/ornamental-plants/trees" },
    ],
  },
  {
    name: "Plant Care",
    link: "/collections/plant-care",
    subcategories: [
      { name: "Fungicides", link: "/collections/plant-care/fungicides" },
      { name: "Insecticides", link: "/collections/plant-care/insecticides" },
      { name: "Others", link: "/collections/plant-care/others" },
    ],
  },
  {
    name: "Plant Media",
    link: "/collections/plant-media",
    subcategories: [
      { name: "Others", link: "/collections/plant-media/others" },
      { name: "Peat Moss", link: "/collections/plant-media/peat-moss" },
      {
        name: "Plants Mixtures",
        link: "/collections/plant-media/plants-mixtures",
      },
      { name: "Soil", link: "/collections/plant-media/soil" },
      { name: "Soil Improver", link: "/collections/plant-media/soil-improver" },
    ],
  },
  {
    name: "Pots & Bags",
    link: "/collections/pots-bags",
    subcategories: [
      { name: "Ceramic Pots", link: "/collections/pots-bags/ceramic-pots" },
      { name: "Concrete Pots", link: "/collections/pots-bags/concrete-pots" },
      { name: "Fiber Pots", link: "/collections/pots-bags/fiber-pots" },
      { name: "Planter Bags", link: "/collections/pots-bags/planter-bags" },
      { name: "Plastic Pots", link: "/collections/pots-bags/plastic-pots" },
    ],
  },
  {
    name: "Seeds",
    link: "/collections/seeds",
    subcategories: [
      { name: "Flowers", link: "/collections/seeds/flowers" },
      { name: "Herbs", link: "/collections/seeds/herbs" },
      { name: "Vegetables", link: "/collections/seeds/vegetables" },
    ],
  },
  {
    name: "Tissue Culture Palms",
    link: "/collections/tissue-culture-palms",
    subcategories: [
      {
        name: "Field Palms",
        link: "/collections/tissue-culture-palms/field-palms",
      },
      {
        name: "Mother Offshoots",
        link: "/collections/tissue-culture-palms/mother-offshoots",
      },
      { name: "Others", link: "/collections/tissue-culture-palms/others" },
      {
        name: "Potted Offshoots",
        link: "/collections/tissue-culture-palms/potted-offshoots",
      },
      {
        name: "Potted Palms",
        link: "/collections/tissue-culture-palms/potted-palms",
      },
    ],
  },
];

export default function Productcategories() {
  return (
    <div className="space-y-4 pt-[30px]">
      <p className="uppercase font-semibold text-[16px]">Product categories</p>
      <Accordion type="single" collapsible className="w-full">
        {categories.map((category, index) => (
          <AccordionItem key={index} value={`category-${index}`}>
            <AccordionTrigger className="text-[14px]  text-gray-600 hover:no-underline">
              <Link href={category.link} className="hover:no-underline">
                {category.name}
              </Link>
            </AccordionTrigger>
            <AccordionContent className="pl-6">
              <ul className="space-y-2">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subcategory.link}
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {subcategory.name}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
