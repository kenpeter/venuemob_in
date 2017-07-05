# https://venuemob.com.au/



## https://venuemob.com.au/api/header
Basically, address cross Australia.
The field is not perfectly consistent.


## https://venuemob.com.au/api/proxy?get_url=postcode/regions_suburbs&city=melbourne

![alt text][region_count]
[region_count]: https://raw.githubusercontent.com/kenpeter/venuemob_in/master/src/region_count.png "test"



## hotjar
It uses hotjar to monitor heatmap.


## https://my.venuemob.com.au
User profile



## https://auth.venuemob.com.au/login
Post Username and password to auth url


## Backbone again
~~~~
(function() {
    require.config({
        waitSeconds: 0,
        paths: {
            alerts: "/assets/js/alerts",
            modernizr: "/assets/js/vendor/modernizr",
            cat: "/assets/js/vendor/cat.min",
            qtip: "/assets/js/vendor/qtip",
            qtip2: "/assets/bower_components/qtip2/jquery.qtip.min",
            reveal: "/assets/js/vendor/reveal",
            select2: "/assets/bower_components/select2/dist/js/select2.full.min",
            touch: "/assets/js/vendor/touch",
            SparkMD5: "/assets/js/vendor/spark-md5",
            moment: "/assets/bower_components/moment/moment",
            "moment-range": "/assets/bower_components/moment-range/lib/moment-range",
            css3pie: "/assets/bower_components/css3pie/PIE",
            legacy: "/assets/bower_components/pickadate/lib/compressed/legacy",
            "es5-shim": "/assets/bower_components/es5-shim/es5-shim",
            typeahead: "/assets/bower_components/typeahead.js/dist/typeahead.bundle.min",
            spin: "/assets/js/vendor/spin",
            wysihtml5: "/assets/js/vendor/wysihtml5.min",
            advanced: "/assets/js/vendor/advanced",
            "snap.svg": "/assets/bower_components/snap.svg/dist/snap.svg-min",
            svgLoader: "/assets/js/vendor/svgLoader",
            wistia: "//fast.wistia.com/assets/external/E-v1",
            tablesorter: "/assets/js/vendor/tablesorter.min",
            multidatespicker: "/assets/js/vendor/multidatespicker",
            rainbow: "/assets/js/vendor/rainbow-custom.min",
            "underscore.string": "/assets/bower_components/underscore.string/dist/underscore.string.min",
            galleryjack: "/assets/js/vendor/cj-galleryjack-core",
            "galleryjack.buttons": "/assets/js/vendor/cj-top-right-buttons.min",
            "galleryjack.settings": "/assets/js/vendor/cj-galleryjack-settings",
            zepto: "//cdnjs.cloudflare.com/ajax/libs/zepto/1.0rc1/zepto.min",
            underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
            backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min",
            jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
            "jquery.ui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min",
            "jquery.address": "//cdnjs.cloudflare.com/ajax/libs/jquery.address/1.5/jquery.address.min",
            "jquery.validate": "/assets/bower_components/jquery-validate/dist/jquery.validate",
            "jquery.steps": "/assets/bower_components/jquery.steps/build/jquery.steps.min",
            "jquery.inputmask": "/assets/bower_components/jquery.inputmask/dist/min/jquery.inputmask",
            "jquery.inputmask.phone.extensions": "/assets/bower_components/jquery.inputmask/dist/min/jquery.inputmask.phone.extensions",
            "jquery.unveil": "/assets/bower_components/unveil/jquery.unveil.min",
            "jquery.timepicker": "/assets/js/vendor/timepicker",
            "jquery.expander": "/assets/js/vendor/expander",
            "jquery.datatables": "/assets/js/vendor/jquery.datatables.min",
            "jquery.waterwheelCarousel": "/assets/js/vendor/jquery.waterwheelCarousel",
            "jquery.lazyload": "/assets/bower_components/jquery_lazyload/jquery.lazyload",
            picker: "/assets/bower_components/pickadate/lib/compressed/picker",
            "picker.date": "/assets/bower_components/pickadate/lib/compressed/picker.date",
            "picker.time": "/assets/bower_components/pickadate/lib/compressed/picker.time",
            handlebars: "/assets/bower_components/handlebars/handlebars",
            "handlebars-helpers": "/assets/bower_components/handlebars-helpers/src/helpers",
            hbs: "/assets/bower_components/hbs/hbs",
            mapbox: "/assets/bower_components/mapbox.js/mapbox",
            "leaflet.cluster": "/assets/js/vendor/leaflet.cluster",
            "leaflet.markercluster": "/assets/bower_components/leaflet.markercluster/dist/leaflet.markercluster",
            app: "/assets/js/app",
            "vm-app": "/assets/js/venuemob/app",
            access: "/assets/js/libs/access",
            lead: "/assets/js/libs/lead",
            FindVenues: "/assets/js/venuemob/pages/find_venues",
            Viewer: "/assets/js/viewer",
            "favourite-venue": "/assets/js/libs/favourite_venue",
            "share-venue": "/assets/js/libs/share_venue",
            analytics: "/assets/js/libs/analytics",
            compare: "/assets/js/libs/compare",
            "make-offer": "/assets/js/libs/make_offer",
            "vm-ui": "/assets/lib/venuemob-ui/vendor/vm-ui-framework/js/vm-ui-framework",
            "vm-datepicker": "/assets/lib/venuemob-ui/vendor/datepicker/js/bootstrap-datepicker",
            enquiry_handler: "/assets/js/embeds/enquiry_handler",
            bs_bootstrap: "/assets/bower_components/bootstrap/dist/js/bootstrap.min",
            bs_affix: "/assets/bower_components/bootstrap/js/affix",
            bs_scrollspy: "/assets/bower_components/bootstrap/js/scrollspy",
            bs_tooltip: "/assets/bower_components/bootstrap/js/tooltip",
            bs_jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
            "bs_jquery.ui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min",
            bs_datepicker: "/assets/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min",
            "bs_jquery.expander": "/assets/js/vendor/expander",
            bs_unveil: "/assets/bower_components/unveil/jquery.unveil.min",
            masonry: "/assets/bower_components/masonry/dist/masonry.pkgd.min",
            "jquery-bridget": "/assets/bower_components/jquery-bridget/jquery.bridget",
            imagesloaded: "/assets/bower_components/imagesloaded/imagesloaded.pkgd.min",
            "iframe-resizer": "/assets/bower_components/iframe-resizer/js/iframeResizer.min",
            "iframe-resizer-cw": "/assets/bower_components/iframe-resizer/js/iframeResizer.contentWindow.min",
            "intl-tel-input": "/assets/bower_components/intl-tel-input/build/js/intlTelInput.min",
            "intl-tel-input-ultils": "/assets/bower_components/intl-tel-input/build/js/utils",
            dropdown: "/assets/bower_components/bootstrap/js/dropdown",
            collapse: "/assets/bower_components/bootstrap/js/collapse",
            modal: "/assets/bower_components/bootstrap/js/modal",
            tab: "/assets/bower_components/bootstrap/js/tab",
            carousel: "/assets/bower_components/bootstrap/js/carousel",
            transition: "/assets/bower_components/bootstrap/js/transition",
            HomeMain: "/assets/js/home/main",
            HomeWizard: "/assets/js/home/wizard",
            HomeMap: "/assets/js/home/map",
            HomeMapTest: "/assets/js/home/maptest",
            VenueTemplate: "/assets/js/home/venue-template"
        },
        shim: {
            app: {
                deps: ["jquery", "jquery.ui", "modernizr", "select2", "dropdown", "modal", "tab", "carousel", "transition", "access"]
            },
            "vm-ui": {
                deps: ["bs_jquery"]
            },
            "vm-datepicker": {
                deps: ["bs_bootstrap"]
            },
            HomeMain: {
                deps: ["jquery"]
            },
            HomeWizard: {
                deps: ["jquery"]
            },
            HomeMap: {
                deps: ["jquery"]
            },
            backbone: {
                deps: ["underscore", "jquery"],
                exports: "Backbone"
            },
            underscore: {
                exports: "_"
            },
            picker: {
                deps: ["legacy"]
            },
            "picker.time": {
                deps: ["picker"]
            },
            "picker.date": {
                deps: ["picker"]
            },
            "galleryjack.buttons": {
                deps: ["galleryjack"]
            },
            "galleryjack.settings": {
                deps: ["galleryjack"]
            },
            "leaflet.markercluster": {
                deps: ["mapbox"]
            },
            "leaflet.cluster": {
                deps: ["mapbox"]
            },
            "jquery.ui": {
                deps: ["jquery"]
            },
            "jquery.address": {
                deps: ["jquery"]
            },
            "jquery.steps": {
                deps: ["jquery"]
            },
            "jquery.inputmask": {
                deps: ["jquery"]
            },
            "jquery.unveil": {
                deps: ["jquery"]
            },
            "jquery.expander": {
                deps: ["jquery"]
            },
            "jquery.timepicker": {
                deps: ["jquery", "jquery.ui"]
            },
            select2: {
                deps: ["jquery"]
            },
            touch: {
                deps: ["jquery"]
            },
            svgLoader: {
                deps: ["snap.svg"]
            },
            typeahead: {
                deps: ["jquery"]
            },
            bs_bootstrap: {
                deps: ["bs_jquery"]
            },
            bs_datepicker: {
                deps: ["bs_jquery", "bs_bootstrap"]
            },
            "bs_jquery.expander": {
                deps: ["bs_jquery"]
            },
            bs_unveil: {
                deps: ["bs_jquery"]
            },
            dropdown: {
                deps: ["jquery"]
            },
            modal: {
                deps: ["jquery"]
            },
            tab: {
                deps: ["jquery"]
            },
            carousel: {
                deps: ["jquery"]
            },
            transition: {
                deps: ["jquery"]
            },
            "jquery.validate": {
                deps: ["jquery"]
            }
        }
    })
}).call(this);
~~~~


## https://cdn.venuemob.com.au/?url=vm-cdn3.s3-ap-southeast-2.amazonaws.com/venues/the-escape-hunt-experience-melbourne/photos/the-escape-hunt-experience-melbourne-function-venue-lounge-area-6.jpg&w=480

Cdn venuemob + aws cdn + width = 480 (can use h=123 as well)
