// array contenente le immagini
const imgArray = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg"]

// qui dentro ci sarà tutta la parte di codice relativa a Vue
const slider = new Vue({
  // el mi permette di collegarmi alla sezione di html in cui Vue deve intervenire
  el: "#slider",
  // in data inserisco i dati
  data: {
    // abbreviazione, sta per imgArray: imgArray,
    imgArray,
    imgArrayIndex: 0
  },
  // in methods inserisco le funzioni
  methods: {
    // la funzione prev fa - 1 all'indice corrente dell'array, a meno che l'indice non sia 0; in quel caso, sostituisce l'indice con l'ultimo indice dell'array
    prev: function(){
      if (this.imgArrayIndex == 0){
        this.imgArrayIndex = (this.imgArray.length - 1)
      } else {
        this.imgArrayIndex = (this.imgArrayIndex - 1)
      }
    },
    // la funzione next fa + 1 all'indice corrente dell'array, a meno che l'indice non sia quello dell'ultimo elemento; in quel caso, sostituisce l'indice con 0
    next: function(){
      if (this.imgArrayIndex == (this.imgArray.length - 1)){
        this.imgArrayIndex = 0
      } else {
        this.imgArrayIndex = (this.imgArrayIndex + 1)
      }
    }
  }
})

// gestisco le frecce della tastiera
document.addEventListener("keydown", function(element){
  if (element.key == "ArrowLeft"){
    slider.prev();
  } else if (element.key == "ArrowRight"){
    slider.next();
  }
})
