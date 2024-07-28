const getProducts=async()=>{
const {data}=await axios.get('https://dummyjson.com/products');
return data;
}
getProducts();

const displayProducts=async()=>{
    try{
    const data=await getProducts();
    const result = data.products.map((ele)=>{
        return`<tr>
                <td>${ele.title}</td>
                <td><img src="${ele.images}"/> </td>
                <td> <a href='details.html?id=${ele.id}'>details</a> 
                <button onclick='deleteProducts(${ele.id})'>delete</button> 
                </td>
            </tr>`;
        }).join(' ');
        document.querySelector(".products").innerHTML=result;
       

}catch(e){
    console.log(e);

}finally{
    document.querySelector(".overlay").classList.add('d-none');
}
}

const deleteProducts=async(id)=>{
    try{
    const{data}=await axios.delete(`https://dummyjson.com/products/${id}`);
    
    alert('delete is succesfull');
    location.href='index.html';
    }catch(e){
        console.log(e);
        alert('delete is not found this id for product');
    }
}


displayProducts();