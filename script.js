let gridCounter;
const container = document.querySelector('.container');
const btnBlack =document.querySelector('.btnBlack');
const btnErase =document.querySelector('.btnErase');
const btnYellow =document.querySelector('.btnYellow');
const reset = document.querySelector('.resetBtn');

const gridClass =document.querySelectorAll('.grid');
function createGrid(size){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
const gridSize= (720/size);
for(let i = 0; i < (size*size); i++ ){
        const grid= document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grid');
         grid.style.width = gridSize+"px";
         grid.style.height = gridSize + "px";
       btnBlack.addEventListener('click',
       ()=> {grid.addEventListener('mouseover' , ()=> {grid.style.backgroundColor ='black'})});
       btnErase.addEventListener('click',
       ()=> {grid.addEventListener('mouseover' , ()=> {grid.style.backgroundColor ='white'})});
       btnYellow.addEventListener('click',
       ()=> {grid.addEventListener('mouseover' , ()=> {grid.style.backgroundColor = "#" + randomColor})});
       gridCounter  = size;
}};

createGrid(16);
const smallBtn = document.querySelector('.smallBtn');
const mediumBtn = document.querySelector('.mediumBtn');
const biggerBtn = document.querySelector('.biggerBtn');
//  smallBtn.addEventListener('click',()=>{
//         const size = prompt("Number");
//         container.innerHTML="";
//         createGrid(size);
//       });
smallBtn.addEventListener('click',()=> {container.innerHTML=""; createGrid (48);});
mediumBtn.addEventListener('click', ()=> {container.innerHTML=""; createGrid (24);});
biggerBtn.addEventListener('click', ()=> {container.innerHTML=""; createGrid (8);});
reset.addEventListener('click', ()=> {  container.innerHTML=""; createGrid(gridCounter);});