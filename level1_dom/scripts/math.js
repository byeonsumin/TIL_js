console.log(Math);
console.log(Math.PI);
// Math.floor, round, ramdom
let num1 = Math.floor(3.7)
console.log(num1) //3
num1 = Math.floor(3.2) //소수점 버리고 정수 출력
console.log(num1) //3
console.log('-------------------')
let num2 = Math.round(3.7)
console.log(num2) //4
num2 = Math.round(3.2) //소수점 자리수에 따라 반올림
console.log(num2) //3
console.log('-------------------')
let num3 = Math.random()
console.log(num3)
num3 = Math.random() * 5 // 0 ~ 5 사이에 값 출력하기
console.log(num3)
num3 = Math.floor(Math.random() * 10) + 1; // 0과 10사이의 정수
console.log(num3)
console.log('-------------------')
// 10% 20%, 30%, 40%, 50% 랜덤출력
const couponDB = ['10%', '20%', '30%', '40%', '50%']
const couponBtn = document.querySelector('#coupon')


//버튼 클릭 시 쿠폰 5개 중 1개가 랜덤하게 alert() 출력메세지 실행
couponBtn.addEventListener('click', ()=>{
    let randomNum = Math.floor(Math.random() * 5)
    alert(couponDB[randomNum])
})


//화면에 접속했을때 광고 2개가 랜덤 표시
const adDB = [{
    name:'제주도 여행', //alt
    src: 'https://i.pinimg.com/1200x/4b/27/8f/4b278f15676e06d21868f6fa3056be26.jpg',
    link:'https://naver.com',
},{
    name:'일본 여행',
    src: 'https://i.pinimg.com/1200x/d2/24/16/d224166e4200533f6ea755a7278e4855.jpg',
    link:'https://google.com',
}]
window.addEventListener('load', ()=>{
    const adSection = document.querySelector('.ad')
    const adRandom = Math.floor(Math.random() * 2)
    adSection.children[0].href = adDB[adRandom].link
    adSection.children[0].children[0].src = adDB[adRandom].src
    adSection.children[0].children[0].alt = adDB[adRandom].alt
})

// 더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원 수에 따라 계산결과 출력하기
// 금액이 소수점일 경우 소수점 값에 따라 반올림하기
const priceInput = document.querySelector('#price')
const personInput = document.querySelector('#person')
const totalBtn = document.querySelector('#total_btn')
const calcResult = document.querySelector('.calc .result')

totalBtn.addEventListener('click',()=>{
    const num = priceInput.value / personInput.value
    const price = Math.round(num)
    calcResult.children[0].textContent = price.toLocaleString('ko-kr')
})

// DB
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:1000,
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:2000,
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000,
}]

//변수
const minPriceBtn = document.querySelector('#min_price_btn')
const maxPriceP = document.querySelector('.min_price')
const listDl = document.querySelector('#list')

//최고가 입력
window.addEventListener('load',()=>{
    const shopSort = [...shopDB].sort((a, b) => b.price - a.price)
    console.log(shopSort)
    for(let i of shopSort){
        const dt = document.createElement('dt'); //<dt></dt>
        dt.textContent = i.shop;
        listDl.appendChild(dt)
        const dd = document.createElement('dd') //<dd></dd>
        dd.textContent = i.id;
        listDl.appendChild(dd)
    }
})

const pp = [1000,2000,3000,4000] //test
//클릭 이벤트
minPriceBtn.addEventListener('click', ()=>{
    // 1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
    const priceMap = shopDB.map( i => i.price )
    console.log(priceMap);
    
    // 2. 추출한 가격에서 최저가 찾기
    console.log('최저가 : ', Math.min(...priceMap))

    const minPrice = Math.min(...priceMap)
    maxPriceP.textContent = `최저가 : ${minPrice}`

    //스프레드연산자 (...배열명) 여러 배열값을 한번에 처리하는 배열처리법
    console.log(Math.min(...pp)) //최저가
    console.log(Math.max(...pp)) //최고가
})

console.log('-------------------')
const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500,
},{
    shop:'이마트몰',
    name:'고구마',
    price:2900,
    delivery:0,
},{
    shop:'네이버',
    name:'고구마',
    price:4000,
    delivery:1000,
}]

//변수
const priceBtn = document.querySelector('#price_btn')
const deliveryBtn = document.querySelector('#delivery_btn')
const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const shopListUl = document.querySelector('#shop_list')

//최저가찾기 버튼 클릭 시 최저가 표시
priceBtn.addEventListener('click', ()=>{
    //최저가 JS
    const min = shopDB2.map( i => i.price );
    result1.textContent = '최저가 :'+Math.min(...min) +'원';

    //최저가 -> 최고가 오름차순 정렬하기 JS
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price)
    console.log(sort)

    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    //for~in, for~of, for~Each
    for(let i of sort){
        const li = document.createElement('li') //<li></li>
        //li.textContent = i.shop
        li.innerHTML = `<a href="#">${i.shop}</a>`
        li.innerHTML += `<span>${i.price}원</span>`
        li.innerHTML += `<em>배송비 :${i.delivery}원</em>`
        console.log(li, i.shop)
        shopListUl.appendChild(li)
        //createElement로 생성한 JS태그는 appendChild 함수로 대입한다.
    }
})

//배송비무료 버튼 클릭 시 배송비가격 표시
deliveryBtn.addEventListener('click',()=>{
    const deli = shopDB2.map( i => i.delivery );
    result2.textContent = '배송비 :'+Math.min(...deli) +'원';
})
