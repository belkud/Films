import './style.css'

const firstLine = document.querySelector('#firstLine') as HTMLDivElement
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

        firstLine.style.backgroundColor = 'green'
        // СОЗДАТЬ МАССИВ И В НЕМ ОТ 0 ДО 255 3 ОТДЕЛЬНЫХ ЧИСЛА
    },5000)
    
   


    const restart = document.querySelector('#restart') as HTMLButtonElement
    restart.addEventListener ('click',()=> {
        console.log(location.reload());
    })