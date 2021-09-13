let objinicial = {"name": "", "surname": "", "age": ""};

function callback1() {
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`¿Cual es tu nombre?: `, (answer1) => {
    objinicial.name = answer1;
  rl.question(`Vale, ahora dime tu apellido, ${answer1}: `, (answer2) => {
      objinicial.surname = answer2;
      rl.question(`¡Mucho gusto, ${answer1} ${answer2}, ¿Que edad tienes?: ` , (answer3) => {
          objinicial.age = parseFloat(answer3)
          console.log(`Tus datos son: ${answer1} ${answer2} y tienes ${answer3} años.`);
          rl.close();
          callback2(objinicial);
      })
  })
  
});
};

function callback2(objeto_recibido) {

const fs = require("fs");

let nuevoobjeto = JSON.stringify(objeto_recibido);
let data = nuevoobjeto;


fs.writeFile("resultadotarea3.json", data, (err) => {
    if (err)
    console.log(err);
    else {
       console.log("Archivo creado correctamente");
       console.log("El archivo tiene los siguientes datos:");
       }
 });
 
 fs.readFile("resultadotarea3.json", "utf-8", (err, data) => {
    if (err) {
       console.log(err);
    }
    console.log(JSON.parse(data));
 });

}

callback1();