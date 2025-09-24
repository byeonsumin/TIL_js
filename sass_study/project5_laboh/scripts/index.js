<<<<<<< HEAD
<<<<<<< HEAD
// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기
// 1. 상품이미지에 마우스클릭 시 큰상품 이미지가 슬라이드 하면서 변경
// 2. 큰상품 이미지 밑에 작은 원이미지들을 누르면 해당 상품이미지로 슬라이드 하면서 변경
// 3. 주문목록 + 클릭 시, 재고수량까지 수량+금액 표시 (수량이 30이라면 경고창 출력)
// 4. 주문목록 - 클릭 시, 주문수량+주문금액 감소(수량이 1이라면 경고창 출력)
// 5. 😄(상품 선택 시) 장바구니, 바로구매 클릭 시 장바구니 페이지로 이동
// 6. 😄(상품 선택 시) 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동


//----------------------------------------------------------------
// 1. 상품이미지에 마우스클릭하면서 넘기면, 큰상품 이미지가 슬라이드 하면서 변경
const allContainer = document.querySelector('.thumnails');
const bnrContainer = allContainer.querySelector('.bnr');
const thumnail = bnrContainer.querySelectorAll('.thumnail')
const thumnailW = thumnail[0].offsetWidth;

let isDrag = false;  // 드래그 상태
let startX = 0;  // 시작 X 좌표
let startScrollLeft = 0;  // 시작 스크롤 위치

console.log(allContainer, bnrContainer, thumnail, thumnailW);

allContainer.addEventListener('mousedown', (e) => {
    isDrag = true; // 드래그 시작
    startX = e.pageX - allContainer.offsetLeft; // 시작 X 좌표 계산
    startScrollLeft = allContainer.scrollLeft; // 시작 스크롤 위치 저장
});

allContainer.addEventListener('mouseup', () => {
    isDrag = false; // 드래그 종료
});

allContainer.addEventListener('mousemove', (e) => {
    if (!isDrag) return; // 드래그 상태일 때만 실행
    const x = e.pageX; // 현재 마우스 X 좌표
    const walk = x - startX; // 이동 거리 계산
    allContainer.scrollLeft = startScrollLeft - walk; // 스크롤 위치 업데이트
});



// 2. 큰상품 이미지 밑에 작은 원이미지들을 누르면 해당 상품이미지로 슬라이드 하면서 변경
=======
// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기
// 1. 상품이미지에 마우스클릭 시 큰상품 이미지가 슬라이드 하면서 변경
// 2. 큰상품 이미지 밑에 작은 원이미지들을 누르면 해당 상품이미지로 슬라이드 하면서 변경
// 3. 주문목록 + 클릭 시, 재고수량까지 수량+금액 표시 (수량이 30이라면 경고창 출력)
// 4. 주문목록 - 클릭 시, 주문수량+주문금액 감소(수량이 1이라면 경고창 출력)
// 5. 😄(상품 선택 시) 장바구니, 바로구매 클릭 시 장바구니 페이지로 이동
// 6. 😄(상품 선택 시) 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동


//----------------------------------------------------------------
// 1. 상품이미지에 마우스클릭하면서 넘기면, 큰상품 이미지가 슬라이드 하면서 변경
const allContainer = document.querySelector('.thumnails');
const bnrContainer = allContainer.querySelector('.bnr');
const thumnail = bnrContainer.querySelectorAll('.thumnail')
const thumnailW = thumnail[0].offsetWidth;

let isDrag = false;  // 드래그 상태
let startX = 0;  // 시작 X 좌표
let startScrollLeft = 0;  // 시작 스크롤 위치

console.log(allContainer, bnrContainer, thumnail, thumnailW);

allContainer.addEventListener('mousedown', (e) => {
    isDrag = true; // 드래그 시작
    startX = e.pageX - allContainer.offsetLeft; // 시작 X 좌표 계산
    startScrollLeft = allContainer.scrollLeft; // 시작 스크롤 위치 저장
});

allContainer.addEventListener('mouseup', () => {
    isDrag = false; // 드래그 종료
});

allContainer.addEventListener('mousemove', (e) => {
    if (!isDrag) return; // 드래그 상태일 때만 실행
    const x = e.pageX; // 현재 마우스 X 좌표
    const walk = x - startX; // 이동 거리 계산
    allContainer.scrollLeft = startScrollLeft - walk; // 스크롤 위치 업데이트
});



// 2. 큰상품 이미지 밑에 작은 원이미지들을 누르면 해당 상품이미지로 슬라이드 하면서 변경
>>>>>>> 426d3ebf1100b737c562121d085efc37f863875e
=======
// index.js

