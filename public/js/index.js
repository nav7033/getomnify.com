/**focus on input box */

$(document).ready(function() {
    $("#signup_modal").on('shown.bs.modal', function() {
        $(".f-name").focus();
    });
    $("#login_modal").on('shown.bs.modal',function() {
        $(".l-email").focus();
    });
});

$(document).ready(function() {
    $(".signup_form").submit(function(a) {
        a.preventDefault();
        $.ajax({type: "POST",url: "http://localhost:3000/registration",data: new FormData(a.target),processData: false,
            contentType: false,beforeSend: function(){
                $(".signup_form").css({pointerEvents: 'none',cursor: 'not-allowed'});
                $(".signup-btn").addClass('d-none');
                $('.signup-process-btn').removeClass('d-none');
            },
            success: function(response){
                if (response.status) {
                    $("#signup_modal").modal('hide');
                    $("#login_modal").modal('show');
                }
            },
            error:function (response){
                $(".signup_form").css({pointerEvents: '',cursor: ''});
                $(".signup-btn").removeClass('d-none');
                $('.signup-process-btn').addClass('d-none');
                if (response.responseJSON.message === 'Duplicate Email Id') {
                    $(".s-email").addClass("border border-danger");
                    $(".s-email-error").html('Email is already exists');
                    $(".s-email").click(function() {
                        $(".s-email").removeClass("border border-danger");
                        $(".s-email-error").html('');
                    });
                }
            }
        });
    });
});

/**
 *================ login=====================
 */

$(document).ready(function() {
    $(".login_form").submit(function(a)  {
        a.preventDefault();
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/logIn",
            data: new FormData(a.target),processData: false,contentType: false,beforeSend: () => {$(".signup_form").css({pointerEvents: 'none',
            cursor: 'not-allowed'
                });
                $(".login-btn").addClass('d-none');
                $('.login-process-btn').removeClass('d-none');
            },
            success: function (response) {
                if (response.status) {
                    document.cookie = `auth=${response.data}; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/`;
                    window.localStorage.setItem('auth', 'ok');
                    window.location = "profile";
                }
            },
            error:function (response)  {
                $(".signup_form").css({
                    pointerEvents: '',
                    cursor: ''
                });
                $(".login-btn").removeClass('d-none');
                $('.login-process-btn').addClass('d-none');
                if (response.responseJSON.message == "Invalid username and password") {
                    $(".l-email, .l-password").addClass("border border-danger");
                    $(".l-error-alert").html(`<div class="alert alert-danger" role="alert">
                    Invalid username and password
                  </div>`);
                    $(".l-email").click(function() {
                        $(".l-email, .l-password").removeClass("border border-danger");
                        $(".l-error-alert").html('');
                    });
                }
            }
        });
    });
}); 