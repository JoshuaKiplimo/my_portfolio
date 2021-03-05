//Fuction marked with async to show its an asynchronous function
//await indicates that the function will get a esponse from the server in the background
/** Fetches the current date from the server and adds it to the page. */

async function getRandomInfo() {
  const responseFromServer = await fetch('/JoshuaInfo');
  const Response = await responseFromServer.json();
  const randomFacts = [Response.one, Response.two, Response.three];
  // Pick a random fact
  const fact = randomFacts[Math.floor(Math.random() * randomFacts.length)]
  // Add it to the page.
  const factContainer = document.getElementById('fact');
  factContainer.innerText = '"'+fact+'"';
}


