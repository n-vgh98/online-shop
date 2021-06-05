const color = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d',
]

function createSquare(){
    const section = document.querySelector('#footer');
    const square = document.createElement('i');

    var size = Math.random() * 5;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    square.style.borderRadius = 50 + '%';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    
    const bg = color[Math.floor(Math.random() * color.length)];
    square.style.background = bg;

    section.appendChild(square);
    
    setTimeout(() =>{
        square.remove()
    },5000)
}

setInterval(createSquare , 150);