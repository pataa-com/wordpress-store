<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://pataa.com
 * @since      1.0.0
 *
 * @package    Addressautofill
 * @subpackage Addressautofill/public/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->

<div class="autofill-container">
    <label class="pclabel">Pataa Code<span>*</span></label>
    <input id="pataacode" type="text" placeholder="KUMAR100"  maxlength="16" ></input>

    <button id="autofill" type="submit" class="os-btn os-btn-black" style="">Auto Fill</button>
</div>