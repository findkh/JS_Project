let menuList = [...menu];

let body
// 메뉴 화면에 뿌리기
menuList.forEach(function(item) {
    if(item.id === 'coffee') {
        body = document.querySelector('#cofee_body');
    } else if (item.id === 'flatccino') {
        body = document.querySelector('#flatccino_body');
    } else {
        body = document.querySelector('#dessert_body');
    }

    body.innerHTML += `<div class="col-md-6 col-lg-3 mb-5">
                            <div class="card mx-auto">
                                <div class="d-flex align-items-center justify-content-center" style="background-color:#f5f5f5">
                                    <img class="img-fluid item_img" src="${item.picture}"/>
                                </div>
                                <div class="card-body2">
                                    <span id="name">${item.name}</span><br>
                                    <span id="price">${item.price}</span>
                                    <div class="input-group">
                                        <input type="number" min="0" class="form-control ${item.no} ${item.id}" value="1" style="text-align: center;">
                                        <button class="btn btn-outline-primary btn-number" type="button" button-type="plus"><i class="fas fa-plus"></i></button>
                                        <button class="btn btn-outline-danger btn-number" type="button" button-type="minus"><i class="fas fa-minus"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-add">담기</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
});

// 메뉴 +/- 버튼 기능 추가
let btn = document.querySelectorAll('.btn-number');

btn.forEach(function(item) {
    item.addEventListener('click', function() {
        let btnType = item.getAttribute('button-type');
        let parent = item.parentNode;
        let qty = parent.childNodes[1];
        
        if(btnType === 'plus') {
            qty.value = Number(qty.value) + 1;
        } else {
            if(qty.value != 0) {
                qty.value = Number(qty.value) - 1;
            }            
        }
    })
});

// 장바구니에 담기 기능
let addCartBtn = document.querySelectorAll('.btn-add');
let cartArr = [];

addCartBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let parent = item.parentNode;
        let qty = parent.childNodes[1];

        let menuNo = qty.getAttribute('class').split(' ')[1];
        let menuId = qty.getAttribute('class').split(' ')[2];
        let qtyValue = qty.value;

        menuList.forEach(function(item) {
            if(item.no == menuNo && item.id == menuId) {
                console.log(item)
                item.count = item.count==null ? Number(qtyValue) : item.count+Number(qtyValue)
                cartArr.push(item)
                makeCartList()
            }
        });
        
        document.querySelector('.menuBtn').click();
    })  
})




// 총액 change 이벤트


// 카트 메뉴 리스트 만드는 함수
function makeCartList() {
    let cartSet = new Set(cartArr);
    uniqueArr = [...cartSet];
    let cartUl = document.querySelector('.cartUl');
    let totalPrice = 0; //메뉴 전체 가격
    let changeMenuPrice = 0; //변경된 메뉴
    
    while(cartUl.firstChild)  {
        cartUl.removeChild(cartUl.firstChild);
    }

    uniqueArr.forEach(function(item) {
        cartUl.innerHTML += `<li class="list-group-item cartLi ${item.no}">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <span>${item.name}</span><br>
                                        <span>${item.price}</span>
                                    </div>
                                    <div class="col-sm-6 mt-3">
                                        <div class="input-group">
                                            <input type="number" min="0" class="form-control cartQty" value="${item.count}" price="${item.price}" item="${item.no}" style="height:25px;text-align: center;">
                                            <button class="btn btn-outline-primary cart-btn-number" type="button" button-type="plus" style="height:25px;text-align: center;"><i class="fas fa-plus menu"></i></button>
                                            <button class="btn btn-outline-danger cart-btn-number" type="button" button-type="minus" style="height:25px;text-align: center;"><i class="fas fa-minus menu"></i></button>
                                            <button class="btn btn-outline-success cart-btn-number" type="button" button-type="delete" style="height:25px;text-align: center;"><i class="fa fa-trash menu"></i></button>
                                        </div>                    
                                    </div>
                            </li>`
        totalPrice += item.price * item.count;

        document.querySelector('.total_price').innerText = totalPrice;
    })

            // 카트 +/- 버튼 기능
            cartBtn = document.querySelectorAll('.cart-btn-number');
            cartBtn.forEach(function(cartItem) {
                cartItem.addEventListener('click', function() {
                    let btnType = cartItem.getAttribute('button-type');
                    let parent = cartItem.parentNode;
                    let qty = parent.childNodes[1];
                    let price = qty.getAttribute('price');
                    let totalP = Number(document.querySelector('.total_price').innerText);
    
                    if(btnType === 'plus') {
                        // console.log('===더하기===')
                        // console.log('상품 총액', totalP)
                        // console.log('변경전 가격 총액', price, '*', qty.value, '=', price * qty.value)
                        
                        totalP -= price  * qty.value

                        // console.log('빼버렴', totalP)

                        qty.value = Number(qty.value) + 1;
                        // console.log('value 증가', qty.value)
                        
                        document.querySelector('.total_price').innerText = totalP + (qty.value * price)

                    } else {
                        if(qty.value != 0) {
                            // console.log('===빼기===')
                            // console.log('상품 총액', totalP)
                            // console.log('변경전 가격 총액', price, '*', qty.value, '=', price * qty.value)
                            totalP -= price  * qty.value

                            // console.log('남은돈', totalP)

                            qty.value = Number(qty.value) - 1;
                            // console.log('value 감소', qty.value)
                            document.querySelector('.total_price').innerText = totalP + (qty.value * price)

                        } else {
                            no = Number(qty.getAttribute('item'));

                            //uniqueArr
                            for(i = 0; i < uniqueArr.length; i++) {
                                if(uniqueArr[i].no == no) {
                                    console.log(cartArr, uniqueArr)
                                    cartArr.count = "";
                                    cartArr.splice(i, 1);
                                    uniqueArr.splice(i, 1);
                                    
                                    break;
                                }
                            }
                            parent.parentNode.parentNode.parentNode.remove();
                            
                        }
                    }
                })
            });
}



// function sumCartMenu() {
//     let cartSet = new Set(cartArr);
//     uniqueArr = [...cartSet];
//     let total = 0;
//     let totalPriceSpan = document.querySelector('.total_price').innerText;

//     uniqueArr.forEach(function(item) {
//         console.log(Number(item.price) , Number(item.count))
//         total += Number(item.price) * Number(item.count)
//         console.log('내부')
//         console.log(total)
//     })

//     console.log(total)
// }

