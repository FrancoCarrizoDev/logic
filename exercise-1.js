'use strict'
/* 
LOS CUATRO ATLETAS
De cuatro corredores de atletismo, se sabe que Carlos ha llegado inmediatamente detrás de Beto
y Denis ha llegado en medio de Ale y Carlos. ¿Podría usted calcular el orden de llegada ?

1.Beto
2.Carlos
3.Denis
4.Ale

*/

const atlethes = {
    Ale: 0,
    Beto: 0,
    Carlos: 0,
    Denis: 0,
    result : function() {
        if(atlethes.Carlos > atlethes.Beto && atlethes.Denis > atlethes.Carlos && atlethes.Denis < atlethes.Ale){
            return true
        }
        return false
    },
    interval : setInterval(() => {
            atlethes.Ale = Math.ceil(Math.random()*4)
            atlethes.Beto = Math.ceil(Math.random()*4)
            atlethes.Carlos = Math.ceil(Math.random()*4)
            atlethes.Denis = Math.ceil(Math.random()*4)

            if(atlethes.result()){
                clearInterval(atlethes.interval)
                console.log("atleta Ale: ", atlethes.Ale)
                console.log("atleta Beto: ", atlethes.Beto)
                console.log("atleta Carlos: ", atlethes.Carlos)
                console.log("atleta Denis: ", atlethes.Denis)
            }
        }, 10)
}


