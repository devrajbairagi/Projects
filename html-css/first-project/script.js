const warning = document.getElementById("wrong-input");
document.getElementById("inputfield").addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, ""); 
  // removes all non-numeric characters
  if(this.value.length > 10){
  
  }
  if (this.value.length > 10) {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
   
});

