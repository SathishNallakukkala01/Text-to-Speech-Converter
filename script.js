let speech = new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select");


window.speechSynthesis.onvoiceschanged= () =>{
    voices=window.speechSynthesis.getVoices();
    

    voices.forEach((voice,i) =>{
        voiceSelect.options[i]=new Option(voice.name,i);
    });
    speech.voice=voices[0];
};

voiceSelect.addEventListener("change",()=>{
    const selectedIndex = parseInt(voiceSelect.value);
    speech.voice=voices[selectedIndex];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

});
