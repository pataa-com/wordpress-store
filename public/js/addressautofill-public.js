jQuery(function ($) {


	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	const countryNames = {
		"Virgin Island":"Virgin Islands (US)",
		"British Virgin Islands":"Virgin Islands (British)",
		"Czech":"Czech Republic",
		"Niue Island":"Niue",
		"Trinidad & Tobago":"Trinidad and Tobago",
		"Netherlands Antilles":"Netherlands",
		"French Southern and Antarctic Lands":"France",
		"French Southern and Antarctic Lands":"French Guiana",
		"French Southern and Antarctic Lands":"French Polynesia",
		"French Southern and Antarctic Lands":"French Southern Territories",
		"Democratic Republic of Congo":"Congo (Brazzaville)",
		"Democratic Republic of Congo":"Congo (Kinshasa)",
		"Wales (United kingdom -UK)":"United Kingdom (UK)",
		"England (United kingdom -UK)":"United Kingdom (UK)",
		"Northern Ireland (United kingdom -UK)":"United Kingdom (UK)",
		"Scotland (United kingdom -UK)":"United Kingdom (UK)",
		"United Arab Emirates (UAE)":"United Arab Emirates",
	};
	
	function getCountryName(country) {
		if (country in countryNames) {
		  return countryNames[country];
		} else {
		  return country;
		}
	  }

	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	$('body').on('focusin', '#pataacode', function ( ) {
		$('.pataa-examples').hide();
		if($(this).val().length==0)
			{
				$('.pataa-examples').show();
							
			}
		
		});
	
	$('body').on('focusout', '#pataacode', function ( ) {
		
		if($(this).val().length==0)
			{
				$('.pataa-examples').hide();
				$(this).attr('placeholder', 'Enter Pataa')
							
			}
		});
	$('body').on('click', '.pataa-examples', function ( ) {
		$(this).hide();
	});
	$('body').on('paste', '#pataacode', function (e) {
		 var str = (e.originalEvent || e).clipboardData.getData('text/plain');	
		str = str.replace(/\s/g,'');
		str = str.replace(/[^a-z0-9]/gi, ''); 
		var valLength = str.length;
		var maxCount = $(this).attr('maxlength');
		if(valLength>maxCount){
			str =str.substring(0,maxCount);
		}
		
		
	});
			
	$('body').on('keyup', '#pataacode', function ( ) {
		
		var str = $(this).val();
		str = str.replace(/\s/g,'');
		str = str.replace(/[^a-z0-9]/gi, '');
		
		$(this).val(str);
		let pataaCode = $(this).val().charAt(0);	

	 	if (pataaCode!='^' && $(this).val().length >0){
			if(!$(this).val().includes("^"))
			{
				let value = `^${$(this).val()}`;
				$(this).val(value);
			}
    	 }
		if($(this).val().includes("^"))
			{
				let pataaCode_chk = $('#pataacode').val().charAt(0);
				if(pataaCode_chk==='^'&& $(this).val().length ==1)
				{
					$(this).val($('#pataacode').val().slice(1));
				}
				let value1 = $(this).val();
				value1 = value1.substring(value1.indexOf("^")+ 0);
				$(this).val(value1);
				
			}
		
		if($(this).val().length<1)
			{
				$('.pataa-examples').show();
			}
		else{
				$('.pataa-examples').hide();
			}
		 if($(this).val().length==0)
		 {
			make_blank();
		 }
		 if($(this).val().length>=7 )
		 {
			
			$("#succ-msg").hide();
        	$("#err-msg").hide();
			$("#first-msg").show();
			var element = document.getElementById("pataa-unavailable");
			element.style.display = "none";
			var element = document.getElementById("pataa-available");
			element.style.display = "none";
			var element = document.getElementById("autofill");
			element.style.display = "block";
			var element3 = document.getElementById("main-code");
			element3.classList.remove("succ-msg-sec");
			document.getElementById("err-msg").style.display = "none"; 
			var element3 = document.getElementById("main-code");
			element3.classList.remove("pataa-not-found");
			$("#add_text").html('Autofill');
			$('#autofill_icon').show();
		 }
		 if($(this).val().length<8)
		 {
			 
			$("#succ-msg").hide();
        	$("#err-msg").hide();
			$("#first-msg").show();
			var element = document.getElementById("pataa-unavailable");
			element.style.display = "none";
			var element = document.getElementById("pataa-available");
			element.style.display = "none";
			var element = document.getElementById("autofill");
			element.style.display = "block";
			var element3 = document.getElementById("main-code");
			element3.classList.remove("pataa-not-found");
			document.getElementById("err-msg").style.display = "none"; 
			$('#autofill_icon').hide();
			$("#add_text").html('Add Address');
			
		 }
	});

        $("#pataacode").keypress(function (e) {
            var keyCode = e.keyCode || e.which;
            //Regex for Valid Characters i.e. Alphabets and Numbers.
            var regex = /^[A-Za-z0-9]+$/;
 
            //Validate TextBox value against the Regex.
            var isValid = regex.test(String.fromCharCode(keyCode));
            if (!isValid) {
               }
 
            return isValid;
        });
	if(isAndroid) {
	$("#pataacode").keyup(function (e) {
           e.target.value = e.target.value.replace(/[^A-Za-z0-9]/g,'');
    		//return false;
		let pataaCode = $(this).val().charAt(0);	

	 	if (pataaCode!='^' && $(this).val().length >0){
			if(!$(this).val().includes("^"))
			{
				let value = `^${$(this).val()}`;
				$(this).val(value);
			}
    	 }
		if($(this).val().includes("^"))
			{
				let pataaCode_chk = $('#pataacode').val().charAt(0);
				if(pataaCode_chk==='^'&& $(this).val().length ==1)
				{
					$(this).val($('#pataacode').val().slice(1));
				}
				let value1 = $(this).val();
				value1 = value1.substring(value1.indexOf("^")+ 0);
				$(this).val(value1);
				
			}
		
		if($(this).val().length<1)
			{
				$('.pataa-examples').show();
			}
		else{
				$('.pataa-examples').hide();
			}
		 if($(this).val().length==0)
		 {
			make_blank();
		 }
		 if($(this).val().length>=7)
		 {
			$("#succ-msg").hide();
        	$("#err-msg").hide();
			$("#first-msg").show();
			var element = document.getElementById("pataa-unavailable");
			element.style.display = "none";
			var element = document.getElementById("pataa-available");
			element.style.display = "none";
			var element = document.getElementById("autofill");
			element.style.display = "block";
			var element3 = document.getElementById("main-code");
			element3.classList.remove("succ-msg-sec");
			document.getElementById("err-msg").style.display = "none"; 
			var element3 = document.getElementById("main-code");
			element3.classList.remove("pataa-not-found");
			$("#add_text").html('Autofill');
			$('#autofill_icon').show();
		 }
		 if($(this).val().length<8)
		 {
			 $("#succ-msg").hide();
        	$("#err-msg").hide();
			$("#first-msg").show();
			var element = document.getElementById("pataa-unavailable");
			element.style.display = "none";
			var element = document.getElementById("pataa-available");
			element.style.display = "none";
			var element = document.getElementById("autofill");
			element.style.display = "block";
			var element3 = document.getElementById("main-code");
			element3.classList.remove("pataa-not-found");
			document.getElementById("err-msg").style.display = "none"; 
			$('#autofill_icon').hide();
			$("#add_text").html('Add Address');
			
		 }
        });
	}
	$("#what-create-pataa").click(function() {
		$('#myModal').modal('hide');
		setTimeout(function() {
			$('#myModal1').modal('show');
		}, 500);
		
	});

	$('body').on('click', '#autofill', function (e) {
		e.preventDefault();		
		var pataacode;
		let pataaCode_chk = $('#pataacode').val().charAt(0);
		if(pataaCode_chk==='^')
		{
			pataacode = $('#pataacode').val().slice(1);
		}
		else
		{
			pataacode = $('#pataacode').val();
		}
		pataacode=pataacode.replace(/^\s+|\s+$/gm,'');
		var apikey = my_key.api_key;
		
		if(pataacode.length<=6)
		{
			var req_obj= localStorage.getItem("res_obj");
			if(req_obj)
				{
					req_obj=JSON.parse(req_obj);
				}
			else
				{
					req_obj={}
					req_obj.type="";
				}
			/*if(req_obj!="")
				{
					req_obj=JSON.parse(req_obj);
				}*/
			req_obj.type=my_key.type;
			var innerDiv = document.createElement('div');
			document.getElementById("create-pataa-content").appendChild(innerDiv);
			innerDiv.innerHTML = "<create-pataa auto-Fill-Pataa-Code='"+JSON.stringify(req_obj)+"'></create-pataa>";
			var originalDOM="";
			var button = document.querySelector('create-pataa');
			if(button !== null)
			{
				button.addEventListener('createPataaCode', (event) => {
				let text1 = "^";
					console.log(event.detail);
				let value = text1.concat(event.detail.pataaCode.toUpperCase());
				event.detail.type = my_key.type;

				console.log(event.detail);
				localStorage.setItem("res_obj", JSON.stringify(event.detail));
				document.getElementById('pataacode').value = value;
				document.getElementById('close-btn').click();
				document.getElementById('autofill').click(); 
			});
			}
			var button1 = document.querySelector('create-pataa');
			
			if(button1 !== null)
			{				
				button1.addEventListener('closeWindow', (event) => {			
				document.getElementById('close-btn').click();
				});
			}
			$('#createPataa').animate({opacity :'1',});
			$('.overlayBox').animate({opacity :'1',}).css({'visibility' :'visible'});
			$('#createPataa').show();
			return false;
		}
		if (/^([A-Za-z0-9\-]{7,15})$/.test(pataacode)) {
		//if (/^([a-zA-Z0-9]{7,11})$/.test(pataacode)) {
			var host = window.location.protocol + "//" + window.location.host + "/";
			
			$.ajax({
					method: "POST",
					url: "https://apiv2.pataa.com/get-pataa-web",
					//url: "https://pataa.in:5059/get-pataa",
				
					data: {
						"api_key": apikey,
						"pc": pataacode,
						"device_type":"web",
						"web_url":host
						
					}
				})
				.done(function (response) {
					if (response.status == 200) {
						
						var add1 =response.result.pataa.address1+ ", ";
							if(add1==", ")
								{
									var add1 = response.result.pataa.address1;
								}
						
						
							var add2 =response.result.pataa.address2+ ", ";
						
							if(add2==", ")
								{
									var add2 = response.result.pataa.address2;
								}
						
						
							var add3 =response.result.pataa.address3+ ", ";
							if(add3==", ")
								{
									var add3 = response.result.pataa.address3;
								}
						
						
						let add_1 ="^"+pataacode+", " +add1+  add2 + add3 + response.result.pataa.address4
						add_1 = add_1.replace(/(\s*,?\s*)*$/, "");
						console.log(response);

						//ADDED BY RAHUL
						console.log(response.result.pataa.country_name);

						/*
						if(response.result && response.result.pataa && response.result.pataa.country_name){
                            var countryName = response.result.pataa.country_name;
                            if(commonLibrary.countryNames[countryName]){
                                response.result.pataa.country_name = commonLibrary.countryNames[countryName];
                            }
                        }*/

						$('#billing_first_name').val(response.result.user.first_name);
						$('#billing_last_name').val(response.result.user.last_name);
						$('#billing_address_1').val(add_1);
						$('#billing_country').val(response.result.pataa.country_code).trigger('change');
						$('#billing_city').val(response.result.pataa.city_name);
						$('#billing_state').val(response.result.pataa.state_code).trigger('change');
						$('#billing_postcode').val(response.result.pataa.zipcode);
						$('#billing_phone').val(response.result.user.mobile);
						$('#billing_email').val(response.result.user.email_id);
						if(response.result.pataa.country_name=="Unnamed location")
						   {
						  $("#succ-msg").html('<p>Ship to : '+ response.result.pataa.country_name + '</p>' );
						   }
						else
							{
								$("#succ-msg").html('<p>Ship to : '+ response.result.pataa.city_name + ' ' + response.result.pataa.zipcode +', '+ response.result.pataa.state_name + ', ' + response.result.pataa.country_name+'</p>' );
							}
						
						$("#succ-msg").show();
                        $("#err-msg").hide();
						$("#first-msg").hide();
						var element = document.getElementById("pataa-unavailable");
						element.style.display = "none";
						var element = document.getElementById("pataa-available");
						element.style.display = "block";
						var element = document.getElementById("autofill");
						element.style.display = "none";
						var element3 = document.getElementById("main-code");

						element3.classList.add("succ-msg-sec");
						document.getElementById("err-msg").style.display = "none";    
		                 document.getElementById("succ-msg").style.display = "block";	
						
					
					} else if (response.status == 204) {
						
						//$("#err-msg").html('<p>Pataa is Disabled! Please fill up your address details manually. </p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						$(".clearInput").show();
						var element = document.getElementById("pataa-unavailable");
						element.style.display = "block";
						var element = document.getElementById("pataa-available");
						element.style.display = "none";
						var element = document.getElementById("autofill");
						element.style.display = "none";
						var element = document.getElementById("main-code");
						element.classList.add("pataa-not-found");
						element.classList.remove("succ-msg-sec");
					}
					else if (response.status == 400) {
						$("#err-msg").html('<p>Pataa is Disabled! Please fill up your address details manually. </p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						$(".clearInput").show();
						var element = document.getElementById("pataa-unavailable");
						element.style.display = "block";
						var element = document.getElementById("pataa-available");
						element.style.display = "none";
						var element = document.getElementById("autofill");
						element.style.display = "none";
						var element = document.getElementById("main-code");
						element.classList.add("pataa-not-found");
						element.classList.remove("succ-msg-sec");
					}
				else if (response.status == 401) {
						$("#err-msg").html('<p>Pataa is Disabled! Please fill up your address details manually. </p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						$(".clearInput").show();
						var element = document.getElementById("pataa-unavailable");
						element.style.display = "block";
						var element = document.getElementById("pataa-available");
						element.style.display = "none";
						var element = document.getElementById("autofill");
						element.style.display = "none";
						var element = document.getElementById("main-code");
						element.classList.add("pataa-not-found");
						element.classList.remove("succ-msg-sec");
					}
					else  {
						$("#err-msg").html('<p>Pataa is Disabled! Please fill up your address details manually. </p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						$(".clearInput").show();
						var element = document.getElementById("main-code");
						element.classList.add("pataa-not-found");
						var element = document.getElementById("pataa-unavailable");
						element.style.display = "block";
						var element = document.getElementById("pataa-available");
						element.style.display = "none";
						var element = document.getElementById("autofill");
						element.style.display = "none";
						
					}
				});
		} else {
						//$("#err-msg").html('<p>Pataa is Disabled! Please fill up your address details manually. </p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						$(".clearInput").show();
						var element = document.getElementById("main-code");
						element.classList.add("pataa-not-found");
						var element = document.getElementById("pataa-unavailable");
						element.style.display = "block";
						var element = document.getElementById("pataa-available");
						element.style.display = "none";
						var element = document.getElementById("autofill");
						element.style.display = "none";
		}
		
	});
	
	$('body').on('click', '#autofill_1', function (e) {
		
		e.preventDefault();		
		var pataacode;
		let pataaCode_chk = document.getElementById('pataa-code-val').innerText.charAt(0);
		if(pataaCode_chk==='^')
		{
			pataacode = document.getElementById('pataa-code-val').innerText.slice(1);
		}
		else
		{
			pataacode = document.getElementById('address-button-text').innerText;
		}
		pataacode=pataacode.replace(/^\s+|\s+$/gm,'');
		console.log(pataacode);
		let allow = document.getElementById('allow').value;
		var apikey = my_key.api_key;
		if (/^([A-Za-z0-9\-]{7,15})$/.test(pataacode)) {
		//if (/^([a-zA-Z0-9]{7,11})$/.test(pataacode)) {
			var host = window.location.protocol + "//" + window.location.host + "/";
			
			$.ajax({
					method: "POST",
					url: "https://apiv2.pataa.com/get-pataa-web",
					//url: "https://pataa.in:5057/get-pataa-web",
				
					data: {
						"api_key": apikey,
						"pc": pataacode,
						"device_type":"web",
						"allow":allow
						
					}
				})
				.done(function (response) {
					if (response.status == 200) {
						
						var add1 =response.result.pataa.address1+ ", ";
							if(add1==", ")
								{
									var add1 = response.result.pataa.address1;
								}
						
						
							var add2 =response.result.pataa.address2+ ", ";
						
							if(add2==", ")
								{
									var add2 = response.result.pataa.address2;
								}
						
						
							var add3 =response.result.pataa.address3+ ", ";
							if(add3==", ")
								{
									var add3 = response.result.pataa.address3;
								}
						
						
						let add_1 ="^"+pataacode+", " +add1+  add2 + add3 + response.result.pataa.address4
						add_1 = add_1.replace(/(\s*,?\s*)*$/, "");
						console.log(response);
						console.log(response);
						console.log(response.result.pataa.country_name);
						//console.log(getCountryName("India"));

						if(response.result && response.result.pataa && response.result.pataa.country_name){
                            var countryName = response.result.pataa.country_name;
							response.result.pataa.country_name = getCountryName(countryName);
                           
                        }
						console.log(response.result.pataa.country_name);
						$('#billing_first_name').val(response.result.user.first_name);
						$('#billing_last_name').val(response.result.user.last_name);
						$('#billing_address_1').val(add_1);
						$('#billing_country').val(response.result.pataa.country_code).trigger('change');
						$('#billing_city').val(response.result.pataa.city_name);
						$('#billing_state').val(response.result.pataa.state_code).trigger('change');
						$('#billing_postcode').val(response.result.pataa.zipcode);
						$('#billing_phone').val(response.result.user.mobile);
						$('#billing_email').val(response.result.user.email_id);
						if(response.result.pataa.country_name=="Unnamed location")
						   {
						  $("#succ-msg").html('<p class="button-text"><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.21429 7L10 1" stroke="#44BC58" stroke-width="1.5" stroke-linecap="round"></path></svg>Ship to : '+ response.result.pataa.country_name + '</p>' );
						   }
						else
							{
								$("#succ-msg").html('<p class="button-text"><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.21429 7L10 1" stroke="#44BC58" stroke-width="1.5" stroke-linecap="round"></path></svg>Ship to : '+ response.result.pataa.city_name + ' ' + response.result.pataa.zipcode +', '+ response.result.pataa.state_name + ', ' + response.result.pataa.country_name+'</p>' );
							}
						
						$("#succ-msg").show();
                        $("#err-msg").hide();
						$("#first-msg").hide();
						document.getElementById("err-msg").style.display = "none";    
		                document.getElementById("succ-msg").style.display = "block";	
						
					
					} else if (response.status == 204) {
						
						$("#err-msg").html('<p class="invalid-pataa"><svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1L0.75 6" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round"></path><circle cx="1" cy="9" r="1" fill="#ED1C24"></circle></svg>  Invalid Pataa</p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
					}
					else if (response.status == 400) {
						$("#err-msg").html('<p class="invalid-pataa"><svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1L0.75 6" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round"></path><circle cx="1" cy="9" r="1" fill="#ED1C24"></circle></svg>  Invalid Pataa</p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						
					}
				else if (response.status == 401) {
						$("#err-msg").html('<p class="invalid-pataa"><svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1L0.75 6" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round"></path><circle cx="1" cy="9" r="1" fill="#ED1C24"></circle></svg>  Invalid Pataa</p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						
					}
				else if (response.status == 403) {
						$("#err-msg").html('<p class="invalid-pataa"><svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1L0.75 6" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round"></path><circle cx="1" cy="9" r="1" fill="#ED1C24"></circle></svg>  User has restricted this pataa code</p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						
					}
					else  {
						$("#err-msg").html('<p class="invalid-pataa"><svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1L0.75 6" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round"></path><circle cx="1" cy="9" r="1" fill="#ED1C24"></circle></svg>  Invalid Pataa</p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						
						
					}
				});
		} else {
						$("#err-msg").html('<p class="invalid-pataa"><svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1L0.75 6" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round"></path><circle cx="1" cy="9" r="1" fill="#ED1C24"></circle></svg>  Invalid Pataa</p>' );
						$("#succ-msg").hide();
                        $("#err-msg").show();
						$("#first-msg").hide();
						
		}

	});
	
	
	$(document).ready(function() {
		if( $('#pataacode').length )         // use this if you are using id to check
		{
			var req_obj= localStorage.getItem("res_obj");
				if(req_obj!=null)
					{
						req_obj = JSON.parse(req_obj);
						document.getElementById('pataacode').value = req_obj.pataaCode;
						document.getElementById('autofill').click(); 
					}
			
					else{
						$('#btn-pataa-code').hide();
						$('#add-smart').show();
					}
		}
		if($('#pataacode_1').length )         // use this if you are using id to check
		{
			var req_obj= localStorage.getItem("res_obj");
				if(req_obj!=null)
					{
						req_obj = JSON.parse(req_obj);
						let text1 = "^";
						let value = text1.concat(req_obj.pataaCode);
						
						document.getElementById('pataa-code-val').innerText = value;
						
						document.getElementById('edit_icon').innerText = "Edit";
						$('#address-button-text').hide();
						$('#btn-pataa-code').show();
						$('#edit_icon').show();
						
						//document.getElementById('pataacode').value = req_obj.pataaCode;
						document.getElementById('autofill_1').click(); 
					}
			
					else{
						$('#btn-pataa-code').hide();
						$('#add-smart').show();
					}
		}
		
		
		$('.clearInput').click(function () {
			
			$('#pataacode').val('');
			$(".clearInput").hide();
			$("#err-msg").hide();
			$("#first-msg").show();
			$("#add_text").html('ADD ADDRESS');
			$("#autofill").show();
			$('.pataa-examples').show();
			var element = document.getElementById("main-code");
			element.classList.remove("pataa-not-found");
			element.classList.add("create-pataas");
			
		});
		
		$('.createPataaBtn').click(function () {
			$('body').addClass('createpataa_body');
			var req_obj= localStorage.getItem("res_obj");
			/*if(req_obj!="")
				{
					req_obj=JSON.parse(req_obj);
				}*/
			if(req_obj)
				{
					req_obj=JSON.parse(req_obj);
				}
			else
				{
					req_obj={}
					req_obj.type="";
				}
			req_obj.type=my_key.type;
			var innerDiv = document.createElement('div');
			document.getElementById("create-pataa-content").appendChild(innerDiv);
			innerDiv.innerHTML = "<create-pataa auto-Fill-Pataa-Code='"+JSON.stringify(req_obj)+"' ></create-pataa>";
			$('#createPataa').animate({opacity :'1',});
			$('.overlayBox').animate({opacity :'1',}).css({'visibility' :'visible'});
			$('#createPataa').show();
			$('#whats-pataa').hide();
			var originalDOM="";
			
			var button = document.querySelector('create-pataa');
			if(button !== null)
			{
				button.addEventListener('createPataaCode', (event) => {
				let text1 = "^";
					console.log(event.detail);
				let value = text1.concat(event.detail.pataaCode.toUpperCase());
				localStorage.setItem("res_obj", JSON.stringify(event.detail));
				document.getElementById('pataacode').value = value;
				document.getElementById('close-btn').click();
				document.getElementById('autofill').click();
				
					
			});
			}
			var button1 = document.querySelector('create-pataa');
			
			if(button1 !== null)
			{				
				
				button1.addEventListener('closeWindow', (event) => {
				document.getElementById('close-btn').click();
				});
			}
			
			var button2 = document.querySelector('create-pataa');
			
			if(button2 !== null)
			{			
				button2.addEventListener('manualAddress', (event) => {
					console.log(event.detail,"---detail----")
					var add1 =event.detail.ad1+ ", ";
							if(add1==", ")
								{
									var add1 = event.detail.ad1;
								}
						
						
							var add2 =event.detail.ad2+ ", ";
						
							if(add2==", ")
								{
									var add2 = event.detail.ad2;
								}
						
						
							var add3 =event.detail.ad3+ ", ";
							if(add3==", ")
								{
									var add3 = event.detail.ad3;
								}
						
						
						let add_1 = add1+  add2 + add3 + event.detail.ad4
						add_1 = add_1.replace(/(\s*,?\s*)*$/, "");
						document.getElementById('pataa-code-val').innerText=event.detail.city;
						$('#billing_first_name').val(event.detail.firstName);
						$('#billing_last_name').val(event.detail.lastName);
						$('#billing_address_1').val(add_1);					
						$('#billing_country').val(''+event.detail.countryCode+'').trigger('change');
						$('#billing_city').val(event.detail.city);
						$('#billing_state').val(''+event.detail.stateCode+'').trigger('change');
						$('#billing_postcode').val(event.detail.zipcode);
						/*$('#billing_phone').val(event.detail.firstName);
						$('#billing_email').val(event.detail.firstName);*/
				document.getElementById('close-btn').click();
				});
			}
			
		});
		
		$('.pataa-btn-black').click(function (e) {
			$('body').addClass('createpataa_body');
			e.preventDefault();	
			var req_obj= localStorage.getItem("res_obj");
			if(req_obj)
				{
					req_obj=JSON.parse(req_obj);
				}
			else
				{
					req_obj={}
					req_obj.type="";
				}
			req_obj.type=my_key.type;
			console.log(my_key);
			var innerDiv = document.createElement('div');
			document.getElementById("create-pataa-content").appendChild(innerDiv);	
			var merchant_id = my_key.merchant_id;
			innerDiv.innerHTML = "<create-pataa auto-Fill-Pataa-Code='"+JSON.stringify(req_obj)+"' partner-code='"+merchant_id+"'></create-pataa>";
			$('#createPataa').animate({opacity :'1',});
			$('.overlayBox').animate({opacity :'1',}).css({'visibility' :'visible'});
			$('#createPataa').show();
			$('#whats-pataa').hide();
			var originalDOM="";
			var button = document.querySelector('create-pataa');
			if(button !== null)
			{
				button.addEventListener('createPataaCode', (event) => {
				let text1 = "^";
					console.log(event.detail);
				let value = text1.concat(event.detail.pataaCode.toUpperCase());
				localStorage.setItem("res_obj", JSON.stringify(event.detail));
				document.getElementById('pataa-code-val').innerText = value;
				document.getElementById('allow').value = event.detail.allow;
				document.getElementById('edit_icon').innerText = "Edit";
				$('#btn-pataa-code').show();
				$('#address-button-text_1').show();
				$('#address-button-text').hide();					
				$('#first-msg').hide();
				document.getElementById('close-btn').click();
				document.getElementById('autofill_1').click(); 
			});
			}	
			var button1 = document.querySelector('create-pataa');
			
			if(button1 !== null)
			{				
				button1.addEventListener('closeWindow', (event) => {
					
					//document.getElementById('btn-pataa-code').style.display = "none";
					//document.getElementById('add-smart').style.display = "block";
					document.getElementById('close-btn').click();
				});
			}
			var button2 = document.querySelector('create-pataa');
			
			if(button2 !== null)
			{			
				button2.addEventListener('manualAddress', (event) => {
					console.log(event.detail,"---detail----")
					var add1 =event.detail.ad1+ ", ";
							if(add1==", ")
								{
									var add1 = event.detail.ad1;
								}
						
						
							var add2 =event.detail.ad2+ ", ";
						
							if(add2==", ")
								{
									var add2 = event.detail.ad2;
								}
						
						
							var add3 =event.detail.ad3+ ", ";
							if(add3==", ")
								{
									var add3 = event.detail.ad3;
								}
						
						
						let add_1 = add1+  add2 + add3 + event.detail.ad4
						add_1 = add_1.replace(/(\s*,?\s*)*$/, "");
						document.getElementById('pataa-code-val').innerText=event.detail.city;
						$('#billing_first_name').val(event.detail.firstName);
						$('#billing_last_name').val(event.detail.lastName);
						$('#billing_address_1').val(add_1);					
						$('#billing_country').val(''+event.detail.countryCode+'').trigger('change');
						$('#billing_city').val(event.detail.city);
						$('#billing_state').val(''+event.detail.stateCode+'').trigger('change');
						$('#billing_postcode').val(event.detail.zipcode);
						/*$('#billing_phone').val(event.detail.firstName);
						$('#billing_email').val(event.detail.firstName);*/
				document.getElementById('close-btn').click();
				});
			}
		});
		
		$('#close-btn').click(function () {
			
			if ($('body').hasClass('createpataa_body')) {
				setTimeout(function(){///workaround
           $('body').removeClass( 'createpataa_body');
        }, 100);
				} 
			$('#createPataa').animate({opacity :'0',});
			$('.overlayBox').animate({opacity :'0',});
			document.getElementById("create-pataa-content").innerHTML = "";				
			setTimeout(function() {
				$('#createPataa').hide();
				
				$('.overlayBox').css({'visibility' :'hidden'});
			}, 900);
		});

		$('.btn-what-pataa').click(function () {
			
			if ($('body').hasClass('createpataa_body')) {
				setTimeout(function(){///workaround
           $('body').removeClass( 'createpataa_body');
        }, 10);
				}	
			
			$('#whats-pataa').animate({opacity :'1',});
			$('.overlayBox').animate({opacity :'1',}).css({'visibility' :'visible'});
			$('#whats-pataa').show();
		});
		$('#close-btn').click(function () {
			
			if ($('body').hasClass('createpataa_body')) {
				setTimeout(function(){///workaround
           $('body').removeClass( 'createpataa_body');
        }, 100);
				}
			$('#whats-pataa').animate({opacity :'0',});
			$('.overlayBox').animate({opacity :'0',});
			setTimeout(function() {
				$('#whats-pataa').hide();
				$('.overlayBox').css({'visibility' :'hidden'});
			}, 900);
		});
	
	});
		
});



