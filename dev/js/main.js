function checkHeight() {
    var root = document.documentElement;
    root.style.setProperty('--scrren-height', window.innerHeight + 'px');
    var style = getComputedStyle(document.body);
    console.log(style.getPropertyValue('--scrren-height'));
}
checkHeight();