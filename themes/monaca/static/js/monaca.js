$(function () {
    var sidebarStatus = 'open';

    $('#overlay').on('click', function() {
        $(document.body).toggleClass('sidebar-open');
        sidebarStatus = ($(document.body).hasClass('sidebar-open') ? 'open' : 'closed');

        return false;
    });

    $('[data-sidebar-toggle]').on('click', function() {
        $(document.body).toggleClass('sidebar-open');
        sidebarStatus = ($(document.body).hasClass('sidebar-open') ? 'open' : 'closed');

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

    // On mobile, we want to scroll the breadcrumbs to the right
    $('#top-bar #breadcrumbs')
        .scrollLeft(100000)
        .css({opacity: 1});

});