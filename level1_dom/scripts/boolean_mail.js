//boolean_mail.js
//console.log(isLogin)
window.addEventListener('load', ()=>{
    let loginStatus = localStorage.getItem('isLogin2') //true
    console.log(loginStatus == 'true') //true는 값으로 1, false는 0
    //console.log(typeof(loginStatus))

    //DOM 변수
    const mailLogin = document.querySelector('#login') 
    const mailLogout = document.querySelector('#logout') 

    if(loginStatus == 'true'){
        console.log('로그인 화면')
        mailLogin.style.display = 'block' //디자인을 어떻게 세팅했는지에 따라서 다름 (flex, block, grid 등 원래 디자인 값 넣기)
        mailLogout.style.display = 'none'
    }else{
        console.log('로그아웃 화면')
    }
})