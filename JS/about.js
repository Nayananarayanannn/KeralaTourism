window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-140px";
  }
}

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('active');
}))

function removeActiveClasses(){
    panels.forEach(panel => panel.classList.remove('active'))
}