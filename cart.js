let total= 0
let Totalitem=0
let cartdata=JSON.parse(localStorage.getItem('cartitem'))
console.log(cartdata)
for(let i=0;i<cartdata.length;i++){
    Totalitem+=(cartdata[i].count)
    total+=(cartdata[i].count*cartdata[i].price)
    $('#chetoutarea').append(`<div class="cart-class-area" >
    <div class="card-cart-img"><img class="cartpic" src="${cartdata[i].preview}"/></div>
    <div class="card-text-area">
    <h3>${cartdata[i].name}</h3>
    <h5>X${cartdata[i].count}</h5>
    <h4>Amount:${cartdata[i].price}</h4>
    </div>
    </div>`)
}
let Totalitems = document.getElementById('totalitem')
Totalitems.innerHTML=Totalitem
let totalamountarea = document.getElementById('totalamountareatotal')
totalamountarea.innerHTML=total
let placeorderbtn = document.getElementById('placeorderbtn')
placeorderbtn.onclick=function(){
    JSON.parse(localStorage.clear('cartitem'))
}