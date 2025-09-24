// 중첩 for
// ul*2>li*5
// <ul></ul> <li></li> (X)
// <ul></ul><li></li> (O)
let ul = '';
let li = '';
for(let i=0; i<2; i++){
    //ul = '<ul>'
    li = '';
    for(let j=0; j<5; j++){
        li += `<li>menu${j+1}</li>`
    }
    ul += `<ul>${li}</ul>`
}
console.log(ul)