<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://pataa.com
 * @since      1.0.0
 *
 * @package    Addressautofill
 * @subpackage Addressautofill/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Addressautofill
 * @subpackage Addressautofill/admin
 * @author     Sunil Ramsinghani <s.ramsinghani@pataa.com>
 */
class Addressautofill_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		add_action('admin_menu', array( $this, 'addPluginAdminMenu' ), 9);
		add_action('admin_init', array( $this, 'registerAndBuildFields' ));
		//add_action( 'woocommerce_admin_order_data_after_order_details',array( $this, 'pataa_display_order_data_in_admin' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_styles' ) );
	
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_admin_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Addressautofill_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Addressautofill_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		
		wp_enqueue_style( 'admincss', plugin_dir_url( __FILE__ ) . 'css/addressautofill-admin.css', array(), $this->version, 'all' );
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/addressautofill-admin.js', array( 'jquery' ), $this->version, false );
	}

	/**
	 * Register the admin settings menu
	 * 
	 * @since 1.0.0
	 */
	public function addPluginAdminMenu() {
		add_menu_page(  $this->plugin_name, 'Address Autofill', 'administrator', $this->plugin_name.'-settings', array( $this, 'displayPluginAdminSettings' ), 'dashicons-chart-area', 26 );
		
	}
	
	

	/**
	 * Callback function for displaying Admin Dashboard
	 */
	public function displayPluginAdminDashboard() {
		require_once plugin_dir_path( dirname( __FILE__ ) ).'admin/partials/'.$this->plugin_name.'-admin-display.php';
  	}
	
	  public function displayPluginAdminSettings() {
		// set this var to be used in the settings-display view
		//$active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'general';
		if(isset($_GET['error_message'])){
			add_action('admin_notices', array($this,'addressautofillSettingsMessages'));
			do_action( 'admin_notices', $_GET['error_message'] );
		}
		require_once 'partials/'.$this->plugin_name.'-admin-settings-display.php';
	}

	public function addressautofillSettingsMessages($error_message){
		switch ($error_message) {
			case '1':
				$message = __( 'There was an error adding this setting. Please try again.  If this persists, shoot us an email.', 'my-text-domain' );                 
				$err_code = esc_attr( 'plugin_name_example_setting' );                 
				$setting_field = 'plugin_name_example_setting';                 
				break;
		}
		$type = 'error';
		add_settings_error(
			   $setting_field,
			   $err_code,
			   $message,
			   $type
		   );
	}

	public function registerAndBuildFields() {
		/**
	 * First, we add_settings_section. This is necessary since all future settings must belong to one.
	 * Second, add_settings_field
	 * Third, register_setting
	 */     
	add_settings_section(
		// ID used to identify this section and with which to register options
		'settings_page_general_section', 
		// Title to be displayed on the administration page
		'',  
		// Callback used to render the description of the section
			array( $this, 'settings_page_display_general_account' ),    
		// Page on which to add this section of options
		'settings_page_general_settings'                   
	);
	
	unset($args);
	$args = array (
						'type'      => 'input',
						'subtype'   => 'password',
						'id'    => 'settings_page_example_setting',
						'name'      => 'settings_page_example_setting',
						'required' => 'true',
						'get_options_list' => '',
						'value_type'=>'normal',
						'wp_data' => 'option'
				);
	$dir=plugin_dir_url(__FILE__);
	add_settings_field(
		'settings_page_example_setting',
		'',
		array( $this, 'settings_page_render_settings_field' ),
		'settings_page_general_settings',
		'settings_page_general_section',
		$args
	);
	

	register_setting(
					'settings_page_general_settings',
					
					'settings_page_example_setting'
					);
		
	add_settings_section(
		// ID used to identify this section and with which to register options
		'settings_page_general_section_1', 
		// Title to be displayed on the administration page
		'',  
		// Callback used to render the description of the section
			array( $this, 'settings_page_display_general_account_1' ),    
		// Page on which to add this section of options
		'settings_page_general_settings'                   
	);
	
	unset($args_1);
	$args_1 = array (
						'type'      => 'input',
						'subtype'   => 'text',
						'id'    => 'settings_page_example_setting_1',
						'name'      => 'settings_page_example_setting_1',
						'required' => 'true',
						'get_options_list' => '',
						'value_type'=>'normal',
						'wp_data' => 'option'
				);
	$dir=plugin_dir_url(__FILE__);
	add_settings_field(
		'settings_page_example_setting_1',
		'',
		array( $this, 'settings_page_render_settings_field_1' ),
		'settings_page_general_settings',
		'settings_page_general_section_1',
		$args_1
	);
	

	register_setting(
					'settings_page_general_settings',
					
					'settings_page_example_setting_1'
					);
	add_settings_section("section", "Business Type", null, "settings_page_general_settings");
	add_settings_field("demo-radio", "", array(__CLASS__,'demo_radio_display'), "settings_page_general_settings", "section");
	register_setting("settings_page_general_settings", "demo-radio");
		
		add_settings_section("section_1", "Control Type", null, "settings_page_general_settings");
		add_settings_field("demo-radio_1", "", array(__CLASS__,'button_radio_display'), "settings_page_general_settings", "section_1");
		register_setting("settings_page_general_settings", "demo-radio_1");
		
		}

