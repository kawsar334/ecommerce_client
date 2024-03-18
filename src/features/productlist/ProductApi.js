
// export function fetchAllProducts(){
//     return new Promise(async (resolve) => {
//         const response = await fetch("http://localhost:4040/products");
//         const data = await response.json();
//         resolve({ data })
//     })
// }
export function fetchAllProducts(){
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:4040/products");
        const data = await response.json();
        resolve({data});
    })
}