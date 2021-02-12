var skinner = document.getElementById("easyQuestion2Input");
if(skinner.addEventListener){
    Element.addEventListener("submit", main_validator, true);
} 

function main_validator(e){
    console.log(e) //switch to document.write once it works
    
    

}

function validateFormEasyQuestion2() {
    var x = document.forms["formEasyQuestion2"]["easyQuestion2Input"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else if (x == "Skinner") {
        alert("Correct!");
        return true;
    } else if (x == "skinner") {
        alert("Correct!");
        return true;
    } else {
        alert("Wrong! Go back to Shelbyville!");
        return false;
    }
  }

  function validateFormHardQuestion2() {
    var x = document.forms["formHardQuestion2"]["hardQuestion2Input"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else if (x == "Thrillhouse") {
        alert("Correct!");
        return true;
    } else if (x == "thrillhouse") {
        alert("Correct!");
        return true;
    } else {
        alert("Wrong! Go back to Shelbyville!");
        return false;
    }
  }