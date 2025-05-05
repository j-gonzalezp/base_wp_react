<?php

// ** Función existente para encolar Scripts y pasar Datos **
function mi_tema_enqueue_react_scripts() {
    $script_handle = 'mi-tema-react-app';
    wp_enqueue_script(
        $script_handle,
        get_template_directory_uri() . '/dist/bundle.js',
        array('wp-element'),
        '1.0.3', // Incrementa versión
        true
    );
    wp_localize_script(
        $script_handle,
        'wpData',
        array(
            'apiRoot' => esc_url_raw( rest_url() ),
            'siteUrl' => esc_url_raw( site_url() ),
            'themeUrl' => get_template_directory_uri(),
            // Ya no pasamos el basename
            // 'nonce' => wp_create_nonce( 'wp_rest' )
        )
    );
}
add_action('wp_enqueue_scripts', 'mi_tema_enqueue_react_scripts');

// ** Registrar Query Var (sin cambios) **
function mi_tema_register_query_vars($vars) {
    $vars[] = 'is_react_app';
    return $vars;
}
add_filter('query_vars', 'mi_tema_register_query_vars');

// ** NUEVAS Rewrite Rules para la RAÍZ del sitio **
function mi_tema_rewrite_rules() {
    // Regla para la página principal (ROOT)
    add_rewrite_rule(
        '^/?$',                      // Regex: Coincide con la raíz / (opcionalmente)
        'index.php?is_react_app=1', // Target: Carga index.php y setea query var
        'top'                       // Prioridad
    );

    // Regla para las regiones /mbn-slug/
    add_rewrite_rule(
        '^mbn-([^/]+)/?$',           // Regex: Coincide con /mbn- seguido de slug
        'index.php?is_react_app=1', // Target
        'top'
    );

    // Regla para /acerca-de/
    add_rewrite_rule(
        '^acerca-de/?$',             // Regex: Coincide con /acerca-de/
        'index.php?is_react_app=1', // Target
        'top'
    );

    // Regla para /contacto/
    add_rewrite_rule(
        '^contacto/?$',              // Regex: Coincide con /contacto/
        'index.php?is_react_app=1', // Target
        'top'
    );

    // Podrías añadir más reglas específicas o una más genérica al final
    // para otras rutas de React si las necesitas.
}
add_action('init', 'mi_tema_rewrite_rules');

// ** Forzar la carga de index.php (sin cambios) **
function mi_tema_template_include($template) {
    if (get_query_var('is_react_app')) {
        $new_template = locate_template(array('index.php'));
        if (!empty($new_template)) {
            return $new_template;
        }
    }
    return $template;
}
add_filter('template_include', 'mi_tema_template_include', 99);

/*
 * ¡¡¡ IMPORTANTE !!!
 * Después de estos cambios en functions.php, ve a "Ajustes" -> "Enlaces permanentes"
 * en WP Admin y HAZ CLIC EN "GUARDAR CAMBIOS" OTRA VEZ.
 */

?>