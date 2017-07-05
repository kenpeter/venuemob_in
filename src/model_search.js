(function() {
    require(["underscore.string", "moment", "jquery.validate", "select2"], function(e, t) {
        var n, s, o, c, i, a, r, l, u;
        return n = !1, c = function() {
            var t, s;
            return t = $("#city-select").val(), null == t && (t = $("#city-session").val()), s = [], $.get(domain + "api/proxy?get_url=postcode/regions_suburbs&city=" + e.slugify(t), function(e) {
                var t, o, c, i, a, r, l, u, d;
                if (e.success) {
                    for (r = e.data.response, o = 0, i = r.length; i > o; o++)
                        for (u = r[o], l = u.suburbs, c = 0, a = l.length; a > c; c++) d = l[c], s.push({
                            id: d.slug,
                            text: d.name + ", " + d.postcode,
                            type: "Suburb"
                        });
                    return t = {
                        data: s,
                        placeholder: "Type to add location",
                        dropdownCssClass: "x-select2 location-select",
                        containerCssClass: "x-select2-container location-select-container",
                        multiple: !0,
                        allowClear: !1,
                        closeOnSelect: !0
                    }, null != n && n.empty().select2("destroy"), n = $("#location-select").select2(t)
                }
            }, "json")
        }, i = function() {
            var e, n, s, o;
            return e = $("#date-input").val(), n = t(e, "DD-MM-YYYY").format("YYYY-MM-DD"), o = {
                city_id: $("#city-select").val(),
                event_type: $("#event-type-select").val(),
                attendees: $("#attendees-select").val(),
                date: n,
                budget: $("#budget-select").val(),
                budget_type: "min-spend"
            }, s = $("#location-select").val(), null != s && "" !== s ? o.suburbs = s : o.suburbs = "", $("#surrounding-check").is(":checked") && (o.show_surrounding = "yes"), o
        }, u = function() {
            var e, t;
            return $(".count-venue").hide(), $(".count-venue-spinner").show(), t = i(), e = $.param(t), $.get(domain + "api/proxy?get_url=search/results&" + e, function(e) {
                return e.success ? $(".count-venue").text(e.data.response.pagination.total_results + " venues found") : $(".count-venue").text("No venues found"), $(".count-venue-spinner").hide(), $(".count-venue").show()
            }, "json")
        }, s = function() {
            $(".per-person").hide(), $(".per-person-spinner").show(), setTimeout(function() {
                return $(".per-person-spinner").hide(), $(".per-person").text("$" + $("#budget-select").val() / $("#attendees-select").val() + "~ per head"), $(".per-person").show()
            }, 2e3)
        }, r = function() {
            return "1" !== window.getCookie("quick-search") && ("undefined" == typeof venue_profile || null === venue_profile) && ($("#quicksearch-modal").modal("show"), window.setCookie("quick-search", 1, 7)), new RegExp("[?&]" + encodeURIComponent("search") + "=on").exec(location.search) ? $("#quicksearch-modal").modal("show") : void 0
        }, a = function() {
            var t;
            return t = i(), t.prelead_capture_attempted = 1, t.quick_search = 1, $.post(domain + "api/save_quote_session", t, function(t) {
                var n, s, o;
                return t.success ? (s = t.success, o = e.slugify(s.event_type) + "-venues/" + e.slugify(s.city_id), Lead.prototype.lead.searchRedirect = o, window.setCookie("search-redirect", o), n = $("#quicksearch-submit").data("prelead"), window.forceLoginOnResults || null != s.budget && null != s.attendees && (s.budget >= 1e4 || s.budget / s.attendees >= 100) && !Lead.prototype.lead.leadCaptured ? 1 === n ? Access.prototype.access.isLoggedIn ? Access.prototype.me(function(e) {
                    return Lead.prototype.save(e)
                }) : (l("#login-modal"), $("#sign-up-tab").trigger("click"), $("#login-modal").data("redirect", domain + o)) : Access.prototype.me(function(e) {
                    return Lead.prototype.save(e)
                }) : window.location = domain + o) : void 0
            }, "json")
        }, l = function(e) {
            return $(".modal").modal("hide"), $(e).modal("show")
        }, $("#city-select").select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: "x-select2",
            containerCssClass: "x-select2-container",
            closeOnSelect: !0
        }), $("#event-type-select").select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: "x-select2",
            containerCssClass: "x-select2-container",
            closeOnSelect: !0
        }), $("#attendees-select").select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: "x-select2",
            containerCssClass: "x-select2-container",
            closeOnSelect: !0
        }), $("#budget-select").select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: "x-select2",
            containerCssClass: "x-select2-container",
            closeOnSelect: !0
        }), $(".x-select2-input").select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: "x-select2",
            containerCssClass: "x-select2-container",
            closeOnSelect: !0
        }), $("#date-input").datepicker({
            format: "dd-mm-yyyy",
            startDate: new Date,
            inline: !0,
            startView: 1,
            autoclose: !0
        }), $("#city-select").change(function(e) {
            return c()
        }), $("#location-select").change(function(e) {
            return $(".location-select-container .select2-input").prop("placeholder", "Type to add more")
        }), $(".x-select2-input").change(function(e) {}), $("#budget-select").change(function(e) {}), $("#attendees-select").change(function(e) {}), n = void 0, $("#quicksearch-submit").click(function(e) {
            return $("#quick-search-form").valid() ? a() : void 0
        }), c(), r(), $("#login-modal").on("hidden.bs.modal", function() {
            return $(this).data("redirect") ? window.location = $(this).data("redirect") : void 0
        }), $("#quick-search-form").validate({
            messages: {
                "date-input": {
                    required: "Please choose event date"
                }
            }
        }), "undefined" != typeof results_page && null !== results_page ? (o = $("#browse").data("event-type"), $("#city-select").val(city).trigger("change"), $("#event-type-select").val(o).trigger("change")) : void 0
    })
}).call(this);
