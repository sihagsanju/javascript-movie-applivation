const favBtn=document.getElementById("favBtn");
  //favBtn.addEventListener("click",viewFavourites);
  favBtn.addEventListener("click",togglefun);
  const searchedMovie=document.getElementById("demo");
  const favmovie=document.getElementById("demo1");
  const favmovieSet=[];
   function createNode(element) {
                     return document.createElement(element);
                 }
    document.getElementById("myBtn").addEventListener("click", function(){
  // document.getElementById("demo").innerHTML = "Hello World";
   document.getElementById("movielist").style="display:block";
   console.log("java script");
             const ul = document.getElementById('movietext').value;
             let cnt=0;
             console.log("th value of ul",ul);
const url = 'https://api.themoviedb.org/3/search/movie?api_key=8df1d0b103715cec7ecd657e60fd368b&query='+ul;
                fetch(url)
                .then(resp => resp.json()) 
                .then(posts=>{
                  console.log(posts);
                  obj =posts;
                  for(let i=0;i<obj.results.length;i++){
                    let movie=obj.results[i].title;
                    span = createNode('span');
                    listdiv=document.createElement('div');
                   // span.innerHTML ="<br>"+"<hr>"+obj.results[i].title;
                    listdiv.className = 'col-md-3 col-sm-3 col-lg-3 col-xs-3 movieCard';
                    listdiv.innerHTML='<p>'+movie+'</p>'
                    listdiv.innerHTML+='</hr>';
                    var btn = document.createElement("BUTTON");
                    btn.id="fav"+i;
                    btn.addEventListener("click",(e)=>{
                        // e.preventDefault();
                          addToFav(movie);
                    })
                    btn.innerText="Add to Fav";
                    //document.getElementById("fav").name="Fav";
                    //btn=createNode('p').innerHTML=span;  
                    searchedMovie.style='display:block';
                    favdiv=document.createElement('div');
                    favdiv.appendChild(btn);
                    listdiv.appendChild(favdiv);                                                                                                                                                                                        
                     searchedMovie.appendChild(listdiv);
                     // searchedMovie.appendChild(btn); 
                  }
                })    
                });             
function addToFav(movieTitle){
    
if(!favmovieSet.includes(movieTitle)){
favmovieSet.push(movieTitle);
localStorage.setItem("favMovies",JSON.stringify(favmovieSet));
}
 }
function viewFavourites(){
    document.getElementById("movielist").style="display:none";
    searchedMovie.style='display:none';
    //e.preventDefault();
 document.getElementById("moviefav").style="display:block";
 favmovie.innerHTML="";
 if(favmovieSet.length!=0){
   favmovieSet.sort();
   for(let y=0;y<favmovieSet.length;y++){
 span1 = createNode('span');
 span1.innerHTML ="<br>"+"<hr>"+favmovieSet[y];                                                                                                                                                                                         
  favmovie.appendChild(span1);
 }
 }
 else{
const newSet=JSON.parse(localStorage.getItem("favMovies"));

for(let item of newSet){
favmovieSet.push(item);
}
viewFavourites();
 }
}
function togglefun()
{
    if(searchedMovie.style=='display:none')
    viewFavourites();
    else
    {
    searchedMovie.style=='display:block';
     viewFavourites();
    }
}