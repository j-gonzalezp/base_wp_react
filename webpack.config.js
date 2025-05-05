// webpack.config.js
const path = require('path');
// Descomenta la siguiente línea si decides usar MiniCssExtractPlugin en producción
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  // Determina si estamos en modo producción o desarrollo
  const isProduction = argv.mode === 'production';

  return {
    // Punto de entrada de tu aplicación React
    entry: './react-src/index.jsx',

    // Configuración de salida
    output: {
      path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardarán los archivos compilados
      filename: 'bundle.js', // Nombre del archivo JavaScript principal
      publicPath: `/wp-content/themes/${path.basename(__dirname)}/dist/`, // Ruta pública para assets (importante para imágenes, fuentes, etc.)
      clean: true, // Limpia la carpeta 'dist' antes de cada build
    },

    // Modo de compilación (development o production)
    mode: isProduction ? 'production' : 'development',

    // Source maps para facilitar el debugging
    devtool: isProduction ? 'source-map' : 'eval-source-map', // 'eval-source-map' es más rápido para desarrollo

    // Configuración de módulos y loaders
    module: {
      rules: [
        // Regla para archivos JavaScript y JSX (usando Babel)
        {
          test: /\.(js|jsx)$/, // Aplica a archivos .js y .jsx
          exclude: /node_modules/, // No procesar archivos de node_modules
          use: {
            loader: 'babel-loader', // Usar babel-loader
            options: {
              presets: [
                '@babel/preset-env', // Transpila JS moderno
                ['@babel/preset-react', { runtime: 'automatic' }] // Transpila React/JSX
              ]
            }
          }
        },
        // Regla para archivos CSS (usando PostCSS para Tailwind y Autoprefixer)
        {
          test: /\.css$/i, // Aplica a archivos .css
          use: [
             // En producción podríamos extraer a un archivo CSS separado
             // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
             'style-loader', // Inyecta CSS en el DOM (más simple para desarrollo)
            'css-loader',    // Interpreta @import y url() como import/require()
            'postcss-loader', // Procesa CSS con PostCSS (aquí se usa Tailwind y Autoprefixer)
          ],
        },
        // Regla para manejar imágenes (opcional, si las importas en React)
        {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource', // Copia los archivos a la carpeta dist
           generator: {
              filename: 'images/[name].[hash][ext][query]' // Define cómo se nombran y dónde se guardan
           }
        },
        // Regla para manejar fuentes (opcional, si las importas)
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
               filename: 'fonts/[name].[hash][ext][query]'
            }
        },
      ]
    },

    // Configuración de resolución de módulos
    resolve: {
      // Extensiones que Webpack intentará resolver automáticamente
      extensions: ['.*', '.js', '.jsx'],
      // Alias para importaciones más limpias (¡CRUCIAL PARA SHADCN!)
      alias: {
        // Mapea '@/' a la carpeta 'react-src/'
        '@': path.resolve(__dirname, 'react-src/')
      }
    },

    // Plugins de Webpack (Descomenta si usas MiniCssExtractPlugin)
    plugins: [
      // new MiniCssExtractPlugin({
      //   filename: 'bundle.css', // Nombre del archivo CSS extraído
      // }),
    ].filter(Boolean), // Filtra valores null/undefined si no se usa el plugin

    // Opciones para el servidor de desarrollo o 'watch'
    watchOptions: {
        ignored: /node_modules/, // Ignorar cambios en node_modules
        poll: 1000, // Comprobar cambios cada segundo (puede ser útil en algunos sistemas)
    },

    // Optimización (más relevante para producción)
    optimization: {
      minimize: isProduction, // Minimizar el código solo en producción
      // Puedes añadir más optimizaciones aquí (splitChunks, etc.)
    },

     // Configuración de rendimiento (opcional)
     performance: {
        hints: isProduction ? 'warning' : false // Muestra advertencias sobre tamaño de bundle en producción
     }
  };
};