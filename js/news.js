/*------------------------------ newsShow area --------------------- */
const loadNewsPage = async (category_id) => {
  
  try{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url)
    const data = await res.json()
    displayNews(data.data)
  }
  catch(e){

    console.log('Fetch error: ', error);
}
  
}
const displayNews = newsArea => {
  const newsShowerField = document.getElementById('show-news')
  // console.log(newsShowerField)
  newsShowerField.innerHTML = ``
  
  const noNews=document.getElementById('no-found')
  const showNews=document.getElementById('show-massage')
  const showNewsNumber=document.getElementById('show-news-number')
  if(newsArea.length===0){
    noNews.classList.remove('d-none')
    showNews.classList.add('d-none')
  }
  else{
    noNews.classList.add('d-none')
    showNews.classList.remove('d-none')
    showNewsNumber.innerText=newsArea.length
  }
  
  newsArea.forEach(news => {

    const newsDiv = document.createElement('div')
    
    newsDiv.innerHTML = `
      <div  class="card mb-3" style="w-100;">
      <div class="row g-0">
      <div class="col-md-4">
      <img  src="${news.thumbnail_url} " class="img-fluid   rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0,200)}...</p>
      <div class="d-flex justify-content-center align-items-center gap-5">
         <div>
            <div class="d-flex align-items-center gap-5">
              <img class="w-25 rounded-circle " src="${news.author.img}" alt="">
            <div>
              <p>${news.author.name?news.author.name:'No Data Found'}</p> 
              <p>${news.author.published_date?news.author.published_date:'No publish date found'}</p>
            </div>      
        </div>
      </div> 
        <div class="d-flex gap-2 align-items-center">
            <p><i class="fa-sharp fa-solid fa-eye"></i></p>
            <p>${news.total_view?news.total_view:'No view'}</p>
        </div> 
        <div>
            <button type="button" onclick="loadNewsDetails1('${news._id}')" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-right-long"></i>
            </button> 
        </div>

    </div>
    </div>
    </div>
    </div>
      
      `
    newsShowerField.appendChild(newsDiv)
    
  })
  // stop loader 
  // toggleSpiner(false)
}
// loadNewsPage(08)



