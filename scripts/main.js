function clock(){
    const deg = 6;


let ss = document.querySelector('.ss'),
    mm = document.querySelector('.mm'),
    hh = document.querySelector('.hh');

let digHours = document.querySelector('.digital-hour'),
    digMin = document.querySelector('.digital-min'),
    digSec = document.querySelector('.digital-sec');


    setInterval(()=>{
        const date = new Date();
        let hours = date.getHours() * 30,
         minute = date.getMinutes() * deg,
         second = date.getSeconds() * deg;

       hh.style.transform = `rotateZ(${hours + (minute / 12)}deg)`;
       mm.style.transform = `rotateZ(${minute}deg)`;
       ss.style.transform = `rotateZ(${second}deg)`;

       let digitalHours = date.getHours();

        if(digitalHours <= 9){
            digitalHours = '0' + digitalHours;
        }

       digHours.innerHTML = digitalHours + ':';

        let digitalMin = date.getMinutes();

        if(digitalMin <= 9){
            digitalMin = '0' + digitalMin;
        }

       digMin.innerHTML = digitalMin + ':';

       let digitalSec = date.getSeconds();
       if(digitalSec <= 9){
           digitalSec = '0' + digitalSec;
       }
        digSec.innerHTML = digitalSec;



    },0)

}
clock();