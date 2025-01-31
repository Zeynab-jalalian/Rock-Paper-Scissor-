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
    
   setTimeout(() => {
    game.classList.remove('start');
 
    user.src=e.target.querySelector('img').src;

   }, 2000);


    })


})