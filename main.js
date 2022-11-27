const dynamicContent= document.getElementById("dynamic-text");
const phrases=["Student...", "Software Engineer...","UX Designer..."];
let phraseIndex=0;
let lettetrIndex=0;
const typingspeed =150;
const erasingspeed=75;

function printLetters(phrase){
    if(lettetrIndex== phrase.length){
        clearLetters();
    }
    else if(lettetrIndex< phrase.length){
        dynamicContent.textContent+= phrase.charAt(lettetrIndex);
        lettetrIndex +=1;
        setTimeout(function(){
            printLetters(phrase)
        }, typingspeed)

    }
}

function clearLetters(){
    if(lettetrIndex== -1){
        phraseIndex= (phraseIndex+1)% phrases.length;
        lettetrIndex = 0;
        printLetters(phrases[phraseIndex])
    }
    else if(lettetrIndex>-1){
        let updatePhrase = "";
        for (let index = 0; index < lettetrIndex; index++){
            updatePhrase+= phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent=updatePhrase;
        lettetrIndex-=1;
        setTimeout(clearLetters,erasingspeed)
    }
}

printLetters(phrases[phraseIndex])


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("menu-button").addEventListener("click", ShowMenu);
    document.getElementById("close-menu").addEventListener("click", closeMenu);

    function ShowMenu(){
        const menu= document.querySelector("section.menu");
        menu.style.height="100%";
    }

    function closeMenu(){
        const menu= document.querySelector("section.menu");
        menu.style.height="0";
    }

    function addClickToMenuItems(){
        const menuItems= document.querySelectorAll("section.menu nav ul > li");
        for(let menuItem of menuItems){
            menuItem.addEventListener("click", closeMenu);
        }
    }

    addClickToMenuItems();

    window.addEventListener("scroll", function(){
        console.log(this.window.scrollY)
        let intro = this.document.querySelector(".intro");
        if(this.window.scrollY >= (intro.offsetHeight + intro.offsetTop)){
            this.document.querySelector(".header").style.position="sticky";
        }else{
            this.document.querySelector(".header").style.position="revert";
        }
    })
    
})
