const container = document.querySelector('.container');


const btnBlack =document.querySelector('.btnBlack');
const btnErase =document.querySelector('.btnErase');
const btnYellow =document.querySelector('.btnYellow');

function createGrid(size){
    // for(let u=0; u <= size ; u++){
        for(let i = 0; i < (size*size); i++ ){
        const grid= document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grid');
       
}
};
createGrid(16);
const square = document.querySelectorAll('.grid');
btnBlack.addEventListener('click',hoverBlack());
function hoverBlack(){
    square.addEventListener('mouseover',
    () => 
    {e.target.style.backgroundColor='black'} 
    )
};
btnErase.addEventListener('click', function (e){square.addEventListener('mouseover',function(e)  {square.style.backgroundColor='white'} );});
btnYellow.addEventListener('click',function (e){square.addEventListener('mouseover',function(e)  {square.style.backgroundColor='yellow'} );});
