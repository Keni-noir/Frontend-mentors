const buttons = document.getElementById('icon');
const shareBox = document.getElementById('shareBox');

buttons.addEventListener('click', function (event){
    event.stopPropagation();
    shareBox.classList.toggle('active');
});

window.addEventListener('click', function (event) {
  if (!shareBox.contains(event.target) && event.target !== icon) {
    shareBox.classList.remove('active');
  }
});