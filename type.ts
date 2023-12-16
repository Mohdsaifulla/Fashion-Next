export interface Products{
    _id:number,
    title:string,
    isNew:boolean,
    oldPrice:number,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:number,
}

export interface ProductProps{
    item:Products
}