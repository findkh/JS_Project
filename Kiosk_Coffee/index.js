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

    let qty = item.id+ '_'+item.no+'_qty'
    body.innerHTML += `<div class="col-md-6 col-lg-4 mb-5">
                            <div class="card mx-auto">
                                <div class="d-flex align-items-center justify-content-center" style="background-color:#f5f5f5">
                                    <img class="img-fluid item_img" src="${item.picture}"/>
                                </div>
                                <div class="card-body">
                                    <span id="name">${item.name}</span><br>
                                    <span id="price">${item.price}</span>
                                    <div class="input-group">
                                        <input type="text" class="form-control ${qty}" value="1">
                                        <button class="btn btn-outline-primary btn-number" type="button" button-type="plus"><i class="fas fa-plus"></i></button>
                                        <button class="btn btn-outline-danger btn-number" type="button" button-type="minus"><i class="fas fa-minus"></i></button>
                                        <button type="button" class="btn btn-outline-primary">담기</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
});

// 메뉴 +/- 버튼 기능 추가

// 장바구니에 담기 기능

