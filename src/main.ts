import './style.css'

const firstLine = document.querySelector('#firstLine') as HTMLDivElement
    // (возможно пригодится для трех линий)
    
    // for (let i = 1; i < 2; i++) {
    //     let lineMassive = [`${i*8}`, 1, 1]
    //     console.log(lineMassive);
    // }
    
    
    
    
    setInterval(()=>{
        const number = Math.round(Math.random()*9)
        firstLine.style.transition = `${number+3+'s'}`
        firstLine.style.transform = `translate(0px, ${number*100+'px'})`
        firstLine.style.filter = `blur(${(Math.round(Math.random()*20+5))+'px'})`
        console.log(firstLine.style.filter);
        console.log(number);


        const number1 = Math.round(Math.random()*255)
        const number2 = Math.round(Math.random()*255)
        const number3 = Math.round(Math.random()*255)
    console.log(number1);
    console.log(number2);
    console.log(number3);

        firstLine.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`
    },5000)
    
   


    const restart = document.querySelector('#restart') as HTMLButtonElement
    restart.addEventListener ('click',()=> {
        console.log(location.reload());
    })