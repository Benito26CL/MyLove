onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


document.addEventListener("DOMContentLoaded", function () {
  
  const audio = new Audio("teamo.mp3"); 

  
  function playAudio() {
      audio.play().then(() => {
          console.log("Reproducción automática iniciada");
      }).catch(error => {
          console.warn("La reproducción automática fue bloqueada por el navegador:", error);
      });

      
      document.removeEventListener("click", playAudio);
  }

  document.addEventListener("click", playAudio);
});


document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});
