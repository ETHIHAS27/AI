var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;

function start(){
    document.getElementById("textbox").value = " ";
    console.log("functon is starting");
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);
}