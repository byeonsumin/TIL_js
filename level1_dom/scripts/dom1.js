const inputTag = document.querySelectorAll('input')
const buttonTag = document.querySelectorAll('button')
console.log(inputTag, buttonTag)
console.log(inputTag[0], buttonTag[0])
console.log(inputTag[1], buttonTag[1])
console.log(inputTag.length, buttonTag.length)

const searchInput = document.querySelector('input[type=search]')
const searchBtn = document.querySelector('#search_btn')
const shopNumInput = document.querySelector('input#num')
const shopCartBtn = document.querySelector('#cart_btn')
console.log(searchInput, searchBtn, shopNumInput, shopCartBtn) //querySelectorAll이 아니므로 [인덱스] 사용금지
/* const searchInput = document.querySelector('section:first-child input')
const searchInput = document.querySelector('#s')
const searchInput = document.querySelector('input [name*=s]') */
/* 태그 속성★, 함수 테스트 */
console.log(searchInput.type, searchInput.placeholder) //속성 읽기
console.log() //속성을 변경하려면 콘솔 안 ? 밖 ?
//searchInput.placeholder() //함수일때 () 
searchInput.placeholder = "" //속성일때 | placeholder를 빈 값("")으로 만든다.
let checkValue = ''; //빈 값 초기화
searchInput.value = '인기검색어 : HTML'; //value 값 변경
checkValue = searchInput.value; //변경값 변수 담기
console.log(checkValue) //출력 확인

console.log(shopNumInput.type)
console.log(shopNumInput.name)
console.log(shopNumInput.value+1) //문자 + 숫자 = 문자
console.log(typeof(shopNumInput.value)) //string

checkValue = Number(shopNumInput.value)+1;
console.log(`주문수량 : ${checkValue}`)

shopNumInput.style.backgroundColor = '#eee'
shopNumInput.style.width = '50px'
shopNumInput.style.textAlign = 'center'
searchInput.style.backgroundColor = '#000'
searchInput.style.color = '#fff'
searchBtn.style.width = '100px'
searchBtn.style.lineHeight = '25px'
searchBtn.style.borderRadius = '20px'
searchBtn.style.backgroundColor = 'darkgreen'
searchBtn.style.color = '#fff'
shopCartBtn.style.width = '100px'
shopCartBtn.style.lineHeight = '25px'
shopCartBtn.style.borderRadius = '20px'
shopCartBtn.style.backgroundColor = 'hotpink'
shopCartBtn.style.color = '#fff'

console.log('----------------------------')

//이벤트 활용 콜백함수 호출
//이벤트 문법
//객체.addEventListener('이벤트 종류', 콜백함수)
const orderBtn = document.querySelector('#order')
console.log(orderBtn); // 잘뜨나 확인

//주문 버튼 클릭 시 '상품을 선택하세요' 경고창 출력
//이벤트 종류 작성 뒤, 함수 작성방식 : 콜백함수호출(추천!!) -> 반복해서 부를 수 있어서 더 잘 쓰인다. , 익명함수 function(){}
/* orderBtn.addEventListener('click', function(){ -----익명함수
    alert('상품을 선택하세요')
}) */
orderBtn.addEventListener('click', orderFunc_v2('상품')) // -----콜백함수호출
// 1번 -> 이벤트 뒤 콜백함수는 함수 그 자체를 호출하는 개념으로, 결과값만 받고 수정값은 따로 전달하지 않는다.
// 2번 -> 매개변수의 수정이 필요한 콜백함수는, 이벤트 뒤 '익명함수' 또는 '화살표함수' 추가 제작으로 수정 가능한 함수로 재작성하는게 일반적인 방법이다.
/* orderBtn.addEventListener('click', function(){ // -----1번
    orderFunc('장바구니에 ')
}) */
/* orderBtn.addEventListener('click', ()=>{ // -----2번
    orderFunc('장바구니에 ')
}) */
/* function orderFunc(data){
    return alert(data+'담으세요')
} */
function orderFunc_v2(data){ //외부함수
    return function(){ //내부함수 +  /* 클로저(Closure - 함수 안에서 함수를 처리한다) */
        /* 내부 함수는 외부 함수의 매개변수를 기억하기 때문에 괄호를 또 안채워도 된다. */
        alert(data+'담으세요')
    }
}
// 주문하기 클릭 시 '장바구니에 담으세요'
// 장바구니 클릭 시 '상품을 담으세요'
// 콜백함수 1개만 활용, 각각 DOM 이벤트 클릭 시 다른 메세지 출력하기
//--------------------------------------------------------

//아이디, 비밀번호 중복확인 버튼 클릭 시,
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.
//1. 제어 DOM 대상 변수 등록
const idOverlapBtn = document.querySelector('#id')
const pwOverlapBtn = document.querySelector('#pw')
console.log(idOverlapBtn, pwOverlapBtn) // 잘뜨나 확인
//2. "클릭 시" 이벤트 콜백함수 제작
idOverlapBtn.addEventListener('click', ()=>{overlapFunc('아이디')})
pwOverlapBtn.addEventListener('click', overlapFunc_v2('비밀번호'))
//3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수를 1개만 제작
function overlapFunc(msg){
    return alert(msg+'가 중복되었습니다.')
}

function overlapFunc_v2(msg){
    return function(){
        alert(msg+'가 중복되었습니다.')
    }
}
//3-1. 콜백함수 내에 함수호출 시, 다른 내용이 있으면 매개변수로 추가 제작
//4. 3번 콜백함수를 2번 이벤트에서 호출

//이벤트 콜백함수 연습
// Q1. textarea 값을 아무거나 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력
// Q2. textarea를 활성화 했을 때, 테두리가 빨강색
// Q2. textarea를 비활성화 했을 때, 테두리가 회색
const reviewText = document.querySelector('textarea#review')
console.log(reviewText) // 잘뜨나 확인
reviewText.addEventListener('keydown', lengthFunc)
reviewText.addEventListener('focus', ()=>{borderFunc('#f00')})
reviewText.addEventListener('blur', ()=>{borderFunc('#aaa')})
function lengthFunc(){return console.log('50자 이상 입력하세요')}
function borderFunc(color){
    return reviewText.style.border = `1px solid ${color}`
}
borderFunc('#aaa') //초기값
reviewText.style.outline = 'none' /* 활성화 시 검은색 테두리 제거 */
//reviewText.style.border = '1px solid #aaa' //초기값

//배경버튼에 마우스 올리면 부모 article 배경색 변경하기
const articleTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('button[class*=bg]') //2개 이상일 때는 인덱스로 추적
const bgP = articleTag.querySelector('p') //body(document)가 아니라 가까운 부모(articleTag)의 p로 잡는다는 뜻
console.log(bgBtn, bgP)
//bgP.textContent = '현재<br>배경색상 : #eee'
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
//bgBtn.addEventListener('mouseover',콜백함수) (X)
bgBtn[0].addEventListener('mouseover',bgChangeFunc('#ffc'))
bgBtn[1].addEventListener('mouseover',bgChangeFunc('#0cf'))
bgBtn[2].addEventListener('mouseover',bgChangeFunc('#f0e'))
function bgChangeFunc(color){
    return function(){
        articleTag.style.backgroundColor = color;
        bgP.textContent = `현재 배경색상 : ${color}`
    }
}


