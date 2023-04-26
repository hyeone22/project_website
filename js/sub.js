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

btnMenu.addEventListener('click', e =>{
  e.preventDefault();
  btnMenu.classList.toggle('open');
  topMenu.classList.toggle('on');
  logo.classList.toggle('on');
  header.classList.toggle('on');
  body.classList.toggle('on');
})

const subBtn = document.querySelector(".sub_menu_dl>dd");
const subBtn2 = document.querySelector(".sub_menu_dl2>dd");
const sub_dt = document.querySelector(".sub_dt");
const sub_dt2 = document.querySelector(".sub_dt2");
console.log(sub_dt);
console.log(subBtn);
console.log(subBtn2);


  sub_dt.addEventListener("click", ()=> {
    subBtn.classList.toggle("on");
    subBtn2.classList.remove("on");
  });

  sub_dt2.addEventListener("click", ()=> {
    subBtn2.classList.toggle("on");
    subBtn.classList.remove("on")
  })
})
