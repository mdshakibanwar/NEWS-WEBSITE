let key = 'e2f413ecff124ec9b199ef8af9fc4401';
let card_data = document.querySelector(".card-data") 
let input = document.querySelector(".inp");
let btn = document.querySelector(".btn")
let news_card = document.querySelectorAll(".news-card");

const getData = async(textVal)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${textVal}&apiKey=${key}`);
    let jsonData = await res.json();

//    console.log(jsonData);

    card_data.innerHTML = "";
    let clutter = "";
    input.value = "";

    jsonData.articles.forEach(function(ele){
    clutter += `  <div class="news-card">
          <img src="${ele.urlToImage}" alt="" />
          <h3>
          ${ele.title}
          </h3>
          <p>
          ${ele.description}
          </p>
        </div>`
     
        card_data.addEventListener("click",(dets)=>{
              console.log(ele.url);
        })

        })

    card_data.innerHTML = clutter;
}

window.addEventListener("load",function(){
    getData("india");
})

btn.addEventListener("click",function(){
    let val = input.value;
    getData(val);
})

function navClick(data){
   getData(data);
}