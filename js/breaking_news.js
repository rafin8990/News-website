const loadBreakingNewsPage= async()=>{
    const url=`https://openapi.programming-hero.com/api/news/category/03`
    const res=await fetch(url)
    const data= await res.json()
    displayBreakingNews(data.data)
}
const displayBreakingNews=breakingNewsArea=>{
    const newsShowerField=document.getElementById('show-news')
    newsShowerField.innerHTML=``
    breakingNewsArea.forEach(breakingNews=>{
        console.log(breakingNews)
        const breakingNewsDiv=document.createElement('div')
        breakingNewsDiv.innerHTML=`
        <div  class="card mb-3" style="w-100;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${breakingNews.thumbnail_url} " class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${breakingNews.title}</h5>
          <p class="card-text">${breakingNews.details}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
      </div>
        
        `
        newsShowerField.appendChild(breakingNewsDiv)
    })


}


