"use strict";

/* 
1) El caballo de Mac es más oscuro que el de Smith, 2) pero más rápido y 3)más viejo
que el de Jack, 4)que es aún más lento que el de Willy, 5)que es más jóven que el de Mac*
6) que es más viejo que el de Smith, 7) que es más claro que el de Willy, 8) aunque el de Jack
es más lento y 9) más oscuro que el de Smith. ¿Cuál es el más viejo, cual el más lento
y cuál el más claro ?

.Jack .Willy .Smith . Mac

1) 
Más Claro:
Smith < Mac

9)
Más Claro:
Smith < Jack

7)
Más Claro:
Smith < Willy

Smith es el más claro


2)
Más Lento:
Jack < Mac

8)
Más Lento:
Jack < Smith


4)
Más lento:
Jack < Willy

más lento es Jack

5)
Más viejo: 
Mac < Willy

6)
Más viejo:
Mac < Smith

3)
Más Viejo:
Mac < Jack

Mac es el más viejo
*/

const hornys = {
  Jack: {
    claro: 0,
    viejo: 0,
    lento: 0,
  },
  Willy: {
    claro: 0,
    viejo: 0,
    lento: 0,
  },
  Smith: {
    claro: 0,
    viejo: 0,
    lento: 0,
  },
  Mac: {
    claro: 0,
    viejo: 0,
    lento: 0,
  },
  result: function () {
    if (
      hornys.Smith.claro < hornys.Mac.claro &&
      hornys.Smith.claro < hornys.Jack.claro &&
      hornys.Smith.claro < hornys.Willy.claro &&
      hornys.Jack.lento < hornys.Mac.lento &&
      hornys.Jack.lento < hornys.Smith.lento &&
      hornys.Jack.lento < hornys.Willy.lento &&
      hornys.Mac.viejo < hornys.Willy.viejo &&
      hornys.Mac.viejo < hornys.Smith.viejo &&
      hornys.Mac.viejo < hornys.Jack.viejo
    ) {
      return true;
    }
    return false;
  },
  interval: setInterval(() => {
    hornys.Jack.claro = Math.ceil(Math.random() * 4);
    hornys.Jack.viejo = Math.ceil(Math.random() * 4);
    hornys.Jack.lento = Math.ceil(Math.random() * 4);

    hornys.Willy.claro = Math.ceil(Math.random() * 4);
    hornys.Willy.lento = Math.ceil(Math.random() * 4);
    hornys.Willy.viejo = Math.ceil(Math.random() * 4);

    hornys.Smith.claro = Math.ceil(Math.random() * 4);
    hornys.Smith.viejo = Math.ceil(Math.random() * 4);
    hornys.Smith. lento = Math.ceil(Math.random() * 4);
    
    hornys.Mac.claro = Math.ceil(Math.random() * 4);
    hornys.Mac.viejo = Math.ceil(Math.random() * 4);
    hornys.Mac.lento = Math.ceil(Math.random() * 4);

    if (hornys.result()) {
      clearInterval(hornys.interval);
      console.log("caballo Jack: ", hornys.Jack);
      console.log("caballo Willy: ", hornys.Willy);
      console.log("caballo Smith: ", hornys.Smith);
      console.log("caballo Mac: ", hornys.Mac);
    }
  }, 10),
};