// 동적 요소 계획하기
// 1. 상품이미지에 마우스클릭 시 큰상품 이미지가 슬라이드 하면서 변경
// 2. 큰상품 이미지 밑에 작은 원이미지들을 누르면 해당 상품이미지로 슬라이드 하면서 변경
// 3. 주문목록 + 클릭 시, 재고수량까지 수량+금액 표시 (수량이 30이라면 경고창 출력)
// 4. 주문목록 - 클릭 시, 주문수량+주문금액 감소(수량이 1이라면 경고창 출력)
// 5. 😄(상품 선택 시) 장바구니 클릭 시 장바구니 페이지로 이동
// 6. 😄(상품 선택 시) 구매하기 클릭 시 로그인 유무에 따라 다른 페이지로 이동
// 7. 😄(선물 선택 시) 선물구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
// 8. 큰이미지를 드래그하면서 넘기면 이미지가 넘어가게 하기


//----------------------------------------------------------------
// 1. 상품이미지에 마우스클릭하면서 넘기면, 큰상품 이미지가 슬라이드 하면서 변경
document.addEventListener("click", () => {
    const thumbLinks = document.querySelectorAll(".overview_img .thumnail a img");
    const bnr = document.querySelector(".overview .thumnails .bnr");
    const dots = document.querySelectorAll(".nxtpage_link svg");
    const imgWidth = 640; // 큰 이미지의 width

    for (let i = 0; i < thumbLinks.length; i++) {
        const thumb = thumbLinks[i];
        thumb.addEventListener("click", (e) => {
            e.preventDefault(); // a 태그 기본 동작 방지
            // 슬라이드 이동
            bnr.style.transform = `translateX(-${imgWidth * i}px)`;
            // 도트 색상 초기화 후 클릭된 것만 활성화
            for (let j = 0; j < dots.length; j++) {
                dots[j].style.backgroundColor = "#afafaf";
            }
            dots[i].style.backgroundColor = "#3a4046";
        });
    }
});

//----------------------------------------------------------------

// 2. 큰상품 이미지 밑에 작은 원이미지들을 누르면 해당 상품이미지로 슬라이드 하면서 변경
// 요소 선택
const bnr = document.querySelector('.overview .thumnails .bnr'); // 전체 배너 컨테이너
const dots = document.querySelectorAll('.nxtpage_link svg'); // 네 개의 점 버튼
const thumbs = document.querySelectorAll('.thumnail'); // 큰 썸네일 이미지들

let currentSlide = 0; // 현재 위치

// 슬라이드 이동 함수
function goToSlide(slideNum) {
    const slideWidth = 640; // CSS에서 각 thumnail 너비 = 640px
    bnr.style.transform = `translateX(-${slideNum * slideWidth}px)`;
    currentSlide = slideNum;

    // 버튼 색상 초기화 후 현재 버튼만 활성화 (for 루프 사용)
    for (let i = 0; i < dots.length; i++) {
        if (i === slideNum) {
            dots[i].style.backgroundColor = "#3a4046";
        } else {
            dots[i].style.backgroundColor = "#afafaf";
        }
    }
}

// nxtpage 버튼 클릭 시 (for 루프 사용)
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        goToSlide(i);
    });
}

// 초기화
goToSlide(0);


//----------------------------------------------------------------

// 3. 주문목록 + 클릭 시, 재고수량까지 수량+금액 표시 (수량이 30이라면 경고창 출력)
// 4. 주문목록 - 클릭 시, 주문수량+주문금액 감소(수량이 1이라면 경고창 출력)
const plusBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')
const orderNum = document.querySelector('#order_num')
const orderListPrice = document.querySelector('.order_price .price1 em') // em을 직접 선택
const orderPrice = document.querySelector('.order_price .price2')

let num = 1; // 초기주문수량
orderNum.value = num;

plusBtn.addEventListener('click', () => {
    if (num < productOptDB[0].stock) {
        num++;
        updateOrder();
    } else {
        alert('최대 주문수량은 30개 입니다.');
    }
});

minusBtn.addEventListener('click', () => {
    if (num > 1) {
        num--;
        updateOrder();
    } else {
        alert('최소 주문수량은 1개 입니다.');
    }
});

function updateOrder() {
    let total = num * productOptDB[0].price;
    orderNum.value = num;
    orderListPrice.textContent = total.toLocaleString('ko-KR') + '원'; // 가격 갱신
    orderPrice.textContent = `(${num}개)`; // 개수 갱신
}

//----------------------------------------------------------------

// 5. 😄(상품 선택 시) '장바구니' 클릭 시 장바구니 페이지로 이동
// 6. 😄(상품 선택 시) '구매하기' 클릭 시 로그인 유무에 따라 다른 페이지로 이동
// 7. 😄(선물 선택 시) '선물구매' 클릭 시 로그인 유무에 따라 다른 페이지로 이동
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
const giftBtn = document.querySelector('#gift_btn')
console.log(cartBtn, buyBtn, giftBtn)

