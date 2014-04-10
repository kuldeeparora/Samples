(function () {
    'use strict';

    Demo.Search.app.filter('highlight', function() {
        return function(text, phrase) {
            if (text !== undefined && phrase !== undefined){
                var highlightedText = text;
                phrase = phrase.toLowerCase();
                var index = text.toLowerCase().indexOf(phrase);
                if (index >= 0) {
                    highlightedText = text.substring(0, index) + "<strong class='highlight'>" + text.substring(index, index + phrase.length) + "</strong>" + text.substring(index + phrase.length);
                }

                return highlightedText;
            }

            return text;
        };
    });
}());
