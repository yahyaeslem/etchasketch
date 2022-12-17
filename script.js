const container = document.querySelector('.container');


const btnBlack =document.querySelector('.btnBlack');
const btnErase =document.querySelector('.btnErase');
const btnYellow =document.querySelector('.btnYellow');
const grid= document.createElement('div');
function createGrid(size){

for(let i = 0; i < (size*size); i++ ){
        const grid= document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grid');
       btnBlack.addEventListener('click',()=> {grid.addEventListener('mouseover' , ()=> {grid.style.backgroundColor ='black'})});
       btnErase.addEventListener('click',()=> {grid.addEventListener('mouseover' , ()=> {grid.style.backgroundColor ='white'})});
       btnYellow.addEventListener('click',()=> {grid.addEventListener('mouseover' , ()=> {grid.style.backgroundColor ='yellow'})});
}};
//  const square =document.querySelectorAll('.grid');
//  btnBlack.addEventListener('click', ()=>{
//     square.addEventListener('mouseover' , ()=> {square.style.backgroundColor ='black'})});

// };
createGrid(16);
// const square = document.querySelectorAll('.grid');
// btnBlack.addEventListener('click',hoverBlack());
// function hoverBlack(){
//     square.addEventListener('mouseover',
// () => 
//     {square.style.backgroundColor='black'}
//     )
// };
// btnErase.addEventListener('click', function (e){square.addEventListener('mouseover',function(e)  {square.style.backgroundColor='white'} );});
// btnYellow.addEventListener('click',function (e){square.addEventListener('mouseover',function(e)  {square.style.backgroundColor='yellow'} );});
