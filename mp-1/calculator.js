let output = document.getElementById('output');

function add() {
  output.innerHTML = '';
  const inputOne = document.getElementById('input-one').value;
  const inputTwo = document.getElementById('input-two').value;

  if (validNum(inputOne) && validNum(inputTwo)) {
    const ans = parseFloat(inputOne) + parseFloat(inputTwo);
    output.innerHTML = ans;
  } else {
    output.innerHTML = 'Invalid Input';
  }
}

function minus() {
  output.innerHTML = '';
  const inputOne = document.getElementById('input-one').value;
  const inputTwo = document.getElementById('input-two').value;

  if (validNum(inputOne) && validNum(inputTwo)) {
    const ans = parseFloat(inputOne) - parseFloat(inputTwo);
    output.innerHTML = ans;
  } else {
    output.innerHTML = 'Invalid Input';
  }
}

function multiply() {
  output.innerHTML = '';
  const inputOne = document.getElementById('input-one').value;
  const inputTwo = document.getElementById('input-two').value;

  if (validNum(inputOne) && validNum(inputTwo)) {
    const ans = parseFloat(inputOne) * parseFloat(inputTwo);
    output.innerHTML = ans;
  } else {
    output.innerHTML = 'Invalid Input';
  }
}

function divide() {
  output.innerHTML = '';
  const inputOne = document.getElementById('input-one').value;
  const inputTwo = document.getElementById('input-two').value;

  if (validNum(inputOne) && validNum(inputTwo)) {
    const ans = parseFloat(inputOne) / parseFloat(inputTwo);
    output.innerHTML = ans;
  } else {
    output.innerHTML = 'Invalid Input';
  }
}

function power() {
  output.innerHTML = '';
  const inputOne = document.getElementById('input-one').value;
  const inputTwo = document.getElementById('input-two').value;

  if (validNum(inputOne) && validNum(inputTwo)) {
    const ans = parseFloat(inputOne) ** parseFloat(inputTwo);
    output.innerHTML = ans;
  } else {
    output.innerHTML = 'Invalid Input';
  }
}

function clearScreen() {
  document.getElementById('input-one').value = '';
  document.getElementById('input-two').value = '';
  output.innerHTML = '';
}

function validNum(input) {
  if (!isNaN(input) && input !== '') {
    return true;
  } else {
    return false;
  }
}
