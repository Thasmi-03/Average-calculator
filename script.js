
        function calculateAverage(event) {
            event.preventDefault();

            // Get all input values
            const inputs = [
                document.getElementById('num1').value,
                document.getElementById('num2').value,
                document.getElementById('num3').value,
                document.getElementById('num4').value
            ];

            // Filter out empty strings and convert to numbers
            const validNumbers = inputs
                .filter(val => val.trim() !== '')
                .map(val => parseFloat(val))
                .filter(num => !isNaN(num));

            if (validNumbers.length === 0) {
                document.getElementById('result').innerText = "Please enter at least one number.";
                return;
            }

            const sum = validNumbers.reduce((a, b) => a + b, 0);
            const average = sum / validNumbers.length;

            document.getElementById('result').innerText = `Average: ${average.toFixed(2)}`;
        }


    
    
    function clearFields() {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('num3').value = '';
            document.getElementById('num4').value = '';

         document.getElementById('result').innerHTML = " ";

        }

