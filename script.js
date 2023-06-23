// script.js
function convertLength() {
    var inputUnit = document.getElementById('inputUnit');
    var outputUnit = document.getElementById('outputUnit');
    var inputType = document.getElementById('inputType').value;
    var outputType = document.getElementById('outputType').value;
    
    var inputValue = parseFloat(inputUnit.value);
    
    if (!isNaN(inputValue)) {
      var meters;
      
      switch (inputType) {
        case 'cm':
          meters = inputValue / 100;
          break;
        case 'km':
          meters = inputValue * 1000;
          break;
        default:
          meters = inputValue;
          break;
      }
      
      var result;
      
      switch (outputType) {
        case 'cm':
          result = meters * 100;
          break;
        case 'km':
          result = meters / 1000;
          break;
        default:
          result = meters;
          break;
      }
    }
}  