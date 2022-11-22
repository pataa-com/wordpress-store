<?php

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Copyright 2021 Pataa Navigation Pvt Ltd.
*/

/**
 *
 * @link              https://pataa.com
 * @since             1.0.0
 * @package           Addressautofill
 *
 * @wordpress-plugin
 * Plugin Name:       Pataa Address Autofill
 * Plugin URI:       
 * Description:       This plugin will help users to fill their address using pataa code.
 * Version:           1.0.0
 * Author:            Pataa Navigations Pvt Ltd.
 * Author URI:        https://pataa.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       addressautofill
 * Domain Path:       /languages
 */



// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 */
define( 'ADDRESSAUTOFILL_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-addressautofill-activator.php
 */
function activate_addressautofill() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-addressautofill-activator.php';
	Addressautofill_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-addressautofill-deactivator.php
 */
function deactivate_addressautofill() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-addressautofill-deactivator.php';
	Addressautofill_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_addressautofill' );
register_deactivation_hook( __FILE__, 'deactivate_addressautofill' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-addressautofill.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 * 
 */

function run_addressautofill() {

	$plugin = new Addressautofill();
	$plugin->run();


}

run_addressautofill();
