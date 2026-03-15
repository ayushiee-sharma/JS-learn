// let letter=document.querySelector("#letter")
// document.addEventListener("keydown",function(dats){
//         letter.innerHTML=`${dats.key}`;
// })

// let input=document.querySelector("input")
// let btn=document.querySelector("#btn")

// btn.addEventListener("click",function(){
//        input.click();
// })
// input.addEventListener("change",function(det){
//         if(det.target.value){
//        btn.innerHTML=det.target.value;
//         }
// })

// let cards = document.querySelector(".cards");
// let form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // creating card
//   let card = document.createElement("div");
//   let prof = document.createElement("div");
//   let named = document.createElement("div");
//   let age = document.createElement("div");
//   let about = document.createElement("div");

//   card.style.cssText =
//     "background-color:rgb(31, 29, 29); height: 300px;width: 350px; border: 3px;margin-left: 20px;border-radius: 40px; margin-top: 20px;border: 1px rgb(110, 105, 105) solid;";
//   prof.style.cssText = "height:20% ; width:100%;";
//   named.style.cssText = "height:20% ; width:100%;";
//   age.style.cssText = "height:20% ; width:100%;";
//   about.style.cssText = "height:20% ; width:100%;";

//   card.append(prof, named, age, about);

//   // getting valuess
//   let prof2 = document.querySelector("#pic");
//   let named2 = document.querySelector("#name");
//   let age2 = document.querySelector("#age");
//   let about2 = document.querySelector("#about");
//   let submit = document.querySelector("#submit");

// named.innerHTML=named2.value;
// prof.innerHTML = prof2.value;
// age.innerHTML = age2.value;
// about.innerHTML = about2.value;




//   cards.append(card);
// });



let inp = document.querySelector("input");

inp.addEventListener('input', (e)=>{
  console.log(e);
})