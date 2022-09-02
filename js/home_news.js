const loadHomePageNews= async()=>{
    const url=`https://openapi.programming-hero.com/api/news/category/01`
    const res=await fetch(url)
    const data= await res.json()
    displayHomePageNews(data.data)
}

const displayHomePageNews=homePage=>{

    const newsShowerField=document.getElementById('show-news')
    newsShowerField.innerHTML=``
    homePage.forEach(homeNews=>{
        console.log(homeNews)
        const homeNewsDiv=document.createElement('div')
        homeNewsDiv.innerHTML=`
        <div  class="card mb-3" style="w-100;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${homeNews.thumbnail_url}" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${homeNews.title}</h5>
          <p class="card-text">${homeNews.details}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
      </div>
        `
        newsShowerField.appendChild(homeNewsDiv);

    })
}
// loadHomePageNews()