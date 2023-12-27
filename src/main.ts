import './style.css'



  //! Движение полос по экрану
const firstLine = document.querySelector('#firstLine') as HTMLDivElement
const secondLine = document.querySelector('#secondLine') as HTMLDivElement
const thirdLine = document.querySelector('#thirdLine') as HTMLDivElement

    
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

        // изменение цветов всех трех полос
        const numColor1 = Math.round(Math.random()*255)
        const numColor2 = Math.round(Math.random()*255)
        const numColor3 = Math.round(Math.random()*255)
 

        firstLine.style.backgroundColor = `rgb(${numColor1}, ${numColor2}, ${numColor3})`
        secondLine.style.backgroundColor = `rgb(${numColor2}, ${numColor1}, ${numColor3})`
        thirdLine.style.backgroundColor = `rgb(${numColor3}, ${numColor2}, ${numColor1})`
    
    },3000)
    


        let deg = 0
             setInterval(() => {
         deg+=360
        //  firstLine.style.rotate =`${deg + 'deg'}`
        //  firstLine.style.transition = 3+'s'
         secondLine.style.rotate =`${deg + 'deg'}`
         secondLine.style.transition = 6+'s'
        //  thirdLine.style.rotate =`${deg + 'deg'}`
        //  thirdLine.style.transition = 9+'s'
        }, 9000);
        
        
    //     const restart = document.querySelector('#restart') as HTMLButtonElement
    // restart.addEventListener ('click',()=> {
    //     deg+=360
   
    // })


    
    
    
    
    
    
    
    
    
    //! Двигающиеся шарики по экрану
    
    const starSky = document.querySelector('#starSky') as HTMLDivElement
    setInterval(()=> {
        for (let i = 0; i < starSky.children.length; i++) {
            
            let top = Math.round(Math.random()*100)
            let left = Math.round(Math.random()*100)
            
            let child= starSky.children[i]
            
            child.style.left = `${left + '%'}`
            child.style.top = `${top + '%'}`            
            starSky.children[i].style.display = 'block'
            
            setTimeout(()=> {
                starSky.children[i].style.opacity = '1'
                starSky.children[i].style.transition = 2+'s'
            },0)
            setTimeout(()=> {
                starSky.children[i].style.opacity = '0'
                starSky.children[i].style.transition = 2+'s'
            },2000)
        }
    }, 5000)
    

   


    // смена темы шариков
    const menu = document.querySelector('#menu') as HTMLDivElement
    const bubbles = document.querySelector('#bubbles') as HTMLDivElement
    const snowballs = document.querySelector('#snowballs') as HTMLDivElement
    const fireballs = document.querySelector('#fireballs') as HTMLDivElement
    // const menu = document.querySelector('#menu') as HTMLUListElement
    // const bubbles = document.querySelector('#bubbles') as HTMLUListElement
    // const snowballs = document.querySelector('#snowballs') as HTMLLIElement
    // const fireballs = document.querySelector('#fireballs') as HTMLLIElement

    menu.addEventListener ('click', ()=> {
        console.log(123);
        menu.style.backgroundColor = 'red'
    
    // console.log(bubbles.innerHTML='234');
    
    })
    
    
    //! Логотип Windows
    const aliveEmblem = document.querySelector('#aliveEmblem') as HTMLImageElement
    
    setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.opacity = '1' 
    })
    setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.scale = '1.1'
    }, 1500);
    setTimeout(() => {
       aliveEmblem.style.transition = 1 + 's' 
       aliveEmblem.style.scale = '1'
}, 2500);
    setTimeout(() => {
       aliveEmblem.style.transition = 1 + 's' 
       aliveEmblem.style.scale = '1.1'
}, 3500);
    setTimeout(() => {
       aliveEmblem.style.transition = 1 + 's' 
       aliveEmblem.style.scale = '1'
}, 4500);
    setTimeout(() => {
       aliveEmblem.style.transition = 1 + 's' 
       aliveEmblem.style.scale = '1.1'
}, 5500);
    setTimeout(() => {
       aliveEmblem.style.transition = 1 + 's' 
       aliveEmblem.style.scale = '1'
}, 6500);
    setTimeout(() => {
       aliveEmblem.style.transition = 6 + 's' 
       aliveEmblem.style.rotate = 360 + 'deg' 
}, 7500);
setTimeout(() => {
    aliveEmblem.style.transition = 1 + 's' 
    aliveEmblem.style.opacity = '0' 
}, 13500);



setInterval(() => {
    setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.opacity = '1' 
     })
     setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.scale = '1.1'
 }, 1500);
     setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.scale = '1'
 }, 2500);
     setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.scale = '1.1'
 }, 3500);
     setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.scale = '1'
 }, 4500);
     setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.scale = '1.1'
 }, 5500);
     setTimeout(() => {
        aliveEmblem.style.transition = 1 + 's' 
        aliveEmblem.style.scale = '1'
 }, 6500);
     setTimeout(() => {
        aliveEmblem.style.transition = 6 + 's' 
        aliveEmblem.style.rotate = 360 + 'deg' 
 }, 7500);
 setTimeout(() => {
     aliveEmblem.style.transition = 1 + 's' 
     aliveEmblem.style.opacity = '0' 
 }, 13500);
}, 15000);



 









    const api = ('https://www.ozon.ru/category/smartfony-15502/')
    console.log(api);
    
    // const api2 = ('https://avatars.githubusercontent.com/u/126806058?v=4')

    const telephones = document.querySelector('#telephones') as HTMLDivElement
    



    async function mobile() {
        const response = await fetch('https://api.github.com/users/belkud')
        const myPage = await response.json()
        
        console.log(myPage);
        telephones.innerHTML = `
        <h3>Мой логин в Гитхаб: ${myPage.login}</h3>
        <img id="avatar" src="https://avatars.githubusercontent.com/u/126806058?v=4 " alt="" srcset="">
        <div>${myPage.gists_url}</div>
        `
        
    }
    mobile()
    
    
    const square = document.querySelector ('#square') as HTMLDivElement
    square.addEventListener ('click', ()=> {
        console.log(square.style.color = 'aliceblue');
        square.style.color = 'aliceblue'
        
        
    })
    

    async function todos(){
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        
        const json = await response.json() 
         //! try catch - проверка на ошибки (НЕТУ ДАЛЬНЕЙШЕЙ ОСТАНОВКИ ДРУГИХ КОДОВ)
        try {
            
            //!    проверка пришёл или нет ответ с сервера
         if (response.ok) {
             console.log(response.status);        
         } else {
             console.log(response.status);        
         }
 
     } catch (error) {
         console.log('ошибка ' + error.message);
         
     }
    }

    todos()