public static  function button_radio_display()
{
   ?>
   <div class="switch-field">
   		<input type="radio" id="radio-one" name="demo-radio_1" value="1" <?php checked(1, get_option('demo-radio_1'), true); ?>/>
		<label for="radio-one">Input </label>
		<input type="radio" id="radio-two" name="demo-radio_1" value="2" <?php checked(2, get_option('demo-radio_1'), true); ?> />
		<label for="radio-two">Button </label>
</div>
  <?php
}
	
	
public static  function demo_radio_display()
{
   ?>
   <div class="switch-field">
   		<input type="radio" id="radio-one" name="demo-radio" value="1" <?php checked(1, get_option('demo-radio'), true); ?>/>
		<label for="radio-one">Services </label>
		<input type="radio" id="radio-two" name="demo-radio" value="2" <?php checked(2, get_option('demo-radio'), true); ?> />
		<label for="radio-two">Product </label>
</div>
  <?php
}

public function settings_page_display_general_account() {
	echo '<p>These settings apply to address autofill functionality.</p>';
} 
public function settings_page_display_general_account_1() {
	echo '<p>Merchent ID</p>';
} 
public function settings_page_render_settings_field($args) {

	if($args['wp_data'] == 'option'){
		$wp_data_value = get_option($args['name']);
	} elseif($args['wp_data'] == 'post_meta'){
		$wp_data_value = get_post_meta($args['post_id'], $args['name'], true );
	}

	global $allowedposttags;
$allowed_atts = array(
	'align'      => array(),
	'class'      => array(),
	'type'       => array(),
	'id'         => array(),
	'dir'        => array(),
	'lang'       => array(),
	'style'      => array(),
	'xml:lang'   => array(),
	'src'        => array(),
	'alt'        => array(),
	'href'       => array(),
	'rel'        => array(),
	'rev'        => array(),
	'target'     => array(),
	'novalidate' => array(),
	'type'       => array(),
	'value'      => array(),
	'name'       => array(),
	'tabindex'   => array(),
	'action'     => array(),
	'method'     => array(),
	'for'        => array(),
	'width'      => array(),
	'height'     => array(),
	'data'       => array(),
	'title'      => array(),
);
$allowedposttags['form']     = $allowed_atts;
$allowedposttags['label']    = $allowed_atts;
$allowedposttags['input']    = $allowed_atts;
$allowedposttags['textarea'] = $allowed_atts;
$allowedposttags['iframe']   = $allowed_atts;
$allowedposttags['script']   = $allowed_atts;
$allowedposttags['style']    = $allowed_atts;
$allowedposttags['strong']   = $allowed_atts;
$allowedposttags['small']    = $allowed_atts;
$allowedposttags['table']    = $allowed_atts;
$allowedposttags['span']     = $allowed_atts;
$allowedposttags['abbr']     = $allowed_atts;
$allowedposttags['code']     = $allowed_atts;
$allowedposttags['pre']      = $allowed_atts;
$allowedposttags['div']      = $allowed_atts;
$allowedposttags['img']      = $allowed_atts;
$allowedposttags['h1']       = $allowed_atts;
$allowedposttags['h2']       = $allowed_atts;
$allowedposttags['h3']       = $allowed_atts;
$allowedposttags['h4']       = $allowed_atts;
$allowedposttags['h5']       = $allowed_atts;
$allowedposttags['h6']       = $allowed_atts;
$allowedposttags['ol']       = $allowed_atts;
$allowedposttags['ul']       = $allowed_atts;
$allowedposttags['li']       = $allowed_atts;
$allowedposttags['em']       = $allowed_atts;
$allowedposttags['hr']       = $allowed_atts;
$allowedposttags['br']       = $allowed_atts;
$allowedposttags['tr']       = $allowed_atts;
$allowedposttags['td']       = $allowed_atts;
$allowedposttags['p']        = $allowed_atts;
$allowedposttags['a']        = $allowed_atts;
$allowedposttags['b']        = $allowed_atts;
$allowedposttags['i']        = $allowed_atts;

	
	
	switch ($args['type']) {

		case 'input':
				$value = ($args['value_type'] == 'serialized') ? serialize($wp_data_value) : $wp_data_value;
				if($args['subtype'] != 'checkbox'){
						$prependStart = (isset($args['prepend_value'])) ? '<div class="input-prepend"> <span class="add-on">'.$args['prepend_value'].'</span>' : '';
						$prependEnd = (isset($args['prepend_value'])) ? '</div>' : '';
						$step = (isset($args['step'])) ? 'step="'.$args['step'].'"' : '';
						$min = (isset($args['min'])) ? 'min="'.$args['min'].'"' : '';
						$max = (isset($args['max'])) ? 'max="'.$args['max'].'"' : '';
						if(isset($args['disabled'])){
								// hide the actual input bc if it was just a disabled input the info saved in the database would be wrong - bc it would pass empty values and wipe the actual information
								echo wp_kses($prependStart.'<input type="'.$args['subtype'].'" id="'.$args['id'].'_disabled" '.$step.' '.$max.' '.$min.' name="'.$args['name'].'_disabled" size="40" disabled value="' . esc_attr($value) . '" /><input type="hidden" id="'.$args['id'].'" '.$step.' '.$max.' '.$min.' name="'.$args['name'].'" size="40" value="' . esc_attr($value) . '" />'.$prependEnd,$allowedposttags);
						} else {
								echo wp_kses($prependStart.'<input type="'.$args['subtype'].'" id="'.$args['id'].'" "'.$args['required'].'" '.$step.' '.$max.' '.$min.' name="'.$args['name'].'" size="40" value="' . esc_attr($value) . '" />'.$prependEnd,$allowedposttags);
						}
						/*<input required="required" '.$disabled.' type="number" step="any" id="'.$this->plugin_name.'_cost2" name="'.$this->plugin_name.'_cost2" value="' . esc_attr( $cost ) . '" size="25" /><input type="hidden" id="'.$this->plugin_name.'_cost" step="any" name="'.$this->plugin_name.'_cost" value="' . esc_attr( $cost ) . '" />*/

				} else {
						$checked = ($value) ? 'checked' : '';
						echo wp_kses('<input type="'.$args['subtype'].'" id="'.$args['id'].'" "'.$args['required'].'" name="'.$args['name'].'" size="40" value="1" '.$checked.' />',$allowedposttags);
				}
				break;
		default:
				# code...
				break;
	}
}
	
