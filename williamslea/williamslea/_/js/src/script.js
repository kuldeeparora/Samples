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

    $('.user-department').tooltip({
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
        $('#editGroup').modal('show');
    });

    $("#input-signature").fileinput({
        showUpload: false,
        allowedFileExtensions: ["jpg", "gif", "png"],
        browseLabel: 'Upload image'
    });

    // multiselect
    //$("select[role='multiselect']").multiselect();

    $("select[role='multiselect']").multiselect({
        templates: {
            //button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
            //ul: '<ul class="multiselect-container dropdown-menu"></ul>',
            //filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
            //filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
            li: '<li><a href="javascript:void(0);"><label></label><input class="form-control multiselect-textbox" type="text" value="test"></a></li>asas'
            //divider: '<li class="multiselect-item divider"></li>',
            //liGroup: '<li class="multiselect-item group"><label class="multiselect-group"></label></li>'
        }
    });

    //checkbox password
    $('.credential input[type="checkbox"]').change(function () {
        $('.credential-pwd').toggle(this.checked);
    }).change(); //ensure visible state matches initially

});