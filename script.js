$(document).ready(function(){

var API_KEY="AIzaSyCbmJg7PiMRVnhZV4juopC91skvZR7lyBI";
var video='';
 var videos=$("#videos")
$("#form").submit(function(event){
 event.preventDefault()//to prevent auto completion of form
 //alert("form is submitted")

 var search=$("#search").val();
 videoSearch(API_KEY,search,10);

 })
});



function videoSearch(key,search,maxResults){
   $("#videos").empty() ;
   $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key="+
 key+"&type=video&maxResults="+ 
 maxResults+
 "&q="+
 search,
 
 function(data){
console.log(data)
data.items.forEach(item => {
    video=`<iframe width="420" height="315"
    src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen>
    </iframe>`;
   $("#videos").append(video);
});
})
}

//})