cartBtn.addEventListener('click',()=>{
    cartBuyFunc('./cart.html')
})
buyBtn.addEventListener('click',()=>{
    cartBuyFunc('./buy.html')
})
giftBtn.addEventListener('click',()=>{
    cartBuyFunc('./gift.html')
})

function cartBuyFunc(url){
    // 장바구니 페이지 이동 (로그인 유/무에 따라)
    const loginStatus = localStorage.getItem('isLogin');
    if (loginStatus === 'true') {
        location.href = url; // 로그인 상태 → 해당 url (장바구니/구매 페이지)
    }else {
        location.href = './login.html';  // 로그인 안 되어 있으면 로그인 페이지로 이동
    }
}

//----------------------------------------------------------------

// 8. 큰이미지를 드래그하면서 넘기면 이미지가 넘어가게 하기
const allContainer = document.querySelector('.overview')
const bnrlContainer = allContainer.querySelector('.thumnails')
const thumnail = bnrlContainer.querySelectorAll('.thumnail')
const thumnailW = thumnail[0].offsetWidth;
let isDrag = false; //상태 변경 초기값
let startX = 0; //마우스 위치 계산 변수
let startScrollLeft = 0;  //수평 스크롤 크기 계산 변수

allContainer.addEventListener('mousedown', (e)=>{
    isDrag = true; //드래그 시작(마우스 누를 때) 상태 변경
    startX = e.pageX - allContainer.offsetLeft; //부모에서 마우스의 상대적인 좌표 저장
    startScrollLeft = allContainer.scrollLeft; //수평 스크롤 위치 저장
})
allContainer.addEventListener('mouseup', ()=>{
    isDrag = false; //드래그 종료 시(마우스 뗐을 때) 상태 변경
})
allContainer.addEventListener('mousemove', (e)=>{
    if(!isDrag) return; //드래그 상태가 거짓이면 함수 종료 | 거짓이 되면, 강제종료(return)
    console.log('실행확인')
    const x = e.pageX; //mousemove 이벤트 진행 시 마우스 좌표 변수
    const walk = x - startX; //마우스 시작지점에서 드래그로 얼마나 이동했는지
    allContainer.scrollLeft = startScrollLeft - walk;
})




/*     // 점 색상 업데이트
    dots.forEach((d, i) => d.style.backgroundColor = i === index ? '#3a4046' : '#afafaf');
    dots.forEach((dot, i) => {
    dot.addEventListener('click', () => slideTo(i));
}); */





























/* window.onload = function() {
    const bnr = document.querySelector(".overview .bnr");
    const dots = document.querySelectorAll(".nxtpage_link svg");
    const cardWidth = 640;
    let dragging = false, startX = 0, startXPos = 0, currentSlide = 0;

    // 슬라이드 이동 함수
    function changeSlide(slideNum) {
        bnr.style.transform = `translateX(${-cardWidth * slideNum}px)`;
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.backgroundColor = i === slideNum ? "#3a4046" : "#afafaf";
        }
        currentSlide = slideNum;
    }

    // 드래그 시작
    function startDrag(x) {
        dragging = true;
        startX = x;
        // 현재 transform 값 가져오기
        let transformValue = bnr.style.transform || "translateX(0px)";
        startXPos = parseFloat(transformValue.replace("translateX(", "").replace("px)", ""));
    }

    // 드래그 중
    function moveDrag(x) {
        if (!dragging) return;
        bnr.style.transform = `translateX(${startXPos + (x - startX)}px)`;
    }

    // 드래그 끝
    function endDrag(x) {
        if (!dragging) return;
        let diff = x - startX;
        if (diff < -50 && currentSlide < dots.length - 1) currentSlide++;
        else if (diff > 50 && currentSlide > 0) currentSlide--;
        changeSlide(currentSlide);
        dragging = false;
    }

    // 마우스 / 터치 이벤트
    const container = bnr.parentElement;
    container.addEventListener("mousedown", e => startDrag(e.pageX));
    container.addEventListener("touchstart", e => startDrag(e.touches[0].clientX));
    container.addEventListener("mousemove", e => moveDrag(e.pageX));
    container.addEventListener("touchmove", e => moveDrag(e.touches[0].clientX));
    container.addEventListener("mouseup", e => endDrag(e.pageX));
    container.addEventListener("mouseleave", e => endDrag(e.pageX));
    container.addEventListener("touchend", e => endDrag(e.changedTouches[0].clientX));

    // 점 클릭 이벤트
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function() {
            changeSlide(i);
        });
    }

    // 초기화
    changeSlide(0);
} */
>>>>>>> 90dd79d (파일 최종 업데이트)
