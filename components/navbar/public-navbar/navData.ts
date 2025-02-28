export interface NavItem {
  title: string;
  href?: string;
  submenu?: NavItem[];
  icon?: string;
}

export const mobileMenuItems: NavItem[] = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "/about" },
  { title: "SHOP", href: "/shop" },
  {
    title: "SHOWROOMS",
    href: "/showrooms",
    submenu: [
      { title: "Rai Nursery", href: "/showrooms/rai-nursery" },
      { title: "Abdali Farm Showroom", href: "/showrooms/abdali-farm" },
      { title: "Abdali Ittihad Showroom", href: "/showrooms/abdali-ittihad" },
      {
        title: "Wafrah Corporate Showroom",
        href: "/showrooms/wafrah-corporate",
      },
      { title: "Wafrah Farm Showroom", href: "/showrooms/wafrah-farm" },
    ],
  },
  {
    title: "SERVICES",
    href: "/services",
    submenu: [
      { title: "Palms Maintenance", href: "/services/palms-maintenance" },
      { title: "Garden Maintenance", href: "/services/garden-maintenance" },
      { title: "Farm Development", href: "/services/farm-development" },
      { title: "Designing & Landscaping", href: "/services/landscaping" },
      { title: "Project Execution", href: "/services/project-execution" },
      { title: "Irrigation System Installation", href: "/services/irrigation" },
      {
        title: "Indoor Plants Maintenance",
        href: "/services/indoor-maintenance",
      },
      { title: "Consultation", href: "/services/consultation" },
    ],
  },
  { title: "PROJECTS", href: "/projects" },
  {
    title: "OUR FARMS",
    href: "/farms",
    submenu: [
      { title: "Wafrah Farm", href: "/farms/wafrah" },
      { title: "Abdali Farm", href: "/farms/abdali" },
    ],
  },
  { title: "GALLERY", href: "/gallery" },
  { title: "CONTACT US", href: "/contact" },
];

