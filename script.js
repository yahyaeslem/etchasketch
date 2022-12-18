let gridCounter;
const container = document.querySelector('.container');
const btnBlack =document.querySelector('.btnBlack');
const btnErase =document.querySelector('.btnErase');
const btnYellow =document.querySelector('.btnYellow');

const gridClass =document.querySelectorAll('.grid');
function createGrid(size){
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
       ()=> {grid.addEventListener('mouseover' , ()=> {grid.style.backgroundColor ='yellow'})});
       gridCounter  = size;
}};

createGrid(16);
 const smallBtn = document.querySelector('.smallBtn');
 smallBtn.addEventListener('click',()=>{
        const size = prompt("Number");
        container.innerHTML="";
        createGrid(size);
      });
