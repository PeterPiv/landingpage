//selectors
const menuBtn = document.querySelector('#hamburger__menu');
const dropDownMenu = document.querySelector('#dropdown__menu');

dropDownMenu.style.display = 'none';

menuBtn.addEventListener('click', () => {
    if (dropDownMenu.style.display === 'none') {
        dropDownMenu.style.display = 'block'
    } else {
    dropDownMenu.style.display = 'none'
    }
});