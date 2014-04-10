(function () {
    'use strict';
    Demo.Search.Helper = {
        countVisibleResults: function () {
            return $('.search-results').find('li').length;
        }
    };
}());
