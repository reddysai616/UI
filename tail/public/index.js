const burger = document.querySelector('#user-menu');
const menu = document.querySelector('#menu');

burger.addEventListener('click' ,() =>{
if(menu.classList.contains('hidden')){
menu.classList.remove('hidden');
}
else{
   menu. classList.add('hidden');
}
});


const tr1 = documnet.querySelector('#tr1');
const nope = document.querySelector('#nope');
tr1.addEventListener('click',()=>{
if(nope.classList.contains('hidden')){
   nope.classList.remove('hidden');
}
else{
   nope.classList.add('hidden');
}
});