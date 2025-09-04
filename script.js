
        function calculateAverage(event) {
    event.preventDefault();

    
    const number1 = parseFloat(document.getElementById('num1').value) || 0;
    const number2 = parseFloat(document.getElementById('num2').value) || 0;
    const number3 = parseFloat(document.getElementById('num3').value) || 0;
    const number4 = parseFloat(document.getElementById('num4').value) || 0;

   

    const average =(number1 + number2 + number3 + number4) / 4;

   document.getElementById('result').innerText = `Average: ${average.toFixed(2)}`;
        }


    
    
    function clearFields() {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('num3').value = '';
            document.getElementById('num4').value = '';

         document.getElementById('result').innerHTML = " ";

        }

