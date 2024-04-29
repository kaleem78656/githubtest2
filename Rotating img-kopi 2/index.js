const imagecontanierEl = document.querySelector(".image-container");
 
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
 
let x=0;
let timer;
 
function updateGallary()
{
 
    imagecontanierEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
timer = setTimeout(()=> {
    x = x - 45;
    updateGallary ();
}, 3000);
    
}
updateGallary();
 
prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallary();
  });
 
  nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallary();
  });