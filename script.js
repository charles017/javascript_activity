let playersName = prompt(`What is your name?`);

document.getElementById("demo").innerHTML = `Welcome ${playersName}!`;

function question() {
  const ansWer = prompt(`What is the capital of the Philippines?`);
  if (!ansWer.toUpperCase() == "MANILA") {
    document.getElementById("demo2").innerHTML = `You are WRONG!`;
  } else {
    document.getElementById("demo2").innerHTML = `You are CORRECT!`;
  }
}


question();

let text = prompt(`Please help us improve by leaving a short comment`);
alert(`You have written ${text.length} number of characters`);
