//documentacion sacada de la pagina de webpack
const path = require('path');

module.exports = {
    entry: './src/index.js', //indica cual va a ser mi entrada
    output: {
        filename: 'script.js', //'main.js', podemos cambiar el nombre de esta carpeta por defecto y activarla con un npx
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};

