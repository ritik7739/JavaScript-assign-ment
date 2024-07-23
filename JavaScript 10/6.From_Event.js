let form=document.querySelector("form");

form.addEventListener("submit",function(event){
      event.preventDefault();           //prevent the default form behaviour to perform action
      alert("form submitted");
});
