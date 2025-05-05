<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); // Para compatibilidad con hooks ?>

    <header>
        <h1><?php bloginfo('name'); ?></h1>
        <p><?php bloginfo('description'); ?></p>
    </header>

    <main>
        <!-- Este es el div donde React montará tu aplicación -->
        <div id="react-app-root">
            <!-- Puedes dejarlo vacío o poner un mensaje de carga inicial -->
            Cargando contenido interactivo...
        </div>

    </main>

    <footer>
        <p>© <?php echo date("Y"); ?> <?php bloginfo('name'); ?></p>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>