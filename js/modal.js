
/*----------- modal area  -------------*/
const loadNewsDetails1=async (newsid)=>{
    const url=`https://openapi.programming-hero.com/api/news/${newsid}`
    const res= await fetch(url);
    const data=await res.json();
    displayNewsDetails(data.data[0]);
    
    
    }
    const displayNewsDetails = news =>{
        // toggleSpinner(true)
       console.log(news)

       const newsBody = document.getElementById('news-modal-body')
       newsBody.innerText = ''
       const modalDiv = document.createElement('div')
       modalDiv.innerHTML = `
       <p>News Details:  ${news.details.slice(20,100)}</p>
       <div class="row align-items-center">
                                                                  
           <div class="col-md-6"> View :
          <h3> ${news.total_view ? news.total_view : 'no data available'} </h3>
           </div>
    
           <div class="col-md-6"><strong> Name : </strong>
          <h3> ${news.author.name ? news.author.name : 'no data available'} </h3>                  
           </div>
       </div>
       
       `;
       newsBody.appendChild(modalDiv)
       
    
    }
   

 