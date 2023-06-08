export interface Main {
  count: number;
  page_count: number;
  page: number;
  results: ProductType[];
}

export interface ProductType {
  id: string;
  attributes: Attributes;
  currency: string;
  description: string;
  bundle: null;
  images: Image[];
  meta_description: null;
  meta_title: string;
  name: string;
  options: any[];
  price: number;
  purchase_options: PurchaseOptions;
  sale: boolean;
  sku: null;
  slug: string;
  stock_status: null;
  stock_tracking: boolean;
  tags: string[];
}

export interface Attributes {}

export interface Image {
  id: string;
  file: File;
}

export interface File {
  height: number;
  md5: string;
  url: string;
  width: number;
}

export interface PurchaseOptions {
  standard: Standard;
}

export interface Standard {
  price: number;
  sale: boolean;
  sale_price: number;
}
