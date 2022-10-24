const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']
const slider = document.querySelector('.items-wrapper');
let imagesTag = '';


//aggiungo le immagini dinamicamente
for(let i = 0; i<imagesArray.length; i++){
  imagesTag += `<img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">`
}

slider.innerHTML = imagesTag;

//console.log(imagesTag);

//creo un contatore per le immagini
let counterImages = 0;

// aggiungo classe active perchè di default sono display-none
const items = document.getElementsByClassName('item')
items[counterImages].classList.add('active')

// salvo le chevrons in delle costanti
const prev = document.querySelector('.up');
const next = document.querySelector('.down');


//all'evento click di next e prev cambia l'immagine
next.addEventListener('click', nextSlide);

prev.addEventListener('click', function(){
  items[counterImages].classList.remove('active');
  console.log(counterImages);
  if(counterImages===0){
    counterImages=imagesArray.length -1;
  }else{  
  --counterImages;}
  items[counterImages].classList.add('active');

});

//facciamo funzionare il carousel, oltre che con i bottoni anche in autoplay al caricamento della pagina.

function nextSlide(){
  items[counterImages].classList.remove('active');
  
  if(counterImages=== imagesArray.length -1){
    counterImages=0;
  }else{  
  ++counterImages;}
  items[counterImages].classList.add('active');

}

setInterval(nextSlide, 3000);