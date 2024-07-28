const getProduct=async()=>{
    const params= new URLSearchParams(window.location.search);
    const id=params.get('id');
    const{data}=await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}
getProduct();

const displayProduct=async()=>{
    try{
    const data=await getProduct();
    const result=
        `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
    `;
    const img=data.images;
    const res=img.map((ele)=>{
return ` 
            <img src="${ele}" />
        `;
    }).join(' ');
    
    document.querySelector(".details").innerHTML=result;
    document.querySelector(".details-image").innerHTML=res;
}catch(e){
    console.log(e);
}finally{
    document.querySelector(".overlay").classList.add('d-none');

}
   
}

displayProduct();