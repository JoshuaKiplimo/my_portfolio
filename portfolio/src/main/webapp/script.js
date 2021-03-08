//Fuction marked with async to show its an asynchronous function
//await indicates that the function will get a esponse from the server in the background
/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();
  const dateContainer = document.getElementById('welcomeSection');
  dateContainer.innerText =  textFromResponse;
}
