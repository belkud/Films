import './style.css'

const firstLine = document.querySelector('#firstLine') as HTMLDivElement
// firstLine.addEventListener ('click', ()=>{
    // (возможно пригодится для трех линий)
    for (let i = 0; i < 10; i++) {
    }
    
    setInterval(()=>{
        const number = Math.round(Math.random()*9)
        firstLine.style.transition = `${number+3+'s'}`
        firstLine.style.transform = `translate(0px, ${number*100+'px'})`
        firstLine.style.filter = `blur(${(Math.round(Math.random()*10+5))+'px'})`
        console.log(firstLine.style.filter);
        console.log(number);
        
    },5000)
    // })
    
    console.log(Math.round(Math.random()*10+5));


    const restart = document.querySelector('#restart') as HTMLButtonElement
    restart.addEventListener ('click',()=> {
        // console.log(location.reload());
        console.log(Math.round(Math.random()));
        
    })