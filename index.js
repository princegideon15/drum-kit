
for(var i = 0 ; i < document.querySelectorAll('.drum').length; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function(){

        var $this = this;
        $this.style.color = 'white';
        var btn = this.innerHTML;
        
        makeSound(btn);
        buttonAnimation(btn);

        setTimeout(function(){
            $this.style.color = '#DA0463';
        }, 100);
    });

    
    document.addEventListener('keypress', function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
        const $this = document.querySelector(`.${event.key}`);
        $this.style.color = 'white';
        
        setTimeout(function(){
            $this.style.color = '#DA0463';
        }, 100);
    });

}

function buttonAnimation(key){
    const animation = document.querySelector(`.${key}`);
    animation.classList.add('pressed');

    setTimeout(function(){
        animation.classList.remove('pressed');
    }, 100);
}

function makeSound(key){
    switch(key){
        case 'w': 
        var tom1 = new Audio('sounds/tom-1.mp3'); 
        tom1.play();
        break;
        case 'a': 
        var tom1 = new Audio('sounds/tom-2.mp3'); 
        tom1.play();
        break;
        case 's': 
        var tom1 = new Audio('sounds/tom-3.mp3'); 
        tom1.play();
        break;
        case 'd': 
        var tom1 = new Audio('sounds/tom-4.mp3'); 
        tom1.play();
        break;
        case 'j': 
        var tom1 = new Audio('sounds/crash.mp3'); 
        tom1.play();
        break;
        case 'k': 
        var tom1 = new Audio('sounds/snare.mp3'); 
        tom1.play();
        break;
        case 'l': 
        var tom1 = new Audio('sounds/kick-bass.mp3'); 
        tom1.play();
        break;
        default: console.log(this.innerHTML);
    }
}
