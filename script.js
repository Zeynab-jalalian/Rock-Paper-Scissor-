const game = document.querySelector('.container'),
    user = document.querySelector('.user img'),
    cpu = document.querySelector('.cpu img'),
    resultText = document.querySelector('.resultText'),
    options = document.querySelectorAll('.option');

options.forEach((img, index) => {
    img.addEventListener('click', (e) => {
    img.classList.add('active');
    options.forEach((img2,index2)=>{
        if(index!==index2){
            img2.classList.remove('active');
        }
    })
    
   user.src=cpu.src="img/rock.png";
   game.classList.add('start');
   resultText.innerHTML="Wait...";
    
   setTimeout(() => {
    game.classList.remove('start');
 
    user.src=e.target.querySelector('img').src;

    let randomIndex=Math.floor(Math.random() * 3);
    let cpuArr=["img/rock.png","img/paper.png","img/scissors.png"];
    cpu.src=cpuArr[randomIndex];
    
    let outcomes={
        PP:'Draw',
        SS:'Draw',
        RR:'Draw',

        PS:'cpu',
        PR:'user',

        SP:'user',
        SR:'cpu',

        RS:'user',
        RP:'cpu'

    }
   }, 2000);


    })


})