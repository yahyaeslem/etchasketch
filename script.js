const container = document.querySelector('#container');


function createGrid(size){
    // for(let u=0; u <= size ; u++){
        for(let i = 0; i <= (size*size); i++ ){
        const grid= document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grid');
       
}
};
createGrid(16);