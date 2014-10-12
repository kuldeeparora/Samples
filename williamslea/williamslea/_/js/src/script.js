$(document).ready(function(){
    // popover & tooltip position
    var clickoverettings = {
        placement: 'bottom',
        html: true
    }
    $('[rel="clickover"]').clickover(clickoverettings);

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


    // Submit doc modal
    $(window).load(function(){
        $('#submitDoc').modal('show');
    });

});