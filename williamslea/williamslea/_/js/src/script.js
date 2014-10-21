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

    $("#validateForm [rel=tooltip]").tooltip({ selector: "[title]",
        placement: "bottom",
        trigger: "focus",
        animation: false
    });

    // Submit doc modal
    $(window).load(function(){
        $('#submitDoc').modal('show');
        $('#approveDoc').modal('show');
        $('#editUser').modal('show');
        $('#createUser').modal('show');
    });

    $("#input-signature").fileinput({
        showUpload: false,
        allowedFileExtensions: ["jpg", "gif", "png"],
        browseLabel: 'Upload image'
    });

    // multiselect
    $("select[role='multiselect']").multiselect();

    //checkbox password
    $('.credential input[type="checkbox"]').change(function () {
        $('.credential-pwd').toggle(this.checked);
    }).change(); //ensure visible state matches initially

});