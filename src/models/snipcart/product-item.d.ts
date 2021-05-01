export default interface SnipcartProductItem {
  availablePlans: unknown[];
  categories?: unknown[];
  customFields: unknown[];
  description?: string;
  dimensions: {
    height?: number;
    length?: number;
    width?: number;
    weight?: number;
  };
  fileGuid?: string;
  hasTaxesIncluded?: boolean;
  id: string;
  image?: string;
  maxQuantity?: number;
  metadata?: string;
  minQuentity?: number;
  name: string;
  price: number;
  quantity: number;
  quantityStep?: number;
  selectedPlanId?: string;
  shippable: boolean;
  stackable?: boolean;
  taxable: boolean;
  taxes?: number;
  url: string;
}
