// let smallImg=document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImg.length;i++){
//     console.dir(smallImg[i].src);
// }


//i just want to change the color property for all anchor tag inside box class
let links=document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="green";
// }

for(let link of links){
    link.style.color="purple";
}