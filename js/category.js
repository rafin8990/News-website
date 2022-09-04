/*----------------- catagory area------------------- */


const loadCatagory= async()=>{
    try{
      const url="https://openapi.programming-hero.com/api/news/categories" 
      const res=await fetch(url)
      const data= await res.json()
      displayCatagory(data.data.news_category)
    }
    catch(e){
      console.log('Fetch error: ', error);
    }
    
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
  // loader start 
  toggleSpiner(true)
  }
  
  
  
  
  loadCatagory()
  
  const toggleSpiner=isloading=>{
    const loaderSection=document.getElementById('loader')
    if(isloading){
        loaderSection.classlist.remove('d-none')
    }
    else{
        loaderSection.classlist.add('d-none')
    }
  }