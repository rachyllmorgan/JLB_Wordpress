
<?php
/**
* Enqueues child theme stylesheet, loading first the parent theme stylesheet.
*/
function themify_custom_enqueue_child_theme_styles() {
wp_enqueue_style( 'parent-theme-css', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'themify_custom_enqueue_child_theme_styles' );

function my_scripts() {
	
	wp_enqueue_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.min.js'
	);
	wp_enqueue_script(
		'angularjs-animate',
		get_stylesheet_directory_uri() . '/bower_components/angular-animate/angular-animate.min.js'
	);
	wp_enqueue_script(
		'my-scripts',
		get_stylesheet_directory_uri() . '/js/app.js',
		array( 'angularjs', 'angularjs-animate' )
	);
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );