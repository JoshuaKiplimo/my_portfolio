//Function marked with async to show its an asynchronous function
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
    factContainer.innerText = '"' + fact + '"';
}
   // Function that gets text from text box
function GetSentiment() {
    var element1 = document.getElementsByTagName("input")[0].value;
    console.log(element1);
    returnSentiment(element1);
}
    // Function to insert new paragraph and add dynamic styling
function insertDiv(sentiment, sentimentContainer) {
    sentimentContainer.innerHTML = '<p> <span class= "style1"> Sentiment: </span> ' + '<span class= "style">' + sentiment + '</span>' + "</p>";
    var paragraph = document.getElementsByClassName("style1")[0];
    paragraph.setAttribute("style", "font-size: 13px;color: white;background: black; border-radius: 2px; padding: 2px; font-family: 'Monaco'");
}
   // Function to add text sentiment and  dynamic styling to it
function changestyle(num) {
    var elementChange = document.getElementsByClassName("style")[0];
    if (num == 1) {
        elementChange.setAttribute("style", "background: #E53C06;");
    } else if (num == 2) {
        elementChange.setAttribute("style", "background: #E59E06;");
    } else {
        elementChange.setAttribute("style", "background: #429F10;");
    }
}
//Asynchronous function that pings server and gets sentiment from cloud API
async function returnSentiment(text) {
    const responseFromServer = await fetch('/sentimentExtract', {
        method: 'post',
        body: JSON.stringify(text),
    });
    const Response = await responseFromServer.json();
    var sentimentContainer = document.getElementById('FinalSentiment');

    while (sentimentContainer.firstChild) {
        //To clear div before new data is added
        sentimentContainer.removeChild(sentimentContainer.firstChild);
    }
    if (Response < -0.5) {
        insertDiv("Negative", sentimentContainer);
        changestyle(1);
    } else if (Response > -0.5 && Response < 0.5) {
        insertDiv("Neutral", sentimentContainer);
        changestyle(2);
    } else {
        insertDiv("Positive", sentimentContainer);
        changestyle(3);
    }
}