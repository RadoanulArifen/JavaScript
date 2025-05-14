    function count() {
      const start = parseInt(document.getElementById('start').value);
      const end = parseInt(document.getElementById('end').value);
      const step = parseInt(document.getElementById('step').value);
      const output = document.getElementById('output');
      
      if (isNaN(start) || isNaN(end) || isNaN(step) || step <= 0) {
        output.innerHTML = "Please enter valid numbers and a step > 0.";
        return;
      }

      let result = "";
      if (start <= end) {
        for (let i = start; i <= end; i += step) {
          result += i + " ";
        }
      } else {
        for (let i = start; i >= end; i -= step) {
          result += i + " ";
        }
      }

      output.innerHTML = "Result: " + result;
    }