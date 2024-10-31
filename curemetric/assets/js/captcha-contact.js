function sendContact() {
	var valid;
	valid = validateContact();
	if (valid) {
		$("#loader-icon").show();
		$("#btn-login-submit").hide();
		jQuery.ajax({
			url: "contact-mail.php",
			data: 'userName=' + $("#userName").val() + '&userEmail=' + $("#userEmail").val() + '&subject=' + $("#subject").val() + '&content=' + $("#content").val() + '&captcha=' + $("#captcha").val(),
			type: "POST",
			success: function(data) {
				$("#mail-status").html(data);
				$("#loader-icon").hide();
			},
			error: function() {
				$("#loader-icon").hide();
			}
		});
	}
}
function validateContact() {
	var valid = true;
	$(".demoInputBox").css('background-color', '');
	$(".info").html('');

	if (!$("#userName").val()) {
		$("#userName-info").html("(required)");
		$("#userName").css('background-color', '#FFFFDF');
		valid = false;
	}
	if (!$("#userEmail").val()) {
		$("#userEmail-info").html("(required)");
		$("#userEmail").css('background-color', '#FFFFDF');
		valid = false;
	}
	if (!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		$("#userEmail-info").html("(invalid)");
		$("#userEmail").css('background-color', '#FFFFDF');
		valid = false;
	}
	if (!$("#phonenumber").val()) {
		$("#phonenumber-info").html("(required)");
		$("#phonenumber").css('background-color', '#FFFFDF');
		valid = false;
	}
	if (!$("#subject").val()) {
		$("#subject-info").html("(required)");
		$("#subject").css('background-color', '#FFFFDF');
		valid = false;
	}
	if (!$("#content").val()) {
		$("#content-info").html("(required)");
		$("#content").css('background-color', '#FFFFDF');
		valid = false;
	}
	if (!$("#captcha").val()) {
		$("#captcha-info").html("(required)");
		$("#captcha").css('background-color', '#FFFFDF');
		valid = false;
	}

	return valid;
}
function refreshCaptcha() {
	$("#captcha_code").attr('src', 'captcha_code.php');
}