export default interface SnipcartProduct {
  mode: string;
  userDefinedId: string;
  url: string;
  price: number;
  name: string;
  description: string;
  image: string;
  archived: boolean;
  inventoryManagementMethod: string;
  stock: number;
  totalStock: number;
  allowOutOfStockPurchases: boolean;
  statistics: {
    numberOfSales: number;
    totalSales: number;
  };
  customFields: unknown[];
  variants: unknown[];
  metadata?: string;
  id: string;
  creationData: string;
  modificationData: string;
}
