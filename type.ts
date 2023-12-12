export interface products{
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

export interface productProps{
    item:products
}