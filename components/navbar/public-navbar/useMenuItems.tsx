/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { buildCategoryTree } from "@/services/utility/utility.service";
import { useTranslation } from "react-i18next";

interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: null | string;
  menu_order: number;
  count: number;
  translations: {
    ar: number;
    en: number;
  };
  lang: string;
  _links: {
    self: Array<{
      href: string;
      targetHints: {
        allow: string[];
      };
    }>;
    collection: Array<{
      href: string;
    }>;
  };
  children: Category[];
}

interface NavItem {
  title: string;
  icon?: string;
  href: string;
  submenu?: NavItem[];
}

const useMobileCategoryItems = (): NavItem[] => {
  const { categories } = useGlobalDataProvider();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const iconMapArabic = [
    { title: "أثاث الحدائق والدوّات", icon: "https://clone.gulfpalms.com/wp-content/uploads/2021/11/table.png" }, // Garden Furniture
    { title: "أشجار الحمضيات", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/lime.png" }, // Citruses Trees
    { title: "أشجار الزينة والبونساي", icon: "https://clone.gulfpalms.com/wp-content/uploads/2021/11/bonsai.png" }, // Ornamental Palms & Bonsai
    { title: "أشجار الفاكهة", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/orange.png" }, // Fruits Trees
    { title: "المبيدات", icon: "https://clone.gulfpalms.com/wp-content/uploads/2021/11/plant-1.png" }, // Plant care
    { title: "أعشاب", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/tea.png" }, // Herbs
    { title: "اكسسوارات الحدائق", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png" }, // Garden Accessories
    { title: "الأحواض", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png" }, // Pots & Bags
    { title: "الأسمدة", icon: "https://gulfpalms.com/wp-content/uploads/2023/09/fertilizer.png" }, // Fertilizers
    { title: "البيتموس ومحسنات التربة", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant.png" }, // Plant Media
    { title: "النباتات الداخلية", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/sansevieria.png" }, // Indoor Plants
    { title: "النخيل النسيجي", icon: "https://gulfpalms.com/wp-content/uploads/2023/10/palms.png" }, // Tissue Culture Palms
    { title: "بذور", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/flax-seed.png" }, // Seeds
    { title: "نباتات الزينة", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/nature.png" }, // Ornamental Plants
    { title: "الصباريات", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/lime.png" } // Cacti & Succulents
  ];

  const iconMapEnglish = [
    {title: "Ya Hala Offers", icon: "https://gulfpalms.com/wp-content/uploads/2023/10/price-tag-1.png"},
    { title: "Citruses Trees", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/lime.png" },
    { title: "Fertilizers", icon: "https://gulfpalms.com/wp-content/uploads/2023/09/fertilizer.png" },
    { title: "Fruits Trees", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/orange.png" },
    { title: "Ornamental Palms &amp; Bonsai", icon: "https://clone.gulfpalms.com/wp-content/uploads/2021/11/bonsai.png" },
    { title: "Garden Accessories", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png" },
    { title: "Garden Furniture", icon: "https://clone.gulfpalms.com/wp-content/uploads/2021/11/table.png" },
    { title: "Grafted Sider", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-2.png" },
    { title: "Herbs", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/tea.png" },
    { title: "Indoor Plants", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/sansevieria.png" },
    { title: "Ornamental Plants", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/nature.png" },
    { title: "Plant Care", icon: "https://clone.gulfpalms.com/wp-content/uploads/2021/11/plant-1.png" },
    { title: "Pots &amp; Bags", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant-pot.png" },
    { title: "Plant Media", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/plant.png" },
    { title: "Seeds", icon: "https://gulfpalms.com/wp-content/uploads/2021/11/flax-seed.png" },
    { title: "Tissue Culture Palms", icon: "https://gulfpalms.com/wp-content/uploads/2023/10/palms.png" }
  ];

  // Select the appropriate iconMap based on the current language
  const iconMap = currentLanguage === "ar" ? iconMapArabic : iconMapEnglish;

  const transformCategoriesToNavItems = (categories: Category[]): NavItem[] => {
    const transformCategory = (category: Category, parentSlug?: string): NavItem => {
      // Build the href based on whether the category has a parent
      const href = parentSlug
        ? `/product-category/${parentSlug}/${category.slug}` // Child category
        : `/product-category/${category.slug}`; // Parent category

      const navItem: NavItem = {
        title: category.name,
        href,
      };

      // Find the icon for the category based on the title
      const iconItem = iconMap.find((item) => item.title === category.name);
      if (iconItem && iconItem.icon) {
        navItem.icon = iconItem.icon;
      }

      // Recursively transform children
      if (category.children && category.children.length > 0) {
        navItem.submenu = category.children.map((child) =>
          transformCategory(child, category.slug) // Pass the parent slug for children
        );
      }

      return navItem;
    };

    return categories.map((category) => transformCategory(category));
  };

  // Build the category tree and transform it into NavItem format
  const categoryTree = useMemo(
    () => (categories?.length ? buildCategoryTree(categories) : []),
    [categories]
  ) as any ;

  const mobileCategoryItems = useMemo(() => {
    if (categoryTree.length) {
      return transformCategoriesToNavItems(categoryTree).filter((item) => item.icon)
      .map((item) => ({
        ...item,
        title: item.title
          .replace("Ornamental Palms &amp; Bonsai", "Ornamental Palms & Bonsai")
          .replace("Pots &amp; Bags", "Pots & Bags"),
      }));
    }
    return [];
  }, [categoryTree, iconMap]);

  return mobileCategoryItems;
};

export default useMobileCategoryItems;