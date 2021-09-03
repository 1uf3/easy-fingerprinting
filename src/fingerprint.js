function getLanguage() {
    return navigator.language;
}

function getOS() {
    return navigator.platform;
}

function getCpuThread() {
    return navigator.hardwareConcurrency;
}

function getBrowserType() {
    var browser = navigator.userAgent;
    return browser;
}

function getTimezone() {
    return new Date().getTimezoneOffset();
}

function getScreenResolution() {
    return (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
}

function getCanvasFingerprint() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

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

