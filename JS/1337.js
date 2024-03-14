const modal = document.getElementById("1337-modal")
const closeBtn = document.getElementById("close-btn")
//Ovan hämtas modalen 1337-modal och dess close-btn.


//Deklarerar en variabel som en tom sträng. Denna ska avnändas för att "lyssna" efter knapptryckningar
let keySequence = '';

//Här "lyssnar" koden efter en knapptryckning, och när detta sker kör en funktion
document.addEventListener('keydown', function(event) {

  //Inuti funktionen skapas först en lokal variabel som tilldelas värdet event.key. Dvs den tangent som trycks ner lagras i variabeln 
  let key = event.key;

  //Om keySequence är längre än fyra tecken sätts den som tom igen.
  if (keySequence.length >= 4) {
     keySequence = '';
   }
   
//Om någon av knapparna 1,3 eller 7 trycks ner läggs dessa in i keySequence
   if (key === '1' || key === '3' ||  key === '7') {
    keySequence += key;
      console.log(keySequence)
     
//Om hela keySequenze är 1337 visas den gömda modalen som ett block...
    if (keySequence === '1337') {
       
       modal.style.display = "block"
      }
   } else {
//Annars rensas det inmatade igen.
      keySequence = '';
   }
});


//Och slutligen gömms modalen om man klickar på closeBtn.
closeBtn.addEventListener("click", function(){

modal.style.display="none";

})