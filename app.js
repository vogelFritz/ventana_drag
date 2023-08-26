const intervalo = (a, x, b) => (x < a) ? a :
                               (x < b) ? x : b;

const grafico = document.querySelector('.grafico'),
      ventana = document.querySelector('.ventana');
let excesoX, excesoY;

console.log( grafico.offsetLeft );
console.log( grafico.offsetTop );
console.log( `top ventana: ${ventana.offsetTop}`);

grafico.addEventListener('dragstart', (e) => {
    const divVacio = document.createElement('div');
    excesoX = e.clientX - grafico.offsetLeft;
    excesoY = e.clientY - grafico.offsetTop;
    e.dataTransfer.setDragImage(divVacio,0,0);
});

const actualizarPos = (e) => {
    const bordeSuperior  = e.clientY - excesoY,
          bordeIzquierdo = e.clientX - excesoX,
          limInf = ventana.offsetTop,
          limSup = ventana.offsetTop + ventana.offsetHeight - grafico.offsetHeight,
          limDer = ventana.offsetLeft,
          limIzq = ventana.offsetLeft + ventana.offsetWidth - grafico.offsetWidth;
    grafico.style.top  = `${ intervalo( limSup, bordeSuperior, limInf ) }px`;
    grafico.style.left = `${ intervalo( limIzq, bordeIzquierdo, limDer ) }px`;
}

grafico.addEventListener('drag', (e) => {
    actualizarPos(e);
    // grafico.style.top  = `${ e.clientY - excesoY }px`;
    // grafico.style.left = `${ e.clientX - excesoX }px`;
}); 

grafico.addEventListener('dragend', (e) => {
    actualizarPos(e);
    // grafico.style.top  = `${ e.clientY - excesoY }px`;
    // grafico.style.left = `${ e.clientX - excesoX }px`;
});

