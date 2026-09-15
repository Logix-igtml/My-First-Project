

//   function generatePassword(length,includelowerchars,includeCapitalchars,includenums){
//      const Capitalchars = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
//     const lowerchars = "abcdefghijklmnopqrstvuwxyz";
//     const numberChars = "01234567890";
//     let Password = '';
//     let allowedChars = '';
   
//     allowedChars+= includelowerchars ? lowerchars : "";
//     allowedChars+= includeCapitalchars ? Capitalchars : "";
//     allowedChars+= includenums ? numberChars : "";
//     console.log(allowedChars)
//      if (length<=0){
//             return `(Password length must be greater than 0)`
//         }else if(allowedChars.length<=0){
//           return `(At least one set of charcater needs to be selected)`
//         }
//     for(let i = 0;i < length;i++){
//         const randomnum = Math.floor(Math.random()*allowedChars.length);
//        Password +=allowedChars[randomnum];
//           console.log(randomnum)
       
//     }
//       return Password;  
//   }
//   const Passwordlenght = 5;
//   const includelowerchars = true;
//   const includeCapitalchars = true;
//   const includenums = true;
//  const password = generatePassword(Passwordlenght,includelowerchars,includeCapitalchars,includenums);
//       console.log(`Your generated password is ${password}`);
 
  // if(display === "none" ? true :false){
  //   navBar.style.display = "flex";
  // }
  // else if(display === "flex" ? true :false){
  //   navBar.style.display = "none";
  // }
  // function resiz (){
  //   let gg = '';
  //   let hh = '';


  let is0pen = false;
let harmburgerclosed =document.querySelector('.harmburgerclosed');
let harmburgeropen = document.querySelector('.harmburgeropen');
let navcontainer = document.querySelector('.nav-container5');
let navcontainer2 = document.querySelector('.nav-container2');
let links = document.querySelectorAll('.nav');
let navBar = document.querySelector(".nav-container");
  let navButton =document.querySelector(".button-harmburger");
  // if(window.innerWidth>=768){
  //   navcontainer2.style.display
  // }
 
try{
links.forEach((li)=>{
  li.addEventListener('click',()=>{ 
        sessionStorage.setItem('clicked',li.getAttribute('href'));
    })})}
    catch(error){
      console.log(error)
    }
let  menuState =  sessionStorage.getItem('harmburger');
 if (window.innerWidth<=768 &&  navcontainer2.classList.contains('nav-container2')){
  if(menuState === 'true'){
     navcontainer2.classList.remove('nav-container2');
     navcontainer2.classList.add('revive');
  }
  }
console.log(menuState);
if (menuState === 'true'){
  is0pen=true;
   navcontainer.classList.add('active');
   navcontainer2.style.display = 'flex';
    harmburgerclosed.style.display = 'flex'
    harmburgeropen.style.display = "none";
}
function showMenu (){
  
  is0pen = !is0pen;
        navcontainer2.classList.replace('nav-container2','revive')
  harmburgerclosed.style.display = is0pen?'flex':'none';
  harmburgeropen.style.display = is0pen? 'none' :"block";
  navcontainer2.style.display = is0pen?"flex" :"none";
  navcontainer.classList.toggle('active');
  console.log(navcontainer);
 
sessionStorage.setItem('harmburger',navcontainer.classList.contains('active'));
}

 let CurrentWindow= sessionStorage.getItem('clicked');
document.querySelector(`a[href = "${CurrentWindow}"]`).style.color = "red";
 