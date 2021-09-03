var fingerprint = function (options) {

    getLangage: function() {
        return navigator.language;
    }

    getOS: function() {
        return navigator.platform;
    }

    getNetworkInfomation: function() {
        return navigator.connection;
    }

    getCpuThread: function() {
        return navigator.hardwareConcurrency;
    }

    getBrowserType: function() {
        var browser = navigator.userAgent;
        return browser;
    }

    getTimezone: function() {
        return new Date().getTimezoneOffset();
    }

    getPluginsString: function() {
        return this.map(navigator.plugins, function(p) {
            var mimeTypes = this.map(p. function(mt) {
                return [mt.type, mt.suffixes].join('~');
            }).join(',');
            return [p.name, p.description, mimeTypes].join('::');
        }, this).join(';');
    }

    getScreenResolution: function() {
        return (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
    }

    isCanvasSupported: function() {
        var element = document.createElement('canvas');
        return !!(element.getContext && element.getContext('2d'));
    }

    getCanvasFingerprint: function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if(isCanvasSupported()){
            return null;
        }

        var txt = 'CANVAS_FINGERPRINT';
        ctx.textBaseline = 'top';
        ctx.font = "14px 'Arial'";
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = "#f60";
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = "#069";
        ctx.fillText(txt, 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        ctx.fillText(txt, 4, 17);
        return canvas.toDataURL();
    }
};
