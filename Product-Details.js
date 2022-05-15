$(()=>{
    let id =new URLSearchParams(window.location.search).get('product')
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+id,function(data,status){
        console.log(data);
        console.log(status);
        
            $('#productimg').append(`<div class="img" ><img id="imggg" src="${data.preview}"/></div>`)
            $('#product-details').append(`<div class="productdiv"><h1 class="product-title">${data.name}</h1>
            <h1 class="product-brand">${data.brand}</h1>
            <h4 class="product-price">Price: Rs 
            <span class="span">${data.price}</span></h4>
            <h4 class="Description">Description</h4>
            <p class="p">${data.description}</p>
            <div class=img-product><h2 class="p-perview">Product Preview
            </h2><div class=img-product2></div>
            <div class=btn>
            <button id='add' >Add to Cart</button></div>
            </div>`)
           
            for( var i=0;i<data.photos.length;i++){
             $(".img-product2").append(`<img  class="image-batch border" src="${data.photos[i]}">`)

            }

            for( let i=0;i<data.photos.length;++i){
                $(".image-batch").eq(i).click(function(){
                    $('#imggg').attr('src',data.photos[i])
                    $(".border").removeClass("border")
                    $(this).addClass("border")
                })
            }

             
            let buycart={"id":(id),"name": `${data.name}`,"count":1,"preview":`${data.preview}`,"price":`${data.price}`}
            if(localStorage.getItem('count')===null){
                localStorage.setItem('count',0)
            }else{
                let counttt=localStorage.getItem('count')
                $('#addb').html(counttt)
            }
            if(localStorage.getItem('cartitem')===null){
                let temp =[]
                localStorage.setItem('cartitem',JSON.stringify(temp)) 
            }
            $("#add").click(function(){
               let tempp=JSON.parse(localStorage.getItem('cartitem'))
                let counttt=localStorage.getItem('count')
                counttt++
                localStorage.setItem("count",counttt)
                // let count=localStorage.getItem("count")
                $('#addb').html(counttt)
                if(tempp.length===0){
                    tempp.push(buycart)
                }else{
                    let flag=true
                    for( let i=0;i<tempp.length;i++){
                        if(tempp[i].id===id){
                            tempp[i].count+=1
                            flag=true
                        }else{flag=false}
                    }
                    if(flag===false){
                        tempp.push(buycart)
                    }
                }
                localStorage.setItem('cartitem',JSON.stringify(tempp))
               })

            })





        //     let tempCart = { "id": String(id), "name": `${productList.name}`, "count": 1, "amount": `${productList.price}`, "preview": `${productList.preview}` };
        // let tempCount = localStorage.getItem("cart-count");
        // $("#add-to-cart").click(function(){
        //     var flag = 1;
        //     setCartCount.innerHTML = ++tempCount;
        //     localStorage.setItem("cart-count", `${tempCount}`);
        //     cartItem = JSON.parse(localStorage.getItem("cart-item"));
        //     if (cartItem[0] === undefined) {
        //         cartItem.push(tempCart);
        //     } else {
        //         for (var i = 0; i < cartItem.length; ++i) {
        //             if (cartItem[i].id === String(id)) {
        //                 cartItem[i].count++;
        //                 flag = 1;
        //                 break;
        //             } else {
        //                 flag = 0;
        //             }
        //         }
        //         if (flag === 0) {
        //             cartItem.push(tempCart);
        //         }
        //     }
        //     localStorage.setItem("cart-item", JSON.stringify(cartItem));
        // })
        

})
