let clickSizeButton ;
let clickColorButton;
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

// CREATE SQUARES FUNCTION
function createGrid(size){
  let colorGreys = "CECACA"
  const gridSize= (540/size);
    for(let i = 0; i < (size*size); i++ ){
          const grid= document.createElement('div');
          container.appendChild(grid);
          grid.classList.add('grid');
          grid.style.width = gridSize+"px";
          grid.style.height = gridSize + "px";
          // HOVER BLACK
   
btnBlack.addEventListener('click',
()=> {colorButtonBG("btnBlack") ; grid.addEventListener('mouseover' ,
()=> {grid.style.backgroundColor ='black'})});
// HOVER ERASE    
btnErase.addEventListener('click',
()=> {colorButtonBG("btnErase")  ; grid.addEventListener('mouseover' , 
()=> {grid.style.backgroundColor ='white'})});
//HOVER CHARCOAL    
btnYellow.addEventListener('click',
()=> {colorButtonBG("btnYellow")  ; grid.addEventListener('mouseover' , 
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
()=> {colorButtonBG("rainbow") ;grid.addEventListener('mouseover', 
()=>  {  let colors= '#'+ Math.floor(Math.random()*16777215).toString(16)

  grid.style.backgroundColor =  colors})});
    gridCounter  = size; // counter for reset button
}};


 
smallBtn.addEventListener('click',()=> { sizeButtonBG("smallBtn"); container.innerHTML=""; createGrid (30);});
mediumBtn.addEventListener('click', ()=> { sizeButtonBG("mediumBtn"); container.innerHTML=""; createGrid (18);});
biggerBtn.addEventListener('click', ()=> { sizeButtonBG("biggerBtn"); container.innerHTML=""; createGrid (8);});
reset.addEventListener('click', ()=> { colorButtonBG(); sizeButtonBG(); container.innerHTML=""; createGrid(gridCounter);});
createGrid(16);


//changing size buttons colors when clicked


   function sizeButtonBG(clickedButton){
    clickSizeButton = clickedButton;
    
    mediumBtn.style.backgroundColor ="#d1d4d8"
      biggerBtn.style.backgroundColor ="#d1d4d8"
      smallBtn.style.backgroundColor ="#d1d4d8"
    if(clickSizeButton === "smallBtn"){
      
      smallBtn.style.backgroundColor = "rgb(202 228 117 / 63%)"
    }
    else if(clickSizeButton === "mediumBtn"){
   
      mediumBtn.style.backgroundColor = "rgb(202 228 117 / 63%)"
    }
    else if(clickSizeButton === "biggerBtn"){
     
      biggerBtn.style.backgroundColor = "rgb(202 228 117 / 63%)"
    }
   }
  // changing color buttons colors when clicked
  function colorButtonBG(clickColorButton){
    condition = clickColorButton;
    
    btnBlack.style.backgroundColor ="#d1d4d8"
    btnErase.style.backgroundColor ="#d1d4d8"
    btnYellow.style.backgroundColor ="#d1d4d8"
    rainbow.style.backgroundColor ="#d1d4d8"
    if(condition === "btnBlack"){
      
      btnBlack.style.backgroundColor = "rgb(202 228 117 / 63%)"
    }
    else if(condition === "btnErase"){
   
      btnErase.style.backgroundColor = "rgb(202 228 117 / 63%)"
    }
    else if(condition === "btnYellow"){
     
      btnYellow.style.backgroundColor = "rgb(202 228 117 / 63%)"
    }
    else if(condition === "rainbow"){
     
      rainbow.style.backgroundColor = "rgb(202 228 117 / 63%)"
    }
   }
   
  