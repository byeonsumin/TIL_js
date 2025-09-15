// dom.js
const instaMenu = document.querySelectorAll('.menu .left a')

// 1. 이미지 선택
console.log(instaMenu);

instaMenu[0].addEventListener('click', function(e){
    e.preventDefault()
    iconChange(this, 'like')
})

instaMenu[1].addEventListener('click', function(){iconChange(this, 'comment')})
instaMenu[2].addEventListener('click', function(){iconChange(this, 'paper')})
function iconChange(taget, name){
    return taget.children[0].src = `./images/${name}_on.png`
}

/* instaMenu[0].addEventListener('click', iconChange(0, 'like'))
instaMenu[1].addEventListener('click', iconChange(1, 'comment'))
instaMenu[2].addEventListener('click', iconChange(2, 'paper'))
function iconChange(index, name){
    return function(e){
        e.preventDefault()
        instaMenu[index].children[0].src = `./images/${name}_on.png`
    }
} */

//2. 클릭 이벤트 추가
/* instaMenu[0].addEventListener('click', function(e){
    e.preventDefault()
    console.log(this) //this = a | instaMenu[0]과 같다.
    this.children[0].src = './images/like_on.png'
})
instaMenu[1].addEventListener('click', (e)=>{
    e.preventDefault()
    instaMenu[1].children[0].src = './images/comment_on.png'
}) */


// 사진 클릭 시, 스피커 모양 보이기(+애니메이션)
const instaPhoto = document.querySelector('main > .photo');
const volumnIcon = document.querySelector('#popup');
console.log(instaPhoto, volumnIcon)

volumnIcon.style.transition = 'opacity 1s'

    instaPhoto.addEventListener('dblclick', ()=>{ /* dblclick : 더블클릭 */
    volumnIcon.style.opacity = 1;
})
    instaPhoto.addEventListener('mouseout', ()=>{
    volumnIcon.style.opacity = 0;
})

