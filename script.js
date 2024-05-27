let stopButton = document.querySelector('#stopButton');
let slowButton = document.querySelector('#slowButton');
let goButton = document.querySelector('#goButton');

let circles = document.querySelector('#traffic-light').children;

stopButton.addEventListener('click', () => {
  circles[0].style.backgroundColor = 'red';
  circles[1].style.backgroundColor = '';
  circles[2].style.backgroundColor = '';
});

slowButton.addEventListener('click', () => {
  circles[0].style.backgroundColor = '';
  circles[1].style.backgroundColor = 'yellow';
  circles[2].style.backgroundColor = '';
});

goButton.addEventListener('click', () => {
  circles[0].style.backgroundColor = '';
  circles[1].style.backgroundColor = '';
  circles[2].style.backgroundColor = 'green';
});