export const mobileCategoryItems: NavItem[] = [
  {
    title: "Ya Hala Offers",
    icon: "https://gulfpalms.com/wp-content/uploads/2023/10/price-tag-1.png",
    href: "/product-category/ya-hala-offers",
  },
  {
    title: "Tissue Culture Palms",
    icon: "https://gulfpalms.com/wp-content/uploads/2023/10/palms.png",
    href: "/product-category/tissue-culture-palms",
    submenu: [
      {
        title: "Field Palms",
        href: "/product-category/tissue-culture-palms/field",
      },
      {
        title: "Potted Palms",
        href: "/product-category/tissue-culture-palms/potted",
      },
      {
        title: "Mother Offshoots",
        href: "/product-category/tissue-culture-palms/mother",
      },
      {
        title: "Potted Offshoots",
        href: "/product-category/tissue-culture-palms/offshoots",
      },
    ],
  },
  {
    title: "Grafted Sider",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-2.png",
    href: "/product-category/grafted-sider",
  },
  {
    title: "Fruits Trees",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/orange.png",
    href: "/product-category/fruits",
    submenu: [
      { title: "Berries", href: "/product-category/fruits/berries" },
      { title: "Fig", href: "/product-category/fruits/fig" },
      { title: "Grapes", href: "/product-category/fruits/grapes" },
      { title: "Mango", href: "/product-category/fruits/mango" },
      { title: "Others", href: "/product-category/fruits/others" },
    ],
  },
  {
    title: "Citruses Trees",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/lime.png",
    href: "/product-category/citrus",
    submenu: [
      { title: "Clementine", href: "/product-category/citrus/clementine" },
      { title: "Lemon", href: "/product-category/citrus/lemon" },
      { title: "Orange", href: "/product-category/citrus/orange" },
      { title: "Others", href: "/product-category/citrus/others" },
    ],
  },
  {
    title: "Ornamental Plants",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/nature.png",
    href: "/product-category/ornamental",
    submenu: [
      {
        title: "Bougainvilleas",
        href: "/product-category/ornamental/bougainvilleas",
      },
      {
        title: "Climbers & Creepers",
        href: "/product-category/ornamental/climbers",
      },
      { title: "Desert Plants", href: "/product-category/ornamental/desert" },
      {
        title: "Perennials And Seasonal",
        href: "/product-category/ornamental/perennials",
      },
      { title: "Shrubs", href: "/product-category/ornamental/shrubs" },
      { title: "Trees", href: "/product-category/ornamental/trees" },
    ],
  },
  {
    title: "Indoor Plants",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/sansevieria.png",
    href: "/product-category/indoor",
    submenu: [
      { title: "Green Plants", href: "/product-category/indoor/green" },
      { title: "Flowering Plants", href: "/product-category/indoor/flowering" },
      { title: "Cactus & Succulents", href: "/product-category/indoor/cactus" },
      { title: "Hanging Plants", href: "/product-category/indoor/hanging" },
    ],
  },
  {
    title: "Herbs",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/tea.png",
    href: "/product-category/herbs",
  },
  {
    title: "Ornamental Palms & Bonsai",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/tea.png",
    href: "/product-category/palms-bonsai",
    submenu: [
      {
        title: "Olive Trees",
        href: "/product-category/palms-bonsai/olive-trees",
      },
      { title: "Olives", href: "/product-category/palms-bonsai/olives" },
      {
        title: "Washingtonian Palms",
        href: "/product-category/palms-bonsai/washingtonian",
      },
      { title: "Other Palms", href: "/product-category/palms-bonsai/other" },
    ],
  },
  {
    title: "Plant Care",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/bonsai.png",
    href: "/product-category/plant-care",
    submenu: [
      { title: "Fungicides", href: "/product-category/plant-care/fungicides" },
      {
        title: "Insecticides",
        href: "/product-category/plant-care/insecticides",
      },
      { title: "Others", href: "/product-category/plant-care/others" },
    ],
  },
  {
    title: "Plant Media",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant.png",
    href: "/product-category/media",
    submenu: [
      { title: "Plants Mixtures", href: "/product-category/media/mixtures" },
      { title: "Soil", href: "/product-category/media/soil" },
      { title: "Soil Improver", href: "/product-category/media/improver" },
      { title: "Peat Moss", href: "/product-category/media/peat-moss" },
      { title: "Others", href: "/product-category/media/others" },
    ],
  },
  {
    title: "Fertilizers",
    icon: "https://gulfpalms.com/wp-content/uploads/2023/09/fertilizer.png",
    href: "/product-category/fertilizers",
    submenu: [
      {
        title: "Granular Fertilizers",
        href: "/product-category/fertilizers/granular",
      },
      {
        title: "Liquid Fertilizer",
        href: "/product-category/fertilizers/liquid",
      },
      {
        title: "Organic Fertilizers",
        href: "/product-category/fertilizers/organic",
      },
      {
        title: "Soluble Fertilizers",
        href: "/product-category/fertilizers/soluble",
      },
    ],
  },
  {
    title: "Seeds",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/flax-seed.png",
    href: "/product-category/seeds",
    submenu: [
      { title: "Vegetables", href: "/product-category/seeds/vegetables" },
      { title: "Flowers", href: "/product-category/seeds/flowers" },
      { title: "Herbs", href: "/product-category/seeds/herbs" },
    ],
  },
  {
    title: "Pots & Bags",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png",
    href: "/product-category/pots",
    submenu: [
      { title: "Planter Bags", href: "/product-category/pots/planter-bags" },
      { title: "Plastic Pots", href: "/product-category/pots/plastic" },
      { title: "Ceramic Pots", href: "/product-category/pots/ceramic" },
      { title: "Concrete Pots", href: "/product-category/pots/concrete" },
      { title: "Fiber Pots", href: "/product-category/pots/fiber" },
    ],
  },
  {
    title: "Garden Accessories",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png",
    href: "/product-category/accessories",
    submenu: [
      { title: "Bamboo Sticks", href: "/product-category/accessories/bamboo" },
      { title: "Date Bags", href: "/product-category/accessories/date-bags" },
      {
        title: "Gravels & Stone",
        href: "/product-category/accessories/gravels",
      },
      { title: "Shade Net", href: "/product-category/accessories/shade-net" },
      { title: "Tools", href: "/product-category/accessories/tools" },
    ],
  },
  {
    title: "Garden Furniture",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/shovel.png",
    href: "/product-category/furniture",
  },
];

export const desktopMenuItems = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "/about-us-arabic" },
  { title: "SHOP", href: "/shop", submenu: [...mobileCategoryItems] },
  {
    title: "SHOWROOMS",
    href: "/showrooms",
    submenu: [
      { title: "Rai Nursery", href: "/showrooms/rai-nursery" },
      { title: "Abdali Farm Showroom", href: "/showrooms/abdali-farm" },
      { title: "Abdali Ittihad Showroom", href: "/showrooms/abdali-ittihad" },
      {
        title: "Wafrah Corporate Showroom",
        href: "/showrooms/wafrah-corporate",
      },
      { title: "Wafrah Farm Showroom", href: "/showrooms/wafrah-farm" },
    ],
  },
  {
    title: "SERVICES",
    href: "/services",
    submenu: [
      { title: "Palms Maintenance", href: "/services/palms-maintenance" },
      { title: "Garden Maintenance", href: "/services/garden-maintenance" },
      { title: "Farm Development", href: "/services/farm-development" },
      { title: "Designing & Landscaping", href: "/services/landscaping" },
      { title: "Project Execution", href: "/services/project-execution" },
      { title: "Irrigation System Installation", href: "/services/irrigation" },
      {
        title: "Indoor Plants Maintenance",
        href: "/services/indoor-maintenance",
      },
      { title: "Consultation", href: "/services/consultation" },
    ],
  },
  { title: "PROJECTS", href: "/projects" },
  {
    title: "OUR FARMS",
    href: "/farms",
    submenu: [
      { title: "Wafrah Farm", href: "/farms/wafrah" },
      { title: "Abdali Farm", href: "/farms/abdali" },
    ],
  },
  { title: "GALLERY", href: "/gallery" },
  { title: "CONTACT US", href: "/contact-us" },
];
