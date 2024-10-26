interface IAsset {
  id: string;
  source: string;
  preview: string;
}

interface IProductVariant {
  id: string;
  price: number;
  name: string;
  assets: IAsset[];
  __typename: string;
}

interface IProduct {
  id: string;
  name: string;
  description: string;
  assets: IAsset[];
  variants: IProductVariant[];
  __typename: string;
}

export interface IProductList {
  items: IProduct[];
  totalItems: number;
}
