import './style.css'

const firstLine = document.querySelector('#firstLine') as HTMLDivElement
const secondLine = document.querySelector('#secondLine') as HTMLDivElement
const thirdLine = document.querySelector('#thirdLine') as HTMLDivElement
    // (возможно пригодится для трех линий)
    
    // for (let i = 1; i < 2; i++) {
    //     let lineMassive = [`${i*8}`, 1, 1]
    //     console.log(lineMassive);
    // }
    
    
    
    
    setInterval(()=>{
        
        // прокрутка первой полосы
        const line1 = Math.round(Math.random()*9)
        firstLine.style.transition = `${line1+1+'s'}`
        firstLine.style.transform = `translate(0px, ${line1*100+'px'})`
        firstLine.style.filter = `blur(${(Math.round(Math.random()*20+5))+'px'})`
        
        // прокрутка второй полосы
        const line2 = Math.round(Math.random()*9)
        secondLine.style.transition = `${line2+1+'s'}`
        secondLine.style.transform = `translate(0px, ${line2*100+'px'})`
        secondLine.style.filter = `blur(${(Math.round(Math.random()*20+5))+'px'})`
        
        // прокрутка третьей полосы
        const line3 = Math.round(Math.random()*9)
        thirdLine.style.transition = `${line3+1+'s'}`
        thirdLine.style.transform = `translate(0px, ${line3*100+'px'})`
        thirdLine.style.filter = `blur(${(Math.round(Math.random()*20+5))+'px'})`
        
        // console.log(line1);
        // console.log(line2);
        // console.log(line3);

        // изменение цветов всех трех полос
        const numColor1 = Math.round(Math.random()*255)
        const numColor2 = Math.round(Math.random()*255)
        const numColor3 = Math.round(Math.random()*255)
 

        firstLine.style.backgroundColor = `rgb(${numColor1}, ${numColor2}, ${numColor3})`
        secondLine.style.backgroundColor = `rgb(${numColor2}, ${numColor1}, ${numColor3})`
        thirdLine.style.backgroundColor = `rgb(${numColor3}, ${numColor2}, ${numColor1})`
    
    
        
        
    },3000)
    
    
    const restart = document.querySelector('#restart') as HTMLButtonElement
    restart.addEventListener ('click',()=> {
        // console.log(location.reload());
        firstLine.style.transition = .5+'s'
        
    })
