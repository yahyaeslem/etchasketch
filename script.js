
let gridCounter;
const container = document.querySelector('.container');
const btnBlack =document.querySelector('.btnBlack');
const btnErase =document.querySelector('.btnErase');
const btnYellow =document.querySelector('.btnYellow');
const reset = document.querySelector('.resetBtn');
const rainbow = document.querySelector('.rainbow');
const smallBtn = document.querySelector('.smallBtn');
const mediumBtn = document.querySelector('.mediumBtn');
const biggerBtn = document.querySelector('.biggerBtn');
smallBtn.addEventListener('click',()=> {container.innerHTML=""; createGrid (48);});
mediumBtn.addEventListener('click', ()=> {container.innerHTML=""; createGrid (24);});
biggerBtn.addEventListener('click', ()=> {container.innerHTML=""; createGrid (8);});
reset.addEventListener('click', ()=> {  container.innerHTML=""; createGrid(gridCounter);});
createGrid(16);
// CREATE SQUARES FUNCTION
function createGrid(size){
  let colorGreys =  "CECACA";
  const gridSize= (720/size);
    for(let i = 0; i < (size*size); i++ ){
          const grid= document.createElement('div');
          container.appendChild(grid);
          grid.classList.add('grid');
          grid.style.width = gridSize+"px";
          grid.style.height = gridSize + "px";
          // HOVER BLACK
            btnBlack.addEventListener('click',
              ()=> {grid.addEventListener('mouseover' ,
              ()=> {grid.style.backgroundColor ='black'})});
          // HOVER ERASE    
            btnErase.addEventListener('click',
              ()=> {grid.addEventListener('mouseover' , 
              ()=> {grid.style.backgroundColor ='white'})});
          //HOVER CHARCOAL    
            btnYellow.addEventListener('click',
              ()=> {grid.addEventListener('mouseover' , 
               ()=> {
                 function charcoalColors() 
                 {
                if(colorGreys === "CECACA" ){ colorGreys = "ECE9E9" }
                else if(colorGreys === "ECE9E9"){colorGreys = "D0CDCD"}
                else if(colorGreys === "D0CDCD"){colorGreys = "B3B1B1"}
                else if(colorGreys === "B3B1B1"){colorGreys = "979595"}
                else if(colorGreys === "979595"){colorGreys = "7A7979"}
                else if(colorGreys === "7A7979"){colorGreys = "5E5D5D"}
                else if(colorGreys === "5E5D5D"){colorGreys = "515151"}
                else if(colorGreys === "515151"){colorGreys = "3A3A3A"}
                else if(colorGreys === "3A3A3A"){colorGreys = "212020"}
                return colorGreys;
                }
                let charcoal = charcoalColors();
               
                grid.style.backgroundColor = '#' + charcoal })});
          // HOVER RANDOM COLORS
            rainbow.addEventListener('click',
              ()=> {grid.addEventListener('mouseover', 
              ()=>  {  let colors= '#'+ Math.floor(Math.random()*16777215).toString(16)
             
                grid.style.backgroundColor =  colors})});
    gridCounter  = size; // counter for reset button
}};
//CHARCOAL COLORS FUNCTION


   