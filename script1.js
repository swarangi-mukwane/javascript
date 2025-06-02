
const inputBox = document.getElementById('inputbox');
const buttons = Array.from(document.querySelectorAll('button'));
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();

    if (value === 'AC') {
      currentInput = '';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
      try {
        currentInput = Function('"use strict";return (' + currentInput + ')')();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    inputBox.value = currentInput;
  });
});
