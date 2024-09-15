function checkAge() {
  let userInput = document.getElementById('input').value;
  console.log(userInput);
  console.log('test');

  if (Number(userInput) < 0) {
    document.getElementById('main-output').style.display = 'none';
    document.getElementById('alt-output').style.visibility = 'visible';
    document.getElementById('alt-output').style.display = 'block';
    document.getElementById('alt-output').innerHTML =
      'Negative Number is not accepted';
  } else if (isNaN(userInput)) {
    document.getElementById('main-output').style.display = 'none';
    document.getElementById('alt-output').style.visibility = 'visible';
    document.getElementById('alt-output').style.display = 'block';
    document.getElementById('alt-output').innerHTML = 'Invalid Number';
  }
  //   else if (!Number.isInteger(userInput)) {
  //     document.getElementById('main-output').style.display = 'none';
  //     document.getElementById('alt-output').style.visibility = 'visible';
  //     document.getElementById('alt-output').style.display = 'block';
  //     document.getElementById('alt-output').innerHTML =
  //       'Not an Integer, the user has not enter a valid age';
  //   }
  else if (!Number(userInput)) {
    document.getElementById('main-output').style.display = 'none';
    document.getElementById('alt-output').style.visibility = 'visible';
    document.getElementById('alt-output').style.display = 'block';
    document.getElementById('alt-output').innerHTML = 'Not a number';
  } else if (Number(userInput) >= 18 && Number(userInput) <= 120) {
    document.getElementById('main-output').style.display = 'block';
    document.getElementById('main-output').style.visibility = 'visible';
  } else {
    document.getElementById('main-output').style.display = 'none';
    document.getElementById('alt-output').style.visibility = 'visible';
    document.getElementById('alt-output').style.display = 'block';
    document.getElementById('alt-output').innerHTML =
      'You may not see the content';
  }
}

// document.getElementById('submit-button').addEventListener('click', checkAge());
