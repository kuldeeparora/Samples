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

    // close button of label
    $('.label-close').on('click', '.close', function() {
        $('.label-close').hide();
    });

});