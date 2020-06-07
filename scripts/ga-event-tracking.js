$(document).ready(function () {
    jQuery('a[href$=".pdf"]').click(function () {
        ga('send', 'event', 'Download Literature', 'Click', this.title);
    });
    jQuery('a[href^="mailto:"]').click(function () {
        ga('send', 'event', 'Click Email Link', 'ClickMailLink', this.href);
    });
});