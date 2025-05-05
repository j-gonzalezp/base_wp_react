const path = require('path');

module.exports = {
  // 1. Punto de Entrada: ¿Dónde empieza Webpack?
  entry: './react-src/index.jsx', // Nuestro archivo principal de React

  // 2. Salida: ¿Dónde deja Webpack el archivo compilado?
  output: {
    filename: 'bundle.js', // Nombre del archivo final
    path: path.resolve(__dirname, 'dist'), // Carpeta 'dist' que creamos
  },

  // 3. Modo: Desarrollo (más fácil de depurar) o Producción (optimizado)
  //    Lo controlaremos mejor con los scripts de npm, pero podemos poner un default.
  mode: 'development',
  watch: false, // Lo controlamos con --watch en el script de npm

  // 4. Módulos y Reglas: ¿Cómo procesar diferentes tipos de archivos?
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplicar a archivos .js y .jsx
        exclude: /node_modules/, // No procesar archivos de node_modules
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar
          options: {
             // Podemos referenciar el .babelrc o poner presets aquí
             // Como ya tenemos .babelrc, no es estrictamente necesario aquí
             // presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
      // Aquí podrías añadir reglas para CSS, SASS, imágenes, etc. si lo necesitas más adelante
    ]
  },

  // 5. Resoluciones: Para poder importar archivos sin poner la extensión
  resolve: {
    extensions: ['.js', '.jsx'], // Buscará .js y .jsx automáticamente
  },

  // 6. Source Maps: Para facilitar la depuración en el navegador
  devtool: 'inline-source-map', // Bueno para desarrollo
};