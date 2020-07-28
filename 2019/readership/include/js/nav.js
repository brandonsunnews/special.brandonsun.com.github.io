
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //NAV
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /*!
             *
             *  Copyright (c) David Bushell | //dbushell.com/
             *
             */
            (function (window, document, undefined) {

                // helper functions

                var trim = function (str) {
                    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
                };

                var hasClass = function (el, cn) {
                    return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
                };

                var addClass = function (el, cn) {
                    if (!hasClass(el, cn)) {
                        el.className = (el.className === '') ? cn : el.className + ' ' + cn;
                    }
                };

                var removeClass = function (el, cn) {
                    el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
                };

                var hasParent = function (el, id) {
                    if (el) {
                        do {
                            if (el.id === id) {
                                return true;
                            }
                            if (el.nodeType === 9) {
                                break;
                            }
                        }
                        while ((el = el.parentNode));
                    }
                    return false;
                };

                // normalize vendor prefixes

                var doc = document.documentElement;

                var transform_prop = window.Modernizr.prefixed('transform'),
                    transition_prop = window.Modernizr.prefixed('transition'),
                    transition_end = (function () {
                        var props = {
                            'WebkitTransition': 'webkitTransitionEnd',
                            'MozTransition': 'transitionend',
                            'OTransition': 'oTransitionEnd otransitionend',
                            'msTransition': 'MSTransitionEnd',
                            'transition': 'transitionend'
                        };
                        return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
                    })();

                window.App = (function () {

                    var _init = false,
                        app = {};

                    var inner = null,

                        nav_open = false,

                        nav_class = 'js-nav';


                    app.init = function () {
                        if (_init) {
                            return;
                        }
                        _init = true;

                        inner = document.getElementById('inner-wrap');

                        var closeNavEnd = function (e) {
                            if (e && e.target === inner) {
                                document.removeEventListener(transition_end, closeNavEnd, false);
                            }
                            nav_open = false;
                        };

                        app.closeNav = function () {
                            if (nav_open) {
                                // close navigation after transition or immediately
                                var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                                if (duration > 0) {
                                    document.addEventListener(transition_end, closeNavEnd, false);
                                } else {
                                    closeNavEnd(null);
                                }
                            }
                            removeClass(doc, nav_class);
                        };

                        app.openNav = function () {
                            if (nav_open) {
                                return;
                            }
                            addClass(doc, nav_class);
                            nav_open = true;
                        };

                        app.toggleNav = function (e) {
                            if (nav_open && hasClass(doc, nav_class)) {
                                app.closeNav();
                            } else {
                                app.openNav();
                            }
                            if (e) {
                                e.preventDefault();
                            }
                        };

                        // open nav with main "nav" button
                        document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);
                        document.getElementById('nav-open-btn2').addEventListener('click', app.toggleNav, false);

                        // close nav with main "close" button
                        document.getElementById('nav-close-btn').addEventListener('click', app.toggleNav, false);

                        // close nav by touching the partial off-screen content
                        document.addEventListener('click', function (e) {

                            if (nav_open && !hasParent(e.target, 'slide-menu')) {
                                    e.preventDefault();	
                                    app.closeNav();
                                }
                            /*var slideMenuOpen = false;

                            if ($('li .slide-menu-inner.show').length) {
                                if (!hasParent(e.target, 'slide-menu-inner') && !hasParent(e.target, 'slide-menu')) {
                                    e.stopPropagation();
                                    $('li .slide-menu-inner').removeClass('show');
                                    $('li .slide-menu-inner').slideUp(350);
                                }}*/

                            },
                            true);

                        addClass(doc, 'js-ready');

                    };

                    return app;

                })();

                if (window.addEventListener) {
                    window.addEventListener('DOMContentLoaded', window.App.init, false);
                }

            })(window, window.document);


        //slidemenu

        jQuery(function($) {

        $('.slide-menu-section').click(function(e) {
                e.preventDefault();
                var $this = $(this);
                var isToggleIcon = false;
                if ($this.children().hasClass('entypo-plus') === true || $this.children().hasClass('entypo-minus') === true) {
                    isToggleIcon = true;
                }
                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.next().slideUp(350);
                    if (isToggleIcon) {
                        $(this).find('i')[0].className = "entypo-plus";
                    }
                } else {
                    $this.parent().parent().find('li .slide-menu-inner-test').removeClass('show');
                    $this.parent().parent().find('li .slide-menu-inner-test').slideUp(350);
                    $this.next().toggleClass('show');
                    $this.next().slideToggle(350);
                    if (isToggleIcon) {
                        $(this).find('i')[0].className = "entypo-minus";
                    }
                }
            });

        // Hide Header on on scroll down
            var didScroll;
            var lastScrollTop = 0;
            var delta = 100;
            var navbarHeight = $('header').outerHeight();

            $(window).scroll(function(event) {
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                var st = $(this).scrollTop();

                // Make sure they scroll more than delta
                if (Math.abs(lastScrollTop - st) <= delta)
                    return;

                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight) {
                    // Scroll Down
                    $('header').removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    if (st + $(window).height() < $(document).height()) {
                        $('header').removeClass('nav-up').addClass('nav-down');
                    }
                }

                lastScrollTop = st;
            }

        });