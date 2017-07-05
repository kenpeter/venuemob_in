(function() {
  require(["underscore.string", "intl-tel-input", "intl-tel-input-ultils", "jquery.validate"], function(e, t) {
    var a, n, i, o, r;
    return r = 0, $(".sign-up-submit").click(function(e) {
      var t, o, r, l, s, d, u, g, c, f, m, p;
      return $("#sign-up-error-text").text(""), $("#sign-up-form").valid() && (o = $("#login-modal .modal-dialog"), t = $(this), l = t.html(), t.html("<i class='fa fa-fw fa-spinner fa-spin'></i> Signing up..."), p = $(this).data("scope"), u = $(p + " .sign-up-fullname").val(), r = u.split(" "), r.length > 1 ? (d = r[0], g = r[r.length - 1]) : (d = u, g = ""), m = $(p + " .sign-up-phone-intl").val(), s = $(p + " .sign-up-email").val(), f = $(p + " .sign-up-password").val(), c = $("#login-modal").data("no-reload"), Access.prototype.sign_up(d, g, m, s, function(e) {
        return t.html(l), null == e.id ? (n("Sign-up - Failure"), a(o, "shake", 2e3), e.success ? $("#sign-up-error-text").text("There was a problem signing up, please refresh the page and try again") : $("#sign-up-error-text").text(e.message)) : (n("Sign-up - Success"), $(".x-modal .modal-content").addClass("sign-up-spinner-show"), window.setCookie("show-coupon", 0, 0), $("#login-modal").data("redirect") && Analytics.prototype.track({
          event: "signUp",
          event_params: {
            city: $("#city-select").val()
          }
        }), c ? (i(e), $("#login-modal").trigger("afterLoggedIn", e), $("#login-modal").trigger("afterLoggedInTemp", e)) : Lead.prototype.save(e, function(e) {
          return null != Lead.prototype.searchRedirect ? window.location = Lead.prototype.searchRedirect : window.location.reload()
        }))
      })), !1
    }), $(".login-submit").click(function(e) {
      var t, o, l, s, d, u, g;
      return $("#log-in-error-text").text(""), $("#login-form").valid() && (o = $("#login-modal .modal-dialog"), t = $(this), l = t.html(), t.html("<i class='fa fa-fw fa-spinner fa-spin'></i> Logging in..."), g = $(this).data("scope"), s = $(g + " .login-email").val(), u = $(g + " .login-password").val(), d = $("#login-modal").data("no-reload", 1), Access.prototype.login(s, u, function(e) {
        var s;
        return t.html(l), null == e.id ? (n("Login - Failure"), a(o, "shake", 2e3), s = r > 0 ? "The email address or password you entered is incorrect.<br />Please make sure you're using an email address associated with your Venuemob account." : "The email address or password you entered is incorrect. <br />Please try again.", $("#log-in-error-text").html(s), r++) : (n("Login - Success"), $(".x-modal .modal-content").addClass("log-in-spinner-show"), d ? (i(e), $("#login-modal").trigger("afterLoggedIn", e), $("#login-modal").trigger("afterLoggedInTemp", e)) : Lead.prototype.save(e, function(e) {
          return null != Lead.prototype.searchRedirect ? window.location = Lead.prototype.searchRedirect : window.location.reload()
        }))
      })), !1
    }), $("#forgot-form").submit(function(e) {
      var t;
      return $("#forgot-error-text").text(""), $(this).valid() && (t = $(this).serialize(), $.ajax({
        type: "GET",
        url: auth_domain + "/user/forgot-password/",
        data: t,
        xhrFields: {
          withCredentials: !0
        },
        success: function(e) {
          return e.success ? $("#forgot-form").addClass("forgot-password-result-show") : $("#forgot-error-text").text("Sorry, we couldn't find an account associated with this email address. Please make sure you're using an email address associated with your Venuemob account.")
        },
        error: function(e) {
          return $("#forgot-error-text").html("Oops! Something went wrong. <br />Please try again, or email help@venuemob.com.au if you need help.")
        }
      })), !1
    }), $(".sign-up-switch").click(function(e) {
      return $("#sign-up-tab").trigger("click"), $("#login-modal").removeClass("dont-leave-modal")
    }), $(".login-switch").click(function(e) {
      return $("#login-tab").trigger("click"), $("#login-modal").removeClass("dont-leave-modal")
    }), $("#already-tab").click(function(e) {
      return $("#login-tab").trigger("click")
    }), $(".login-tab-btn").on({
      click: function(e) {
        $(".login-tab-btn").removeClass("active"), $(this).addClass("active"), $("#login-modal .log-in-title").text("Sign up or log in to save")
      }
    }), $("#forgot-tab").on({
      click: function(e) {
        $("#login-modal .log-in-title").text("Forgotten password?")
      }
    }), $("#sign-up-form").validate({
      rules: {
        "sign-up-fullname": {
          wordCount: [2]
        },
        "sign-up-phone": {
          validPhone: !0
        },
        "sign-up-email": {
          email: !0
        }
      },
      messages: {
        "sign-up-fullname": {
          required: "Please enter your full name"
        },
        "sign-up-phone": {
          required: "Please enter your phone number.\nVenues would need this later to get in touch with you.",
          validPhone: "Please enter a valid phone number"
        },
        "sign-up-email": {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        }
      },
      errorPlacement: function(e, t) {
        var a, n;
        $("#sign-up-error-text").text(""), a = $(t).parents(".x-field").find(".error-text"), $(a).text(e.text()), n = $(t).parents(".x-field").find(".validation-icon"), n.hide()
      },
      unhighlight: function(e, t, a) {
        var n, i;
        return i = $(e).parents(".x-field").find(".validation-icon"), i.show(), $(e).addClass("valid"), n = $(e).parents(".x-field").find(".error-text"), $(n).text("")
      }
    }), $("#login-form").validate({
      messages: {
        email: {
          required: "Please enter your email address"
        },
        password: {
          required: "Please enter your password"
        }
      },
      errorPlacement: function(e, t) {
        var a, n;
        $("#log-in-error-text").text(""), a = $(t).parents(".x-field").find(".error-text"), $(a).text(e.text()), n = $(t).parents(".x-field").find(".validation-icon"), n.hide()
      },
      unhighlight: function(e, t, a) {
        var n, i;
        return i = $(e).parents(".x-field").find(".validation-icon"), i.show(), $(e).addClass("valid"), n = $(e).parents(".x-field").find(".error-text"), $(n).text("")
      }
    }), $("#forgot-form").validate({
      messages: {
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        }
      },
      errorPlacement: function(e, t) {
        var a, n;
        $("#forgot-error-text").text(""), a = $(t).parents(".x-field").find(".error-text"), $(a).text(e.text()), n = $(t).parents(".x-field").find(".validation-icon"), n.hide()
      },
      unhighlight: function(e, t, a) {
        var n, i;
        return i = $(e).parents(".x-field").find(".validation-icon"), i.show(), $(e).addClass("valid"), n = $(e).parents(".x-field").find(".error-text"), $(n).text("")
      }
    }), a = function(e, t, a) {
      return e.addClass(t), e.addClass("animated"), setTimeout(function() {
        return e.removeClass(t), e.removeClass("animated")
      }, a)
    }, o = function(e) {
      var t;
      return t = e.split(" "), t = t.filter(function(e) {
        return e.length > 0
      }).length
    }, $.validator.addMethod("wordCount", function(e, t, a) {
      var n;
      return n = o(e), n >= a[0] ? !0 : void 0
    }, $.validator.format("Please enter your first name &amp; last name")), $("body").on("click", ".sign-out", function() {
      return Access.prototype.logout()
    }), i = function(e) {
      var t;
      return null != e.id ? (t = '<li class="dropdown"><a href="javascript:void(0)" class="btn btn-grey vm-btn-xs btn-radius dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + e.firstname + '<i class="fa fa-fw fa-angle-down"></i></a><ul class="dropdown-menu"><li><a href="' + myvenuemob_domain + '"><i class="fa fa-fw fa-home"></i> Events</a></li><li><a href="' + myvenuemob_domain + 'profile"><i class="fa fa-fw fa-user"></i> Profile</a></li><li><a href="' + myvenuemob_domain + 'favourites"><i class="fa fa-fw fa-heart"></i> My Favourites</a></li><li role="separator" class="divider"></li><li><a class="sign-out" href="' + domain + "logout?next=" + window.location.href + '" role="button"><i class="fa fa-fw fa-sign-out "></i> Logout</a></li></ul></li>', $("#bs-navbar .navbar-right").html(t), $("#login-modal").modal("hide"), $.ajax({
        type: "GET",
        url: domain,
        success: function(e) {}
      })) : void 0
    }, $("#login-modal").on("hidden.bs.modal", function() {
      return $("#login-modal").unbind("afterLoggedInTemp")
    }), $("#login-modal").on("shown.bs.modal", function() {
      return setTimeout(function() {
        var e;
        return e = "Sign-up - Started", "#login" === $("#login-modal .login-tab-btn.active").attr("href") && (e = "Login - Started"), n(e)
      }, 500)
    }), $.validator.addMethod("validPhone", function(e, t, a) {
      var n, i;
      return $(t).intlTelInput("isValidNumber") ? (i = $(t).intlTelInput("getNumber"), n = i.replace("+61", "0"), $(".sign-up-phone-intl").val(n), !0) : void 0
    }, $.validator.format("Please enter valid phone number.")), $("#sign-up-form .sign-up-phone").intlTelInput({
      nationalMode: !0,
      initialCountry: "au",
      onlyCountries: ["au"]
    }), n = function(e) {
      return "undefined" != typeof analytics && null !== analytics ? analytics.track(e, {
        category: "Authentication"
      }) : void 0
    }
  })
}).call(this);
