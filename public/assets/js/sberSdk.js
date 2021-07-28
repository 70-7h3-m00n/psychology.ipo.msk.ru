(function() {
        iapSDK = window.iapSDK || (window.iapSDK = []);
        iapSDK.push(['init', {
            apiUrl: '//partners.sbermarketing.ru//api'
        }]);
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//partners.sbermarketing.ru/api/tracker/sdk.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    })();
(function(d, w, nav, sc) {
    function serialize(obj) {
        return Object.keys(obj)
            .map(function(key) {
                return [key, obj[key]].join('=');
            })
            .join('&');
    }

    function getCookie(name) {
        var matches = d.cookie.match(new RegExp('(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return matches ? decodeURIComponent(matches[1]) : '';
    }

    function getWGL() {
        var canvas = d.createElement("canvas");
        if (canvas.getContext) {
            var gl = canvas.getContext("webgl") ||
                canvas.getContext("webgl-experimental");
            if (gl) {
                var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                if (debugInfo) {
                    return {
                        ven: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
                        ren: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
                    };
                }
            }
        }
    }

    function hit(referrer) {
        var s = w && w.sessionStorage ? w.sessionStorage : {};
        var query = {
            rnd: Math.random().toString(),
            u: encodeURIComponent(d.URL),
            r: encodeURIComponent(referrer || d.referrer)
        };
        try {
            var e = d.documentElement;
            query.v = 4;
            query.w = w.top === w ? 1 : 0;
            query.h = d.hidden ? 1 : 0;
            query.gW = Math.max(e.clientWidth, w.innerWidth || 0);
            query.gH = Math.max(e.clientHeight, w.innerHeight || 0);
            query.gDH = Math.max(d.body.scrollHeight, e.scrollHeight,
                d.body.offsetHeight, e.offsetHeight, d.body.clientHeight, e.clientHeight);
            query.gDW = Math.max(d.body.scrollWidth, e.scrollWidth,
                d.body.offsetWidth, e.offsetWidth, d.body.clientWidth, e.clientWidth);
            query.sW = sc.width || 0;
            query.sH = sc.height || 0;
            query.daw = sc.availWidth || 0;
            query.dah = sc.availHeight || 0;
            query.ga = getCookie('_ga');
            query.dpr = w.devicePixelRatio || '';
            query.c = (function() {
                var conn = '';
                if (nav && nav.connection) {
                    if (nav.connection.type) conn = nav.connection.type;
                    else if (nav.connection.effectiveType) conn = 'eff:' +
                        nav.connection.effectiveType;
                }
                return conn;
            })();
            query.t = s && s._tid ? s._tid : (s._tid = Date.now());
            if (w.performance) {
                if (w.performance.navigation) {
                    query.rc = w.performance.navigation.redirectCount;
                    query.tn = w.performance.navigation.type;
                }
                if (w.performance.timing) query.dc =
                    (w.performance.timing.secureConnectionStart || w.performance.timing.fetchStart) -
                    w.performance.timing.fetchStart;
            }
            var wGL = getWGL();
            if (wGL) {
                query.wGLRen = wGL.ven;
            }
        } catch (e) {}
        var path = '//statad.ru/pixel.gif';
        var qs = serialize(query);
        new Image().src = [path, '?', qs].join('');
    }
    hit();
    var url = w.location.href;
    var count = 0;
    var checkInterval = setInterval(function() {
        if (count >= 50) clearInterval(checkInterval);
        else if (url !== w.location.href) {
            hit(url);
            url = w.location.href;
            count++;
        }
    }, 1000);
})(document, window, navigator, screen);