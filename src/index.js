

const moment = require('moment');

console.log(moment().format("DD MM YYYY"));
console.log(moment("2020-01-01","YYYY-MM-DD").isValid()); //true
console.log(moment("not-a-date","YYYY-MM-DD").isValid());

const saludo= "hola mundo";
console.log(saludo);

const saludo2 =()=> {
    alert("saludo desde alert");
}

saludo2();

