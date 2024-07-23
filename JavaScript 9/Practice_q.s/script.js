let p=document.createElement("p");
p.innerHTML="Hey I'm red!";
p.classList.add('red');
let body=document.querySelector('body');
body.appendChild(p);

let h3=document.createElement('h3');
h3.innerHTML="I'm a blue h3!";
h3.classList.add('blue');
body.appendChild(h3);


let div=document.createElement('div');
body.appendChild(div);
div.classList.add('div');
let h1=document.createElement('h1');
h1.innerHTML="I'm in div";
div.appendChild(h1);
let para=document.createElement('p');
para.innerHTML="ME TOO !";
div.appendChild(para);