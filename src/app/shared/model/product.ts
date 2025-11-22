export interface Iproduct {
    id: string
    name: string
    description: string
    category: Category
  }

enum Category {
    Electronics = 'Electronics',
    Wearables = 'Wearables',
    Groceries = 'Groceries',
    Furniture = 'Furniture',
    Gaming = 'Gaming'
}  