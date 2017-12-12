$(function () {
    var sidebarStatus = 'open';

    $('#overlay').on('click', function() {
        $(document.body).toggleClass('sidebar-hidden');
        sidebarStatus = ($(document.body).hasClass('sidebar-hidden') ? 'closed' : 'open');

        return false;
    });

    $('[data-sidebar-toggle]').on('click', function() {
        $(document.body).toggleClass('sidebar-hidden');
        sidebarStatus = ($(document.body).hasClass('sidebar-hidden') ? 'closed' : 'open');

        return false;
    });

    $('#sidebar .category-icon').on('click', function() {
        $( this ).toggleClass("fa-angle-down fa-angle-right");
        $( this ).parent().parent().children('ul').toggle();
        return false;
    });

    $('#cordova-version-select').on('input', function(ev) {
        var selectedCordovaVersion = ev.currentTarget.value;

        location.href = location.href.replace(/cordova_[0-9].[0-9]/, 'cordova_' + selectedCordovaVersion);
    });
});
