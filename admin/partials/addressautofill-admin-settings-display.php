<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://pataa.com
 * @since      1.0.0
 *
 * @package    Addressautofill
 * @subpackage Addressautofill/admin/partials
 */

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
	'onclick'      => array(),
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

	
?>
<?php $dir=plugin_dir_url(__FILE__); ?>

<div class="container">
	<div class="white-box">
		<div class="d-flex align-items-center justify-content-between">
			<p class="m-0 bold mb-1">API Key</p>
			<a href="https://addressapi.pataa.com/" target="_blank" class="mb-1 d-inline-block">View pataa panel <?php  echo wp_kses('<img class="middle ml-5" src='.$dir.'../img/icons/exit-top-right.png alt="" width="12">',$allowedposttags); ?></a>
		</div>

		<div class="form-group form-pw">
		<?php settings_errors(); ?>  
		        <form method="POST" action="options.php">  
				<div class="form-pw">					
		            <?php 
		                settings_fields( 'settings_page_general_settings' );
						echo wp_kses('<img src='.$dir.'../img/icons/view.png alt="" onclick="showhides()" class="show-pass eye-icon"><img src='.$dir.'../img/icons/hidden.png alt="" onclick="showhides()" class="hide-pass eye-icon" style=" display: none; ">',$allowedposttags);
		                do_settings_sections( 'settings_page_general_settings' ); 
						do_settings_sections("demo-radio");	
					?>
				</div>  
			    <?php submit_button(); ?>  
				</form> 
		</div>
	</div>

	<h3 class="mt-3">FAQs:</h3>
	<div class="white-box p-0">
		<div class="faq-box">
			<h4>1. How can I enable and disable Pataa Address Autofill App?</h4>
			<p>Use wordpress setting to enable or disable pataa</p>
		</div>
		<div class="faq-box">
			<h4>2. Why should I Integrate pataa Address Autofill API into my checkout page?</h4>
			<p>Using our API, you can start accepting Pataa codes from customers and pass them to your courier or delivery partners to make the delivery easy. Click here to find out more about API Integration process.</p>
		</div>
		<div class="faq-box">
			<h4>3. What is the benefit of Integrating pataa autofill address API?</h4>
			<p>Integrating pataa API will help your customer save time, by allowing them to auto-fill their address, instead of manually entering the details.</p>
		</div>
		<div class="faq-box">
			<h4>4. How does pataa convert a long & unstructured address to an accurate geo tagged location?</h4>
			<p>Pataa allows you to pin your exact geo location and create an alpha numeric code for your address. You have to simply select a 3x3 meter block at the entrance of your doorstep on the digital map to mark the exact address location. Also, you can record voice directions, upload photos of your property, pin your nearest landmark, give additional instructions and more.</p>
		</div>
		<div class="faq-box">
			<h4>5. Does Pataa API provide Navigation?</h4>
			<p>Yes, Pataa captures the exact geo location of the customer’s address & then can suggest the most optimum route to the customer’s doorstep. It also allows the delivery partner to hear voice directions, check the nearby landmarks and see images of the property.</p>
		</div>
		<div class="faq-box">
			<h4>6. What other details can a merchant get from Address Auto-fill API other than address fields?</h4>
			<p>Along with the exact address, merchants can get details such as photos of the location, voice directions, landmark details and additional information regarding the user’s address.</p>
		</div>
		<div class="faq-box">
			<h4>7. How does Pataa work for building addresses of more than one floor?</h4>
			<p>Pataa address API works just like a street address. The customer will be able to add the floor and flat or office information along with the location of the building.</p>
		</div>
		<div class="faq-box">
			<h4>8. Will the Plugin take customers away from our checkout page?</h4>
			<p>No, the plugin won’t take your customers away from the checkout page. The plugin simply adds a field on the existing page, into which they can type their Pataa Code.</p>
		</div>
		<div class="faq-box">
			<h4>9. How do we educate our customers about the benefits of Pataa?</h4>
			<p>We have a lot of resources and branding material available to help you educate your customers and encourage them to use Pataa. Kindly get in touch with us to know more.</p>
		</div>
	</div>

</div>

