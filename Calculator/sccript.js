function calculate() {
    let display = document.getElementById("display");
    try {
      display.value = eval(display.value); 
    } catch {
      display.value = "Error" ; 
      
    }
  }