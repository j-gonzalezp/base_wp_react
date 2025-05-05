<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title> <!-- Título más estándar -->
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php // Podrías incluir un header PHP aquí si quieres uno global NO manejado por React ?>
    <!-- <header> -->
        <!-- Contenido del header PHP -->
    <!-- </header> -->

    <main id="primary" class="site-main">
        <!-- Este es el div donde React montará tu aplicación -->
        <!-- El ID coincide con tu react-src/index.jsx -->
        <div id="react-app-root">
            <!-- Mensaje de carga inicial (React lo reemplazará) -->
            <p style="text-align: center; padding: 2em;">Cargando aplicación...</p>
        </div>
    </main>

    <?php // Podrías incluir un footer PHP aquí ?>
    <!-- <footer> -->
        <!-- Contenido del footer PHP -->
    <!-- </footer> -->

    <?php wp_footer(); ?>
</body>
</html>