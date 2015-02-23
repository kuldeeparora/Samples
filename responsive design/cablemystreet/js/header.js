
$(function(){
    $('#toggle-login-content > p > a').on('click', function(evt){
        if(window.innerWidth < 992) {
            $('#tablet-and-mobile-signin').toggleClass('show-signin');
            $(this).toggleClass('active-mobile');
            return false;
        }
        $('#tablet-and-mobile-signin').removeClass('show-signin');
        $(this).removeClass('active-mobile');
        return true;
    });

    $('#mobile-main-menu-toggle').on('click', function(evt) {
        $(this).toggleClass('active')
            .parent().parent().prev('.unified-header-level-one-links').toggleClass('show');
    });

    $('#accordionToggle').on('click', function(evt) {
        $(this).toggleClass('active')
            .parent()
            .next('.unified-header-level-one-sublinks').toggleClass('show');

        //reset sublinks on closing dropdown
        if(!$(this).hasClass('active')) {
            $('.level-one-sublinks-dropdown').removeClass('show-dropdown');
            $('.unified-header-level-one-sublinks').css('height','auto');
        }
        return false;
    });

    $('.unified-header-level-one-sublinks').on('click', '.arrow-icon', function(evt) {
        var $this = $(this);
        var sublinkSubSection = $this.parent().next('.level-one-sublinks-dropdown').addClass('show-dropdown')
                                .children().get(0);
        var sublinkHeight = $(sublinkSubSection).css('height');
        $('.unified-header-level-one-sublinks').css('height', sublinkHeight);
        return false;
    });
    $('.unified-header-level-one-sublinks').on('click', '.back-home', function(evt){
        $(this).parents('.level-one-sublinks-dropdown').removeClass('show-dropdown');
        $('.unified-header-level-one-sublinks').css('height','auto');
        return false;
    });
});