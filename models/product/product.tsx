export interface ProductModel {
  id: number;
  date_created: string;
  date_updated: string;
  name: string;
  productGroup: {
    id: number;
    date_created: string;
    date_updated: string;
    name: string;
  };
  image: {
    id: number;
    date_created: string;
    date_updated: string;
    file: string;
    title: string;
    type: string;
    uploaded_by: string;
  };
}

export interface ProductCategoryModel {
  id: number; 
  parent: number; 
  name: string; 
  slug: string; 
  children?: ProductCategoryModel[] 
}

export interface ProductAttribute {
  id: number;
  name: string;
  slug: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
} 
