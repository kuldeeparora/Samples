$(document).ready(function(){
    // popover & tooltip position
    var popOverSettings = {
        placement: 'bottom',
        container: 'body',
        html: true,
        selector: '[rel="popover"]',
        content: function () {
            return $('#popover-content').html();
        }
    }
    $('body').popover(popOverSettings);
    $('.doc-info').tooltip({
        'placement': 'right'
    });

    $('[rel=tooltip]').tooltip();

    // close button of label
    $('.label-close').on('click', '.close', function() {
        $('.label-close').hide();
    });

    // tooltip on focus for input
    $("#createNewDoc [rel=tooltip]").tooltip({ selector: "[title]",
        placement: "bottom",
        trigger: "focus",
        animation: false
    });

});