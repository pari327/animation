const section= document.querySelector('section');
function hearts(){
    const creat=document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML=`💓            🌹`;
    creat.style.left=Math.random()*100 +'VW';
    creat.style.animationDuration=Math.random()*3 +2+'s';
    section.appendChild(creat);
    setTimeout(() =>{
        creat.remove();
    },3000)
}
hearts();
 setInterval(hearts,100);