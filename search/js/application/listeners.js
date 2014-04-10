(function () {
    'use strict';

    // keyup & keydown
    $('.search-test').on("keydown", function (e) {
        if(Demo.Search.Helper.countVisibleResults() != 0){
            if (e.keyCode == 40) {
                if (Demo.Search.activeResultIndex === undefined) {
                    Demo.Search.activeResultIndex = 1;
                } else if ((Demo.Search.activeResultIndex + 1) < Demo.Search.Helper.countVisibleResults()) {
                    Demo.Search.activeResultIndex++;
                }
                $('.search-results li').removeClass('active');
                $('.search-results li:eq(' + Demo.Search.activeResultIndex + ')').addClass('active');
                return false;
            }
            if (e.keyCode == 38) {
                if (Demo.Search.activeResultIndex === undefined) {
                    Demo.Search.activeResultIndex = 0;
                } else if (Demo.Search.activeResultIndex > 0) {
                    Demo.Search.activeResultIndex--;
                }
                $('.search-results li').removeClass('active');
                $('.search-results li:eq(' + Demo.Search.activeResultIndex + ')').addClass('active');

                return false;
            }
        }
    });

    $(document).ready(function () {
        $("#search_input").focus(function(e) { $(this).select(); });
        $('#search_input').mouseup(function(e) { return false; });
    });

    $(document).mouseup(function (e) {
        if (Demo.Search.searchInput.length !== 0 && !Demo.Search.container.is(e.target) // if the target of the click isn't the container...
            && Demo.Search.container.has(e.target).length === 0
            && !Demo.Search.searchInput.is(e.target)) // ... nor a descendant of the container
        {
            Demo.Search.container.hide();
            Demo.Search.searchTerm = undefined;
            Demo.Search.searchInput.val("");
        }
    });
}());

