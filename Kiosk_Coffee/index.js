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
                                        <input type="text" class="form-control ${item.no} ${item.id}" value="1" style="text-align: center;">
                                        <button class="btn btn-outline-primary btn-number" type="button" button-type="plus"><i class="fas fa-plus"></i></button>
                                        <button class="btn btn-outline-danger btn-number" type="button" button-type="minus"><i class="fas fa-minus"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-add">담기</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
});

// 메뉴 +/- 버튼 기능 추가
let btn = document.querySelectorAll('.btn-number')

btn.forEach(function(item) {
    item.addEventListener('click', function() {
        let btnType = item.getAttribute('button-type');
        let parent = item.parentNode;
        let qty = parent.childNodes[1];
        
        if(btnType === 'plus') {
            qty.value = Number(qty.value) + 1;
            console.log(qty.value)
        } else {
            qty.value = Number(qty.value) - 1;
        }
        
    })
});

// 장바구니에 담기 기능
let addCartBtn = document.querySelectorAll('.btn-add')

addCartBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let parent = item.parentNode;
        let qty = parent.childNodes[1];

        //let selectedMenu = 
        let menuNo = qty.getAttribute('class').split(' ')[1];
        let menuId = qty.getAttribute('class').split(' ')[2];
        let qtyValue = qty.value;
        let cartUl = document.querySelector('.cartUl');

        menuList.forEach(function(item) {
            if(item.no == menuNo && item.id == menuId) {
                let menuList = document.querySelectorAll('.cartLi')
                let menuArr = [... menuList]

                if (menuList.length == 0) {
                    cartUl.innerHTML += `<li class="list-group-item cartLi ${item.no}">
                        <div class="row">
                            <div class="col-sm-7">
                                <span>${item.name}</span>
                            </div>
                            <div class="col-sm-5">
                                <div class="input-group">
                                    <input type="text" class="form-control cartQty" value="${qtyValue}" style="height:25px;text-align: center;">
                                    <button class="btn btn-outline-primary cart-btn-number" type="button" button-type="plus" style="height:25px;text-align: center;"><i class="fas fa-plus menu"></i></button>
                                    <button class="btn btn-outline-danger cart-btn-number" type="button" button-type="minus" style="height:25px;text-align: center;"><i class="fas fa-minus menu"></i></button>
                                </div>                    
                            </div>
                    </li>`
                }

                // 중복 메뉴 카운트만 하기 수정
                menuArr.forEach(function(addedItem) {
                    if (Number(addedItem.getAttribute('class').split(' ')[2]) == item.no) {
                        let children = addedItem.childNodes[1];
                        children.querySelector('.cartQty').value = Number(children.querySelector('.cartQty').value) + 1;
                    } else {
                        cartUl.innerHTML += `<li class="list-group-item cartLi ${item.no}">
                        <div class="row">
                            <div class="col-sm-7">
                                <span>${item.name}</span>
                            </div>
                            <div class="col-sm-5">
                                <div class="input-group">
                                    <input type="text" class="form-control cartQty" value="${qtyValue}" style="height:25px;text-align: center;">
                                    <button class="btn btn-outline-primary cart-btn-number" type="button" button-type="plus" style="height:25px;text-align: center;"><i class="fas fa-plus menu"></i></button>
                                    <button class="btn btn-outline-danger cart-btn-number" type="button" button-type="minus" style="height:25px;text-align: center;"><i class="fas fa-minus menu"></i></button>
                                </div>                    
                            </div>
                    </li>`
                    }
                })
                
                //삭제 버튼도 만들기

            }
        });

        document.querySelector('.menuBtn').click();

        //합계 계산

    })
})