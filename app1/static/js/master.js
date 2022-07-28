$(document).ready(function(){
    $('label').on('click',function(){
        if ($('label').find('i').hasClass('fa-bars')){
        $('label').find('i').addClass('fa-times')
        $('label').find('i').removeClass('fa-bars')
        }
        else if ($('label').find('i').hasClass('fa-times')){
        $('label').find('i').addClass('fa-bars')
        $('label').find('i').removeClass('fa-times')
        }
    });  
    
    var ckbox = $("input[name='checkbox']");        
        $('#check').on('change', function() {
            
            if (ckbox.is(':checked')) {
            
            
            $("html").addClass("ulHtml");

            //send data to ajax

            }else{

                //uncross
                $("html").removeClass("ulHtml");
            }
        });
       
           
 });

 
/*START - SHOW & HIDE ALL TYPES OF MESSAGES*/
function ShowMessage(DivId, MsgType, MsgHeading, MsgText, MsgTimeout) {
    //alert(DivId + ',' + MsgType + ',' + MsgHeading + ',' + MsgText + ',' + MsgTimeout);
    $("#" + DivId).show();
    $("#" + DivId).addClass(MsgType);
    $("#SpnMsgHeader").text(MsgHeading);
    $("#SpnErrorMsg").html(MsgText);
    if (MsgTimeout == 0) {
        $("#" + DivId).show();
    }
    else {
        $("#" + DivId).fadeOut(MsgTimeout);
    }
}

function HideMessage(DivId) {
    //alert(DivId);
    $("#" + DivId).hide();
    $("#" + DivId).removeClass();
}
/*END - SHOW & HIDE ALL TYPES OF MESSAGES*/

/*START - SHOW & HIDE ALL TYPES OF TOASTER MESSAGES*/
function ShowToastrMsg(MsgType, MsgPosition, MsgText, MsgTimeOut) {
    toastr.options =
    {
        "closeButton": true,
        "debug": false,
        "positionClass": MsgPosition,
        "onclick": null,
        "showDuration": "15000",
        "showEasing": "linear",
        "showMethod": "show",
        "timeOut": MsgTimeOut
    }
    if (MsgType == 'Success') {
        toastr.success(MsgText, 'Success');
    } else if (MsgType == 'Error') {
        toastr.error(MsgText, 'Error');
    } else if (MsgType == 'Warning') {
        toastr.warning(MsgText, 'Warning');
    } else {
        toastr.info(MsgText, 'Information');
    }
}

function HideToastrMsg() {
    toastr.clear();
}
/*END - SHOW & HIDE ALL TYPES OF TOASTER MESSAGES*/