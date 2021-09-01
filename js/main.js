/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;


let anchors = Array.from(document.querySelectorAll('.to-anchor'));
anchors.forEach(function(item, i, arr) {
  item.addEventListener('click', () => {
    document.querySelectorAll(item.href).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});