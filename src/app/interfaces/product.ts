export interface Product {
    id: string,
    character: string,
    cost: number,
    description?: string,
    img: string,
    name: string,
    price: number,
    stock: number,
    selectedProducts?: number
}
