// eyowo 
const eyowo = document.querySelector('#eyowo');
const eyoShow = document.querySelector('#eyo-first');
const eyoHide = document.querySelector('#eyo-second');
const eyoBall = document.querySelector('#eyo-ball');

// Eyowo hover
eyowo.addEventListener('mouseenter', function () {
    eyoShow.classList.add('hidden');
    eyoHide.classList.remove('hidden');
    eyoBall.classList.remove('hidden');
});

eyowo.addEventListener('mouseleave', function () {
    eyoShow.classList.remove('hidden');
    eyoHide.classList.add('hidden');
    eyoBall.classList.add('hidden');
});


// Navbar
const menu = document.querySelector('#menu');
const nav = document.querySelector('#navbar');

menu.addEventListener('click', function() {
    if(nav.classList.contains('hidden')) {
        nav.classList.remove('hidden')
    } else {
        nav.classList.add('hidden');
    }
});


// doktor 
const doktor = document.querySelector('#doktor');
const doktorShow = document.querySelector('#doktor-first');
const doktorHide = document.querySelector('#doktor-second');
const doktorBall = document.querySelector('#doktor-ball');

// doktor hover
doktor.addEventListener('mouseenter', function () {
    doktorShow.classList.add('hidden');
    doktorHide.classList.remove('hidden');
    doktorBall.classList.remove('hidden');
});

doktor.addEventListener('mouseleave', function () {
    doktorShow.classList.remove('hidden');
    doktorHide.classList.add('hidden');
    doktorBall.classList.add('hidden');
});


// cabin 
const cabin = document.querySelector('#cabin');
const cabinShow = document.querySelector('#cabin-first');
const cabinHide = document.querySelector('#cabin-second');
const cabinBall = document.querySelector('#cabin-ball');

// cabin hover
cabin.addEventListener('mouseenter', function () {
    cabinShow.classList.add('hidden');
    cabinHide.classList.remove('hidden');
    cabinBall.classList.remove('hidden');
});

cabin.addEventListener('mouseleave', function () {
    cabinShow.classList.remove('hidden');
    cabinHide.classList.add('hidden');
    cabinBall.classList.add('hidden');
});


// maal 
const maal = document.querySelector('#maal');
const maalShow = document.querySelector('#maal-first');
const maalHide = document.querySelector('#maal-second');
const maalBall = document.querySelector('#maal-ball');

// maal hover
maal.addEventListener('mouseenter', function () {
    maalShow.classList.add('hidden');
    maalHide.classList.remove('hidden');
    maalBall.classList.remove('hidden');
});

maal.addEventListener('mouseleave', function () {
    maalShow.classList.remove('hidden');
    maalHide.classList.add('hidden');
    maalBall.classList.add('hidden');
});


// kiyah 
const kiyah = document.querySelector('#kiyah');
const kiyahShow = document.querySelector('#kiyah-first');
const kiyahHide = document.querySelector('#kiyah-second');
const kiyahBall = document.querySelector('#kiyah-ball');

// kiyah hover
kiyah.addEventListener('mouseenter', function () {
    kiyahShow.classList.add('hidden');
    kiyahHide.classList.remove('hidden');
    kiyahBall.classList.remove('hidden');
});

kiyah.addEventListener('mouseleave', function () {
    kiyahShow.classList.remove('hidden');
    kiyahHide.classList.add('hidden');
    kiyahBall.classList.add('hidden');
})
