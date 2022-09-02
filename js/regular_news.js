const loadRegularNewsPage= async()=>{
    const url=`https://openapi.programming-hero.com/api/news/category/02`
    const res=await fetch(url)
    const data= await res.json()
    displayRegularNews(data.data)
}
const displayRegularNews=regularNewsArea=>{
    const newsShowerField=document.getElementById('show-news')
    newsShowerField.innerHTML=``
    regularNewsArea.forEach(regularNews=>{
        
        const regularNewsDiv=document.createElement('div')
        regularNewsDiv.innerHTML=`
        <div  class="card mb-3" style="w-100;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${regularNews.thumbnail_url} " class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${regularNews.title}</h5>
          <p class="card-text">${regularNews.details}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
      </div>
        
        `
        newsShowerField.appendChild(regularNewsDiv)
    })


}


