// TAREA DOS

const fs = require("fs");

let objeto1 = {"name": "Carlos", "surname": "Martinez", "age": 25};
let data = JSON.stringify(objeto1);


// fs.unlink("lectura.json", (err) => {
//    if (err) {
//       console.log(err);
//    }
//    console.log("file is deleted.");
// });

fs.writeFile("lectura.json", data, (err) => {
   if (err)
   console.log(err);
   else {
      console.log("Archivo creado correctamente");
      console.log("El archivo tiene el siguiente contenido");
      
      fs.readFile("lectura.json", "utf-8", (err, data) => {
         if (err) {
            console.log(err);
         } else {
         console.log(JSON.parse(data))};
})}
});

// FIN DE TAREA DOS


