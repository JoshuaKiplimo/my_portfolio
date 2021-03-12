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
function GetSentiment(){
  var element1 = document.getElementsByTagName("input")[0].value;
  console.log(element1);
  returnSentiment(element1);
}
async function returnSentiment(text){
const responseFromServer = await fetch('/sentimentExtract', {
        method: 'post',
        body: JSON.stringify(text),
    });
const Response = await responseFromServer.json();
var sentiment = ""
var sentimentContainer = document.getElementById('FinalSentiment');
while(sentimentContainer.firstChild){
    sentimentContainer.removeChild(sentimentContainer.firstChild);
}
if (Response < -0.5){
   sentiment = "Negative"
   sentimentContainer.innerHTML = '<p> <span class= "style1"> Sentiment: </span> '+ '<span class= "style">' + sentiment + '</span>' + "</p>";
   document.getElementsByClassName("style")[0].setAttribute("style", "font-size: 13px;color: white;background: #E53C06; border-radius: 2px; padding: 2px; font-family: 'Monaco'");
   document.getElementsByClassName("style1")[0].setAttribute("style", "font-size: 13px;color: white;background: black; border-radius: 2px; padding: 2px; font-family: 'Monaco'");
}
else if(Response > -0.5 && Response < 0.5){
    sentiment = "Neutral"
   sentimentContainer.innerHTML = '<p> <span class= "style1"> Sentiment: </span> '+ '<span class= "style">' + sentiment + '</span>' + "</p>";
   document.getElementsByClassName("style")[0].setAttribute("style", "font-size: 13px;color: white;background: #E59E06; border-radius: 2px; padding: 2px;font-family: 'Monaco'");
    document.getElementsByClassName("style1")[0].setAttribute("style", "font-size: 13px;color: white;background: black; border-radius: 2px; padding: 2px; font-family: 'Monaco'");
}
else{
    sentiment = "Positive"
   sentimentContainer.innerHTML = '<p> <span class= "style1"> Sentiment: </span> '+ '<span class= "style">' + sentiment + '</span>' + "</p>";
   document.getElementsByClassName("style")[0].setAttribute("style", "font-size: 13px;color: white;background: #429F10; border-radius: 2px; padding: 2px; font-family: 'Monaco'");
    document.getElementsByClassName("style1")[0].setAttribute("style", "font-size: 13px;color: white;background: black; border-radius: 2px; padding: 2px; font-family: 'Monaco'");
} 
}