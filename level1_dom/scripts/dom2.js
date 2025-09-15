// dom2.js
// 1. 변수 section*2, a*2, btn*2(동적대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section') //document는 body
const linkCls = document.querySelectorAll('section .link') //section안에 link
const btnCls = document.querySelectorAll('section .btn')
console.log(linkCls, linkCls[1], linkCls.length, sectionTag, sectionTag[0], sectionTag.length, btnCls, btnCls[0], btnCls.length)

// 2. 이벤트와 함수, 속성
//초기값(즉시실행)
sectionTag[0].style.backgroundColor = "#ff0"
sectionTag[1].style.backgroundColor = "#0cf"


//이벤트, 콜백함수 추가 생성
//a2 클릭 시 section[1] 배경색 변경
//a태그에 클릭, 터치 이벤트 적용 시 href 속성 때문에, 스크롤이 위로 올라가는 문제 발생 -> a의 기본 속성기능 해제 preventDefault() 기능 사용하기
/* linkCls[1].addEventListener('click', bgFunc) //click 했을 때, bgFunc을 부른다
function bgFunc(e){ //bgFunc에 대한 함수 만들기
    console.log(e);
    e.preventDefault(); //링크의 기본 기능을 막는다.
    return sectionTag[1].style.backgroundColor = '#0ff'
} */
/* linkCls[1].addEventListener('click', function(e){ //function() = 익명함수
    console.log(e)
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#0ff'
}) */
linkCls[1].addEventListener('click', (e)=>{ //()=> : function이라는 키워드 없이, 압축된 버전
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#0ff'
}) 
linkCls[0].addEventListener('click', (e)=>{
    e.preventDefault();
    sectionTag[0].style.backgroundColor = '#f8d'
})

//a, button(type=button)
//button 이용 JS 진행 시, 특정 페이지 이동이 필요할 때, location.href를 사용한다, ((예)로그인 성공 시, 메인페이지로 이동)
//JS 상대경로 작성은 html 위치 기준으로 작성한다.
/* btnCls[0].addEventListener('click', ()=>{
    window.location.href = './dom1.html' // ../이 아닌, ./을 한 이유는, html 위치에서 적용되기 때문에
})
btnCls[1].addEventListener('click', function(e){
    console.log(e)
    window.location.href = '../sass_study/project2/index.html' // ../이 아닌, ./을 한 이유는, html 위치에서 적용되기 때문에
}) */
btnCls[0].addEventListener('click',sassProjectFunc('project1')) //project1번의 index를 보고싶어
btnCls[1].addEventListener('click',sassProjectFunc('project2')) //project2번의 index를 보고싶어
function sassProjectFunc(src){
    return function(){ //함수안에 함수 = 클로저
        location.href = `../sass_study/${src}/index.html`
    }
}

//쇼핑몰 수량 변수
const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceCls = document.querySelector('#numFrm .price em')
let count = 1; //수량 초기값 변수 | 변경되어야 하니까 let
let price = 12900;
console.log(inputNum, plusBtn, minusBtn)
// 수량이 1로 시작해서(초기값) + 클릭하면 수량 증가, - 클릭하면 수량 감소
// 1개당 가격 12900원
// 초기값 선언
inputNum.value = count;
priceCls.textContent = price.toLocaleString('ko-kr'); //em은 읽기만 할 수 있는 태그라, textContent를 적어야함
// 이벤트, 함수
// + 클릭하면 수량 증가
plusBtn.addEventListener('click', plusFunc)
minusBtn.addEventListener('click', minusFunc)

function plusFunc(){
    console.log(typeof(inputNum.value), typeof(count))
    //return inputNum.value = Number(inputNum.value) + count // '=' 대입연산자 때문에 오른쪽에 Number로 변환해서 숫자로 만듬, 그래서 왼쪽 inputNum.value의 값도 대입연산자 속성 때문에 숫자로 변환됨
    //1 증감연산자 ++ --
    inputNum.value = ++count; //count값에 1증가시켜서 inputNum.value에 대입한다
    let totalPrice = price * count
    return priceCls.textContent =  totalPrice.toLocaleString('ko-kr') // 앞에서 ++count가 증가했을 때, price * count(totalPrice)의 값을 나타낸다
    //return priceCls.textContent =  (price * count).toLocaleString('ko-kr') // 앞에서 ++count가 증가했을 때, price * count(totalPrice)의 값을 나타낸다
}
function minusFunc(){
    return inputNum.value = --count;
}
