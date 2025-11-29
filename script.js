let now = new Date();
let hour = now.getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning, aspiring student!";
} else if (hour < 18) {
  greeting = "Good afternoon, aspiring student!";
} else {
  greeting = "Good evening, aspiring student!";
}


document.getElementById("greeting").innerText = greeting;
