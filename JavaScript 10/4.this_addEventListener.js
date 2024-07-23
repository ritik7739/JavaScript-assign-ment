let h1=document.querySelector('h1');
let h3=document.querySelector('h3');
let p=document.querySelector('p');
let btn=document.querySelector('button');

//so lengthy try something easier one

// h1.addEventListener('click',function(){
//     console.log(this.innerHTML);
//     this.style.backgroundColor="red";
// });

// h3.addEventListener('click',function(){
//     console.log(this.innerHTML);
//     this.style.backgroundColor="yellow";
// });

// p.addEventListener('click',function(){
//     console.log(this.innerHTML);
//     this.style.backgroundColor="green";
// });

// btn.addEventListener('click',function(){
//     console.log(this.innerHTML);
//     this.style.backgroundColor="blue";
// });

function changeColor(){
    console.log(this.innerHTML);
    this.style.backgroundColor="blue";
}

h1.addEventListener('click',changeColor);
h3.addEventListener('click',changeColor);
p.addEventListener('click',changeColor);
btn.addEventListener('click',changeColor);