<?php
function mi_tema_enqueue_react_scripts() {
    $script_handle = 'mi-tema-react-app'; // Guardamos el handle en una variable

    // Registra y encola el script compilado por Webpack
    wp_enqueue_script(
        $script_handle, // Handle único para tu script
        get_template_directory_uri() . '/dist/bundle.js', // Ruta al archivo compilado
        array('wp-element'), // Dependencias (wp-element puede ser útil)
        '1.0.1', // Incrementa la versión si haces cambios
        true // Cargar en el footer
    );

    // Pasar datos de PHP a nuestro script JavaScript
    wp_localize_script(
        $script_handle, // El mismo handle del script al que queremos pasar datos
        'wpData', // Nombre del objeto JavaScript global que contendrá los datos (ej: window.wpData)
        array(
            // La URL base de la API REST
            'apiRoot' => esc_url_raw( rest_url() ),
            // La URL base del sitio (podría ser útil para otras cosas)
            'siteUrl' => esc_url_raw( site_url() ),
            // Es buena práctica pasar un nonce, incluso si no lo usas ahora para GET públicos
            // 'nonce' => wp_create_nonce( 'wp_rest' ) // Descomenta si necesitas autenticación/POST
        )
    );
}
// Engancha la función a la acción wp_enqueue_scripts
add_action('wp_enqueue_scripts', 'mi_tema_enqueue_react_scripts');

// Resto de tu functions.php...
?>