let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let veds = ["Hello dear!!, you called me ?"];
let intro = ["Hello, I am Veds", "Hi, I am a Robot...my name is veds", "Hello, My name is Veds"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let hobbies = ["i love to help you go to desired destination", "i like to make friends like you and travel with you", "i like travelling"];
let travel = ["where you want to go ??", "which destination you want to visit"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye !!happy Journey','As you wish, bye take-care !!happy Journey','Bye-bye, see you soon..!!happy Journey'];
let france = ["I have information of Eifel tower in France"];
let china = ["I have information about Great wall in china"];
let russia = ["I have information about Kremlin in russia"];
let italy = ["I have information about Leaning tower in Italy"];
let egypt = ["I have information about Great pyramid in Egypt"];
let australia = ["I have information about Sydney Opera in Australia"];
let usa = ["I have information about Statue of liberty in USa"];
let india = ["I have information about Taj Mahal in India"];
let chile = ["I have information about Moai on Easter in Chile"];
let peru = ["I have information about Machu pichu in Peru"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "for more information surf site manually";

    //veds
    if(message.includes('veds')){
        let finalresult = veds[Math.floor(Math.random() * veds.length)];
        speech.text = finalresult;
    }
    if(message.includes('Veds')){
        let finalresult = veds[Math.floor(Math.random() * veds.length)];
        speech.text = finalresult;
    }
    if(message.includes('Hell')){
        let finalresult = veds[Math.floor(Math.random() * veds.length)];
        speech.text = finalresult;
    }
    if(message.includes('hel')){
        let finalresult = veds[Math.floor(Math.random() * veds.length)];
        speech.text = finalresult;
    }
    if(message.includes('hii')){
        let finalresult = veds[Math.floor(Math.random() * veds.length)];
        speech.text = finalresult;
    }
    if(message.includes('Hii')){
        let finalresult = veds[Math.floor(Math.random() * veds.length)];
        speech.text = finalresult;
    }
    
    //intro
    if(message.includes('name')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }

    
    //help
    if(message.includes('help')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('assist')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }

    //hobbies
    if(message.includes('hobb')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }

    //travel
    if(message.includes('travel')){
        let finalresult = travel[Math.floor(Math.random() * travel.length)];
        speech.text = finalresult;
    }
    if(message.includes('destination')){
        let finalresult = travel[Math.floor(Math.random() * travel.length)];
        speech.text = finalresult;
    }
    if(message.includes('place')){
        let finalresult = travel[Math.floor(Math.random() * travel.length)];
        speech.text = finalresult;
    }

    //thanks
    if(message.includes('hank')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }

    //closing
    if(message.includes('bye')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

    //france
    if(message.includes('france')){
        let finalresult = france[Math.floor(Math.random() * france.length)];
        speech.text = finalresult;
    }
    if(message.includes('France')){
        let finalresult = france[Math.floor(Math.random() * france.length)];
        speech.text = finalresult;
    }

    //china
    if(message.includes('china')){
        let finalresult = china[Math.floor(Math.random() * china.length)];
        speech.text = finalresult;
    }
    if(message.includes('China')){
        let finalresult = china[Math.floor(Math.random() * china.length)];
        speech.text = finalresult;
    }

    //russia
    if(message.includes('russia')){
        let finalresult = russia[Math.floor(Math.random() * russia.length)];
        speech.text = finalresult;
    }
    if(message.includes('Russia')){
        let finalresult = russia[Math.floor(Math.random() * russia.length)];
        speech.text = finalresult;
    }

    //italy
    if(message.includes('italy')){
        let finalresult = italy[Math.floor(Math.random() * italy.length)];
        speech.text = finalresult;
    }
    if(message.includes('Italy')){
        let finalresult = italy[Math.floor(Math.random() * italy.length)];
        speech.text = finalresult;
    }

    //egypt
    if(message.includes('egypt')){
        let finalresult = egypt[Math.floor(Math.random() * egypt.length)];
        speech.text = finalresult;
    }
    if(message.includes('Egypt')){
        let finalresult = egypt[Math.floor(Math.random() * egypt.length)];
        speech.text = finalresult;
    }

    //australia
    if(message.includes('australia')){
        let finalresult = australia[Math.floor(Math.random() * australia.length)];
        speech.text = finalresult;
    }
    if(message.includes('Australia')){
        let finalresult = australia[Math.floor(Math.random() * australia.length)];
        speech.text = finalresult;
    }

    //usa
    if(message.includes('usa')){
        let finalresult = usa[Math.floor(Math.random() * usa.length)];
        speech.text = finalresult;
    }
    if(message.includes('USA')){
        let finalresult = usa[Math.floor(Math.random() * usa.length)];
        speech.text = finalresult;
    }

    //india
    if(message.includes('india')){
        let finalresult = india[Math.floor(Math.random() * india.length)];
        speech.text = finalresult;
    }
    if(message.includes('India')){
        let finalresult = india[Math.floor(Math.random() * india.length)];
        speech.text = finalresult;
    }

    //chile
    if(message.includes('chile')){
        let finalresult = chile[Math.floor(Math.random() * chile.length)];
        speech.text = finalresult;
    }
    if(message.includes('Chile')){
        let finalresult = chile[Math.floor(Math.random() * chile.length)];
        speech.text = finalresult;
    }
    //peru
    if(message.includes('peru')){
        let finalresult = peru[Math.floor(Math.random() * peru.length)];
        speech.text = finalresult;
    }
    if(message.includes('peru')){
        let finalresult = peru[Math.floor(Math.random() * peru.length)];
        speech.text = finalresult;
    }


    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})