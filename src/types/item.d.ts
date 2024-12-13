type Item = {
  sku: number;
  name: string;
  description: string;
  price: number;
  basketLimit: number;
};

interface BasketItem extends Item {
  quantity: number;
  total_price: number;
}
