const btnhistor1 = document.getElementById('ButtonBlock1');
const btnhistor2 = document.getElementById('ButtonBlock2');
const fact1 = document.querySelector('.fact1');
const fact2 = document.querySelector('.fact2');

const YavlButton = document.getElementById('YavlButton1');
const YavlButton2 = document.getElementById('YavlButton2');
const YavlButton3 = document.getElementById('YavlButton3');
const infBlock = document.querySelector('.inf-block');
const infBlock2 = document.querySelector('.inf-block2');
const infBlock3 = document.querySelector('.inf-block3');

const button = document.getElementById('ButtonMenu');
const menu = document.getElementById('menu-list');

button.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.add('closing');
    menu.addEventListener('animationend', () => {
        menu.classList.remove('active', 'closing');
        menu.style.display = 'none';
    }, {once: true});
  } else {
    menu.style.display = 'flex';
    requestAnimationFrame(() => menu.classList.add('active'));
  }
});

YavlButton.addEventListener('click', () => {
	infBlock.classList.toggle('show');

	YavlButton.disabled = true;
	YavlButton.style.cursor = 'default';
});

YavlButton2.addEventListener('click', () => {
	infBlock2.classList.toggle('show');

	YavlButton2.textContent = '';
});

YavlButton3.addEventListener('click', () => {
	infBlock3.classList.toggle('show');

	YavlButton3.textContent = '';
});

btnhistor1.addEventListener('click', () => {
	fact1.classList.toggle('show');

	btnhistor1.disabled = true;
	btnhistor1.style.cursor = 'default';
});

btnhistor2.addEventListener('click', () => {
	fact2.classList.toggle('show');

	btnhistor2.textContent = '';
});