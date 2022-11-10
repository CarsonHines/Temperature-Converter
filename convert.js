window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
   // TODO: Complete the function
   const convBtn = document.getElementById("convertButton");
   convBtn.addEventListener("click", convertButtonClicked);

   const cellInput = document.getElementById("cInput");
   const fahrInput = document.getElementById("fInput");

   cellInput.addEventListener("input", function(){
      clearTextbox(fahrInput);
   });
   fahrInput.addEventListener("input", function(){
      clearTextbox(cellInput);
   });
}

function clearTextbox(textInput){
   textInput.value = "";
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5/9;
}

function convertButtonClicked(){
   const cellInput = document.getElementById("cInput");
   const fahrInput = document.getElementById("fInput");
   const errorInput = document.getElementById("errorMessage");
   const weaImage = document.getElementById("weatherImage");

   errorInput.innerHTML = "";

   if(cellInput.value.length > 0){
      const celsius = parseFloat(cellInput.value);

      if(!isNaN(celsius)){
         fahrInput.value = convertCtoF(celsius);
      }
      else{
         errorInput.innerHTML = cellInput.value + " is not a number";
      }
   }
   else if(fahrInput.value.length > 0){
      const fahrenheit = parseFloat(fahrInput.value);

      if(!isNaN(fahrenheit)){
         cellInput.value = convertFtoC(fahrenheit);
      }
      else{
         errorInput.innerHTML = fahrInput.value + " is not a number";
      }
   }

   if(fahrInput.value > 50){
      weaImage.src = "warm.png";
   }
   else if(fahrInput.value < 32){
      weaImage.src = "cold.png";
   }
   else{
      weaImage.src = "cool.png";
   }
}