interface NavItem {
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
    href: "/offers",
  },
  {
    title: "Tissue Culture Palms",
    icon: "https://gulfpalms.com/wp-content/uploads/2023/10/palms.png",
    href: "/tissue-culture-palms",
    submenu: [
      { title: "Field Palms", href: "/tissue-culture-palms/field" },
      { title: "Potted Palms", href: "/tissue-culture-palms/potted" },
      { title: "Mother Offshoots", href: "/tissue-culture-palms/mother" },
      { title: "Potted Offshoots", href: "/tissue-culture-palms/offshoots" },
    ],
  },
  {
    title: "Grafted Sider",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-2.png",
    href: "/grafted-sider",
  },
  {
    title: "Fruits Trees",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/orange.png",
    href: "/fruits",
    submenu: [
      { title: "Berries", href: "/fruits/berries" },
      { title: "Fig", href: "/fruits/fig" },
      { title: "Grapes", href: "/fruits/grapes" },
      { title: "Mango", href: "/fruits/mango" },
      { title: "Others", href: "/fruits/others" },
    ],
  },
  {
    title: "Citruses Trees",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/lime.png",
    href: "/citrus",
    submenu: [
      { title: "Clementine", href: "/citrus/clementine" },
      { title: "Lemon", href: "/citrus/lemon" },
      { title: "Orange", href: "/citrus/orange" },
      { title: "Others", href: "/citrus/others" },
    ],
  },
  {
    title: "Ornamental Plants",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/nature.png",
    href: "/ornamental",
    submenu: [
      { title: "Bougainvilleas", href: "/ornamental/bougainvilleas" },
      { title: "Climbers & Creepers", href: "/ornamental/climbers" },
      { title: "Desert Plants", href: "/ornamental/desert" },
      { title: "Perennials And Seasonal", href: "/ornamental/perennials" },
      { title: "Shrubs", href: "/ornamental/shrubs" },
      { title: "Trees", href: "/ornamental/trees" },
    ],
  },
  {
    title: "Indoor Plants",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/sansevieria.png",
    href: "/indoor",
    submenu: [
      { title: "Green Plants", href: "/indoor/green" },
      { title: "Flowering Plants", href: "/indoor/flowering" },
      { title: "Cactus & Succulents", href: "/indoor/cactus" },
      { title: "Hanging Plants", href: "/indoor/hanging" },
    ],
  },
  {
    title: "Herbs",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/tea.png",
    href: "/herbs",
  },
  {
    title: "Ornamental Palms & Bonsai",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/tea.png",
    href: "/palms-bonsai",
    submenu: [
      { title: "Olive Trees", href: "/palms-bonsai/olive-trees" },
      { title: "Olives", href: "/palms-bonsai/olives" },
      { title: "Washingtonian Palms", href: "/palms-bonsai/washingtonian" },
      { title: "Other Palms", href: "/palms-bonsai/other" },
    ],
  },
  {
    title: "Plant Care",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/bonsai.png",
    href: "/plant-care",
    submenu: [
      { title: "Fungicides", href: "/plant-care/fungicides" },
      { title: "Insecticides", href: "/plant-care/insecticides" },
      { title: "Others", href: "/plant-care/others" },
    ],
  },
  {
    title: "Plant Media",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant.png",
    href: "/media",
    submenu: [
      { title: "Plants Mixtures", href: "/media/mixtures" },
      { title: "Soil", href: "/media/soil" },
      { title: "Soil Improver", href: "/media/improver" },
      { title: "Peat Moss", href: "/media/peat-moss" },
      { title: "Others", href: "/media/others" },
    ],
  },
  {
    title: "Fertilizers",
    icon: "https://gulfpalms.com/wp-content/uploads/2023/09/fertilizer.png",
    href: "/fertilizers",
    submenu: [
      { title: "Granular Fertilizers", href: "/fertilizers/granular" },
      { title: "Liquid Fertilizer", href: "/fertilizers/liquid" },
      { title: "Organic Fertilizers", href: "/fertilizers/organic" },
      { title: "Soluble Fertilizers", href: "/fertilizers/soluble" },
    ],
  },
  {
    title: "Seeds",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/flax-seed.png",
    href: "/seeds",
    submenu: [
      { title: "Vegetables", href: "/seeds/vegetables" },
      { title: "Flowers", href: "/seeds/flowers" },
      { title: "Herbs", href: "/seeds/herbs" },
    ],
  },
  {
    title: "Pots & Bags",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png",
    href: "/pots",
    submenu: [
      { title: "Planter Bags", href: "/pots/planter-bags" },
      { title: "Plastic Pots", href: "/pots/plastic" },
      { title: "Ceramic Pots", href: "/pots/ceramic" },
      { title: "Concrete Pots", href: "/pots/concrete" },
      { title: "Fiber Pots", href: "/pots/fiber" },
    ],
  },
  {
    title: "Garden Accessories",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png",
    href: "/accessories",
    submenu: [
      { title: "Bamboo Sticks", href: "/accessories/bamboo" },
      { title: "Date Bags", href: "/accessories/date-bags" },
      { title: "Gravels & Stone", href: "/accessories/gravels" },
      { title: "Shade Net", href: "/accessories/shade-net" },
      { title: "Tools", href: "/accessories/tools" },
    ],
  },
  {
    title: "Garden Furniture",
    icon: "https://gulfpalms.com/wp-content/uploads/2021/11/shovel.png",
    href: "/furniture",
  },
];

export const desktopMenuItems = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "/about" },
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
  { title: "CONTACT US", href: "/contact" },
];
