// class CreatePencil{
//    constructor(name,price,company,color){
//        this.name=name;
//        this.color=color;
//        this.price=price;
//        this.company=company;
//    }
//    write(elem){
//     let h1=document.createElement("h1")
//     h1.textContent=elem;
//     h1.style.color=this.color;
//     document.body.append(h1);
//    }
//    erase(){
//     document.querySelectorAll("h1").forEach((elem)=>{
//             elem.remove();
//     })
//    }

// }
//  let p1=new CreatePencil("nataraj",20,"natraj","black")


// extends

// class User{
//     constructor(name,age,city){
//         this.name=name;
//         this.age=age;
//         this.city=city;
//     }
//     write(elem){
//         let h1=document.createElement("h1");
//         h1.textContent=elem;
//         document.body.append(h1)
//     }
// }
// let u1=new User("ayushi",21,"blp")

// class Admin extends User{
//      constructor(name,age,city,exp){
//         super(name,age,city)
//         this.exp=exp;
//      }
//      erase(){
//        document.querySelectorAll("h1").forEach((elem)=>
//         elem.remove()
//     )}
//     }

// let a1= new Admin("ayushi",20,"hmp",3)