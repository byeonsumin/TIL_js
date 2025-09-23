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