public function settings_page_render_settings_field_1($args) {

	if($args['wp_data'] == 'option'){
		$wp_data_value = get_option($args['name']);
	} elseif($args['wp_data'] == 'post_meta'){
		$wp_data_value = get_post_meta($args['post_id'], $args['name'], true );
	}
	
	global $allowedposttags;
$allowed_atts = array(
	'align'      => array(),
	'class'      => array(),
	'type'       => array(),
	'id'         => array(),
	'dir'        => array(),
	'lang'       => array(),
	'style'      => array(),
	'xml:lang'   => array(),
	'src'        => array(),
	'alt'        => array(),
	'href'       => array(),
	'rel'        => array(),
	'rev'        => array(),
	'target'     => array(),
	'novalidate' => array(),
	'type'       => array(),
	'value'      => array(),
	'name'       => array(),
	'tabindex'   => array(),
	'action'     => array(),
	'method'     => array(),
	'for'        => array(),
	'width'      => array(),
	'height'     => array(),
	'data'       => array(),
	'title'      => array(),
);
$allowedposttags['form']     = $allowed_atts;
$allowedposttags['label']    = $allowed_atts;
$allowedposttags['input']    = $allowed_atts;
$allowedposttags['textarea'] = $allowed_atts;
$allowedposttags['iframe']   = $allowed_atts;
$allowedposttags['script']   = $allowed_atts;
$allowedposttags['style']    = $allowed_atts;
$allowedposttags['strong']   = $allowed_atts;
$allowedposttags['small']    = $allowed_atts;
$allowedposttags['table']    = $allowed_atts;
$allowedposttags['span']     = $allowed_atts;
$allowedposttags['abbr']     = $allowed_atts;
$allowedposttags['code']     = $allowed_atts;
$allowedposttags['pre']      = $allowed_atts;
$allowedposttags['div']      = $allowed_atts;
$allowedposttags['img']      = $allowed_atts;
$allowedposttags['h1']       = $allowed_atts;
$allowedposttags['h2']       = $allowed_atts;
$allowedposttags['h3']       = $allowed_atts;
$allowedposttags['h4']       = $allowed_atts;
$allowedposttags['h5']       = $allowed_atts;
$allowedposttags['h6']       = $allowed_atts;
$allowedposttags['ol']       = $allowed_atts;
$allowedposttags['ul']       = $allowed_atts;
$allowedposttags['li']       = $allowed_atts;
$allowedposttags['em']       = $allowed_atts;
$allowedposttags['hr']       = $allowed_atts;
$allowedposttags['br']       = $allowed_atts;
$allowedposttags['tr']       = $allowed_atts;
$allowedposttags['td']       = $allowed_atts;
$allowedposttags['p']        = $allowed_atts;
$allowedposttags['a']        = $allowed_atts;
$allowedposttags['b']        = $allowed_atts;
$allowedposttags['i']        = $allowed_atts;

	switch ($args['type']) {

		case 'input':
				$value = ($args['value_type'] == 'serialized') ? serialize($wp_data_value) : $wp_data_value;
				if($args['subtype'] != 'checkbox'){
						$prependStart = (isset($args['prepend_value'])) ? '<div class="input-prepend"> <span class="add-on">'.$args['prepend_value'].'</span>' : '';
						$prependEnd = (isset($args['prepend_value'])) ? '</div>' : '';
						$step = (isset($args['step'])) ? 'step="'.$args['step'].'"' : '';
						$min = (isset($args['min'])) ? 'min="'.$args['min'].'"' : '';
						$max = (isset($args['max'])) ? 'max="'.$args['max'].'"' : '';
						if(isset($args['disabled'])){
								// hide the actual input bc if it was just a disabled input the info saved in the database would be wrong - bc it would pass empty values and wipe the actual information
								echo wp_kses($prependStart.'<input type="'.$args['subtype'].'" id="'.$args['id'].'_disabled" '.$step.' '.$max.' '.$min.' name="'.$args['name'].'_disabled" size="40" disabled value="' . esc_attr($value) . '" /><input type="hidden" id="'.$args['id'].'" '.$step.' '.$max.' '.$min.' name="'.$args['name'].'" size="40" value="' . esc_attr($value) . '" />'.$prependEnd,$allowedposttags);
						} else {
								echo wp_kses($prependStart.'<input type="'.$args['subtype'].'" id="'.$args['id'].'" "'.$args['required'].'" '.$step.' '.$max.' '.$min.' name="'.$args['name'].'" size="40" value="' . esc_attr($value) . '" />'.$prependEnd,$allowedposttags);
						}
						/*<input required="required" '.$disabled.' type="number" step="any" id="'.$this->plugin_name.'_cost2" name="'.$this->plugin_name.'_cost2" value="' . esc_attr( $cost ) . '" size="25" /><input type="hidden" id="'.$this->plugin_name.'_cost" step="any" name="'.$this->plugin_name.'_cost" value="' . esc_attr( $cost ) . '" />*/

				} else {
						$checked = ($value) ? 'checked' : '';
						echo wp_kses('<input type="'.$args['subtype'].'" id="'.$args['id'].'" "'.$args['required'].'" name="'.$args['name'].'" size="40" value="1" '.$checked.' />',$allowedposttags);
				}
				break;
		default:
				# code...
				break;
	}
}
}
