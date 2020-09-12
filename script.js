const button = document.querySelector('.button');
const footer = document.querySelector('.footer');

const scrollTo = element => {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

button.addEventListener('click', () => {
  scrollTo(footer);
})
