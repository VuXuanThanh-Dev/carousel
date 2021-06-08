
const groupImg = document.querySelector('.group-img');
const points = document.querySelectorAll('.point');

let currentIndex = 0;

let id = setInterval(changeImg, 3000);


function changeImg() {
    currentIndex++;
    if(currentIndex > 3) {
        currentIndex = 0;
    }
    clearActive();
    groupImg.setAttribute('style', `transform: translateX(${-currentIndex * 500}px)`);
}


points.forEach((point, idx) => {
    point.addEventListener('click', () => {
        clearInterval(id);
        currentIndex = idx;
        id = setInterval(changeImg, 3000);
        clearActive();
        point.classList.add('active');
        groupImg.setAttribute('style', `transform: translateX(${-(idx) * 500}px)`);
    })
});


function clearActive() {
    points.forEach((point, idx) => {
        if(idx === currentIndex) {
            point.classList.add('active');
        }else {
            point.classList.remove('active')
        }
    });
    
}