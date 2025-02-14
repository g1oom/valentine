const titles = {
    "yes": "WOOOHOOOO",
    "no": ["pls?", "come on...", "not like thisss", ";-;"]
}

let counter = 0;

function load() {
    document.getElementById('gif').src = "assets/pokemon-neutral.gif";
}

function reject() {
    let currentFile = document.getElementById('gif').src.split('/').pop();
    if (currentFile == "pokemon-happy.gif") {
        return;
    }

    let newIndex;
    if (currentFile == "pokemon-neutral.gif" || currentFile == "pokemon-sad-4.gif") {
        newIndex = 1;
    } else {
        newIndex = parseInt(currentFile.split('.')[0].split('-').pop()) + 1;
    }

    document.title = titles["no"][newIndex - 1];
    document.getElementById('gif').src = `assets/pokemon-sad-${newIndex}.gif`;

    const acceptButton = document.getElementById("yes");
    const acceptButtonStyle = window.getComputedStyle(acceptButton);
    const acceptButtonHeight = acceptButtonStyle.getPropertyValue("height");
    const acceptButtonWidth = acceptButtonStyle.getPropertyValue("width");
    const newAcceptButtonHeight = parseInt(acceptButtonHeight.slice(0, -2)) + 10;
    const newAcceptButtonWidth = parseInt(acceptButtonWidth.slice(0, -2)) + 10;
    acceptButton.style.height = `${newAcceptButtonHeight}px`;
    acceptButton.style.width = `${newAcceptButtonWidth}px`;
    const yesWords = document.getElementById("yes-words");
    yesWords.style.fontSize = `${parseInt(window.getComputedStyle(yesWords, null).getPropertyValue('font-size').slice(0, -2)) + 4}px`;

    const rejectButton = document.getElementById("no");
    const rejectButtonStyle = window.getComputedStyle(rejectButton);
    const height = rejectButtonStyle.getPropertyValue("height");
    const width = rejectButtonStyle.getPropertyValue("width");
    const newHeight = parseInt(height.slice(0, -2)) - 5;
    const newWidth = parseInt(width.slice(0, -2)) - 7;
    counter += 1;
    if (counter == 8) {
        document.getElementById('no').remove();
    } else {
        rejectButton.style.height = `${newHeight}px`;
        rejectButton.style.width = `${newWidth}px`;
        const words = document.getElementById("no-words");
        words.style.fontSize = `${parseInt(window.getComputedStyle(words, null).getPropertyValue('font-size').slice(0, -2)) - 1}px`;
    }
}

function accept() {
    let currentFile = document.getElementById('gif').src.split('/').pop();
    if (currentFile == "pokemon-happy.gif") {
        return;
    }

    document.title = titles["yes"];
    document.getElementById('gif').src = "assets/pokemon-happy.gif";
    document.getElementById('text').textContent = "YAY see you on friday <3"
    document.getElementById('text').style.color = "#ff295b";
    document.getElementById('yes').remove();
    if (document.getElementById('no')) document.getElementById('no').remove();

    const itinerary = document.getElementById('itinerary');
    itinerary.src = "./assets/itinerary.png";
    itinerary.style.maxWidth = "100%";
}
