<?php
/**
 * Parse.ly
 *
 * @package      Parsely\wp-parsely
 * @author       Parse.ly
 * @copyright    2012 Parse.ly
 * @license      GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Parse.ly
 * Plugin URI:        https://www.parse.ly/help/integration/wordpress
 * Description:       This plugin makes it a snap to add Parse.ly tracking code to your WordPress blog.
 * Version:           2.4.1
 * Author:            Parse.ly
 * Author URI:        https://www.parse.ly
 * Text Domain:       wp-parsely
 * License:           GPL-2.0-or-later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: https://github.com/Parsely/wp-parsely
 * Requires PHP:      5.6
 * Requires WP:       4.0.0
 */

require 'src/class-parsely.php';

if ( class_exists( 'Parsely' ) ) {
	define( 'PARSELY_VERSION', Parsely::VERSION );
	define( 'PARSELY_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
	if ( ! defined( 'PARSELY_PLUGIN_URL' ) ) {
		define( 'PARSELY_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
	}
	$parsely = new Parsely();
}

require 'src/class-parsely-recommended-widget.php';

add_action( 'widgets_init', 'parsely_recommended_widget_register' );
/**
 * Register the Parse.ly Recommended widget.
 */
function parsely_recommended_widget_register() {
	register_widget( 'Parsely_Recommended_Widget' );
}
