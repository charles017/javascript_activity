let playersName = prompt(`What is your name?`);

document.getElementById("demo").innerHTML = `Welcome ${playersName}!`;

function question() {
  let ansWer = prompt(`What is the capital of the Philippines?`).toUpperCase();
  if (ansWer == "MANILA") {
    document.getElementById("demo2").innerHTML = `You are CORRECT!`;
    document.body.style.backgroundColor = 'green';
  } else {
    document.getElementById("demo2").innerHTML = `You are WRONG!`;
    document.body.style.backgroundColor = 'red';
  }
}


question();

let text = prompt(`Please help us improve by leaving a short comment`);
alert(`You have written ${text.length} number of characters`);
