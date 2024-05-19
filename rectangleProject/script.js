let shape = document.querySelector('.shape');
let btn = document.querySelector('button');
let flag = 0;

btn.addEventListener('click',()=>{
    if (flag == 0){ 
        shape.classList = 'circle';
        flag++;
    }
    else {
        shape.classList = 'shape';
        flag--;
    }
})


