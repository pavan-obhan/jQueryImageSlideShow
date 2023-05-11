$(function(){

var galleryImage = $(".gallery").find("img").first();
var images = [
    "images/laptop-mobile_small.jpeg",
    "images/laptop-on-table_small.jpeg",
    "images/people-office-group-team_small.jpeg"
];
//alert("connected")
$("")
var i = 0;
setInterval(function(){ // goes indefinitely until exit condition specified
//console.log("inside")
    i = (i+1) % images.length; // 0,1,2,0,1,2,0,1,2 ... indefinitely
    galleryImage.fadeOut(function(){
        $(this).attr('src',images[i]); // or we can write as this.attr(....)
        $(this).fadeIn();
        console.log($(this).attr('src'))
});
},2000);

});