$(()=>{
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(data,status){
   console.log(data)


   for(let i=0;i<data.length;i++){
    if(data[i].isAccessory === false){
   $("#card-section").append(`<a href="product.html?product=${data[i].id}"><img class=product-img src="${data[i].preview}"</a>
   <div class=product-meta><h4>${data[i].name} </h4>
   <h5>${data[i].brand}</h5>
   <p>Rs:${data[i].price}</P></div>`)
   $("#Accessories-containor")
  }
 else{
   $("#Accessories-containor").append(`<a href="#"><img class=product-img src="${data[i].preview}"</a>
   <div class=product-meta><h4>${data[i].name} </h4>
   <h5>${data[i].brand}</h5>
   <p>Rs:${data[i].price}</P></div>`)
  }
   }
  })
  if(localStorage.getItem('count')===null){
    localStorage.setItem('count',0)
}else{
    let counttt=localStorage.getItem('count')
    $('#addb').html(counttt)
}
  
})

$('.slick-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
});