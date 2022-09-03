/*----------------- catagory area------------------- */

const loadCatagory= async()=>{
    const url="https://openapi.programming-hero.com/api/news/categories" 
    const res=await fetch(url)
    const data= await res.json()
    displayCatagory(data.data.news_category)
}
const displayCatagory=catagories=>{
 const catagoryField=document.getElementById('catagory-field')
 catagoryField.innerHTML=''
catagories.forEach(catagory=>{
    // console.log(catagory)
    const catagoryDiv=document.createElement('div')
    catagoryDiv.innerHTML=`
    <div class="btn ps-3 pe-3" onclick="loadNewsPage('${catagory.category_id}')"> ${catagory.category_name}</div>


    `
    catagoryField.appendChild(catagoryDiv)
})

}

loadCatagory()

 
  
  








