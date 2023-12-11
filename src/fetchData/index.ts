export const getProducts=async()=>{
const res=await fetch("https://fakestoreapiserver.reactbd.com/products")
if (!res.ok) {
   
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
