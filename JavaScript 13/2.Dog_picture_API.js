let url="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
btn.addEventListener('click',async()=>{
    let link=await getRandomDogImg();
    let img=document.querySelector('img');
    img.setAttribute("src",link);
    console.log(link);
})
async function getRandomDogImg(){
    try{
        let pic=await axios.get(url);
        return pic.data.message;
    }
   catch(err){
    console.log("ERROR - ",err);
    return "/"
   }
}