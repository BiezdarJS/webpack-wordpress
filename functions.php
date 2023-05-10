<?php

add_action('wp_enqueue_scripts', function() {
  wp_enqueue_script('main', get_stylesheet_directory_uri() . '/dist/bundle.js', [], '1.0.0', true);
});


?>