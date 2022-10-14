export interface IOrder {
  orderedDate: string;
  productPrice: number;
  orderedBy: string;
  deliveryDate: string;
  deliveryForm: string;
  itemName: string;
  itemDescription: string;
  totalQty: number;
  itemImage: string;
}

export interface IOrderList {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
