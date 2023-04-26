/* main.js */

/* 주메뉴 */
window.addEventListener('load', ()=> {


const gnbMenu = document.querySelectorAll("nav.gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");


for(let i=0;i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener("mouseover", e=>{
    e.currentTarget.classList.add("on") 
    
  })

  gnbMenu[i].addEventListener("mouseout", e=>{
    e.currentTarget.classList.remove("on");

  })
}

const body = document.querySelector('body');
const header = document.querySelector('#header');
const btnMenu = document.querySelector('.btnMenu');
const topMenu = document.querySelector('.topMenu');
const logo = document.querySelector('.topMenu>h1.logo');
const scrollTop = document.querySelector(".scrollTop");
const scrolldown = document.querySelector(".scrolldown");


btnMenu.addEventListener('click', e =>{
  e.preventDefault();
  btnMenu.classList.toggle('open');
  topMenu.classList.toggle('on');
  logo.classList.toggle('on');
  header.classList.toggle('on');
  body.classList.toggle('on');
})
 
  // 다시해야됨

/* 시간가면 넘어가는거 */


/* list li on 글자 색깔이랑 왜 안바뀌지 해결 */

const con1lis = document.querySelectorAll(".list>ul>li")

for(let i=0;i<con1lis.length;i++){
  con1lis[i].addEventListener("mouseover",()=>{
    con1lis[i].classList.add("on")
  })
  con1lis[i].addEventListener("mouseout",()=>{
    con1lis[i].classList.remove("on")
  })
}

/* 오토배너 */


/* 스크롤 이동 */

// let sections = document.querySelectorAll(".section");
// console.log(sections);

// let devHeight;
// devHeight = window.innerHeight;
// console.log(devHeight);

// window.addEventListener("resize",()=>{
//   devHeight = window.innerHeight;
//   console.log(devHeight);
// });

// for(let i=0;i<sections.length;i++){
//   sections[i].style.height = `${devHeight}px`;
// }

// let scrbtn = document.querySelectorAll(".scroll>ul>li");
// let scrbtna = document.querySelectorAll(".scroll>ul>li>a");
// console.log(scrbtn)

// for(let k=0;k<scrbtn.length;k++){
//   scrbtn[k].addEventListener("click",e=>{
//     e.preventDefault();
//     window.scroll({
//       top: k * devHeight,
//       left: 0,
//       behavior: 'smooth'
//     });
  
//   scrbtn[k].addEventListener("mouseover", e=> {
//     scrbtn[k].classList.add("on")
//   });
//   scrbtn[k].addEventListener("mouseout", e=> {
//     scrbtn[k].classList.remove("on")
//   });
// });
// };

// for(let i=0;i<sections.length;i++){
//   sections[i].addEventListener('wheel', function(e){
//     if(e.deltaY < 0){
//       let prev = e.currentTarget.previousElementSibling.offsetTop;
//       window.scroll({
//         top : prev,
//         left : 0,
//         behavior : "smooth"
//       })
//       for(let i=0;i<sections.length;i++){
//         if(prev>=i*devHeight && prev<(i+1)*devHeight){
//           activation(i,scrbtn);
//         }
//       }
      
//     }else if(e.deltaY > 0){
//       let next = e.currentTarget.nextElementSibling.offsetTop;
//       window.scroll({
//         top : next,
//         left: 0,
//         behavior: "smooth"
//       })
//       for(let i=0;i<sections.length;i++){
//         if(next>=i*devHeight && next<(i+1)*devHeight){
//           activation(i,scrbtn);
//         }
//       }
//     }
//   });
// }

// let activation =(index,list)=>{
//   for(let el of list){
//     el.classList.remove("on");
//   }
//   list[index].classList.add("on");
// }
// console.log(devHeight);


const banner = document.querySelector(".roll_banner");
console.log(banner);
const bnnlis = document.querySelectorAll(".roll_banner>li")

const nextBtn = document.querySelector(".button>a:last-child")
console.log(nextBtn);
const prevBtn = document.querySelector(".button>a:first-child")
const stopBtn = document.querySelector(".button>a:nth-child(2)")


nextBtn.addEventListener("click",e=>{
  e.preventDefault();
  let lastIndex = banner.children.length-1;
  let lastList = banner.children[lastIndex].cloneNode(true)
  banner.removeChild(banner.children[lastIndex]);
  banner.insertBefore(lastList,banner.children[0])
})

prevBtn.addEventListener("click",e=>{
  e.preventDefault();
  let firstlist = banner.children[0].cloneNode(true);
  banner.removeChild(banner.children[0]);
  banner.appendChild(firstlist);
})

let addNum = 0;
let lastNum = document.querySelectorAll(".roll_banner>li").length-1;
let autoBanner = () =>{
  addNum++;
  if(addNum>lastNum) addNum=0;
  autoBnn = setTimeout(autoBanner,1500);  
}
let autoBnn = setTimeout(autoBanner,1500);

let flag=true;
stopBtn.addEventListener("click",e=>{
  e.preventDefault();
  if(flag){
    stopBtn.classList.add("pause")
    clearTimeout(autoBnn);
    flag=false;
  }else{
    stopBtn.classList.remove("pause")
    autoBnn = setTimeout(autoBanner,1500);
    flag=true;
  }
})
})