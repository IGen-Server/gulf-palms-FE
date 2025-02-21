import { AxiosInstance } from "axios";
import AxiosInstanceWithInterceptor from "./api.service";
import { CookieStorageService } from "./storage.service";
import { CustomAxiosInstance } from "./axios-with-loader.service";
import { ClientRoutes } from "./router.service";
import { ProductCategoryModel } from "@/models/product/product";

export function getNameInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function getTotalQuantity(lineItems: any[] | null | undefined): number {
  // Return 0 if lineItems is null, undefined, or an empty array
  if (!lineItems || lineItems.length === 0) {
      return 0;
  }

  // Sum up the quantities if lineItems is valid
  return lineItems.reduce((total, item) => total + (item.quantity || 0), 0);
}

export function onLogout(e:any) {
  e.preventDefault();
  CookieStorageService.clearAllTokens();
  window.location.href = ClientRoutes.User.MyAccountDashboard;
}

export function updateAxiosInstanceLoaderAndJwtChecking(axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true) {
  if (requiresJwt === true) {
    axiosInstance.setRequiresJwt(true);
  }
  if (enableLoader === false) {
    axiosInstance.setEnableLoader(false);
  }
  return axiosInstance;
}

export function getProductCategoryLink(currentCategories: ProductCategoryModel[], index: number) {
  const path = currentCategories.slice(0, index + 1).map(category => category.slug).join('/');
  return `product-category/${path}`;
}

export function getCategoryNameAndLinksAsArray(currentCategories: ProductCategoryModel[]): { name: string; link: string }[] {
  return currentCategories.map((category, index) => ({
    name: category.name,
    link: getProductCategoryLink(currentCategories, index),
  }));
}

export function extractCurrency(priceHtml: string): string {
  const regex = /<span class="woocommerce-Price-currencySymbol">([^<]+)<\/span>/;
  const match = priceHtml.match(regex);
  return match ? match[1] : '';
}

export function generateIdToCategoryRecord(categories: ProductCategoryModel[]): Record<number, ProductCategoryModel> {
  const slugToCategoryMap: Record<number, ProductCategoryModel> = {};

  categories.forEach(category => {
    slugToCategoryMap[category.id] = category;
  });

  return slugToCategoryMap;
}

export function getCategoryPathByIdFromRecord(categoryId: number, categoriesMap: Record<string, ProductCategoryModel>): string {
  if (!categoriesMap) {
    return '';
  }

  let currentCategory = categoriesMap[categoryId]; // Get category by ID
  let path: string[] = [];

  // Loop until we find the root category (parent === 0)
  while (currentCategory && currentCategory.parent !== 0) {
    path.unshift(currentCategory.slug); // Add slug to the beginning of the path array
    currentCategory = categoriesMap[currentCategory.parent]; // Move to the parent category
  }

  // Add the root category slug (if exists)
  if (currentCategory) {
    path.unshift(currentCategory.slug);
  }

  return '/product-category/' + path.join('/'); // Join the slugs with '/'
}

// Tree
export function buildCategoryTree(categories: ProductCategoryModel[]): ProductCategoryModel[] {
  const categoryMap = new Map<number, ProductCategoryModel>();

  // Step 1: Initialize all categories
  categories.forEach((category) => {
    categoryMap.set(category.id, { ...category, children: [] });
  });

  const rootCategories: ProductCategoryModel[] = [];

  // Step 2: Link children to parents
  categories.forEach((category) => {
    if (category.parent === 0) {
      rootCategories.push(categoryMap.get(category.id)!);
    } else {
      const parentCategory = categoryMap.get(category.parent);
      if (parentCategory) {
        parentCategory.children!.push(categoryMap.get(category.id)!);
      }
    }
  });

  return rootCategories;
}

// Method 1: Get category path using ID
export function getCategoryPathById(categoryId: number, categoryMap: Map<number, ProductCategoryModel>): string {
  console.log(categoryId);
  
  let path: string[] = [];
  let current = categoryMap.get(categoryId);
  
  console.log(current);

  while (current) {
    path.unshift(current.slug); // Add slug to path
    current = categoryMap.get(current.parent);
  }

  return path.join("/"); // Convert to URL path
}

// Method 2: Get category path using Slug
export function getCategoryPathBySlug(categorySlug: string, categoryMap: Map<number, ProductCategoryModel>): string {
  let categoryEntry = Array.from(categoryMap.values()).find(cat => cat.slug === categorySlug);
  
  if (!categoryEntry) return "";

  let path: string[] = [];
  let current: ProductCategoryModel | undefined = categoryEntry;

  while (current) {
    path.unshift(current.slug);
    current = categoryMap.get(current.parent) ?? undefined; // Ensure undefined is explicitly assigned
  }

  return path.join("/");
}
