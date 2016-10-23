Demo = {};
Demo.Search = {
    app: angular.module('demoSearch', ['ngSanitize']),
    url: "json/results.json",
    container: $('#searchResults'),
    searchInput: $("#searchInput")
};