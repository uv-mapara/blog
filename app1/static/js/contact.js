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

/*START - SAVE DATA OPERATIONS*/
$("#btnSubmit").click(function () {
    SaveData();
});

function SaveData() {
    var ErrMsg = '';    

    if ($("#firstname").val().trim() == '') {
        ErrMsg += '<br/>-- First Name.';
    }   
    if ($("#lastname").val().trim() == '') {
        ErrMsg += '<br/>-- Lirst Name.';
    }  
    if ($("#email").val().trim() == '') {
        ErrMsg += '<br/>-- Email.';
    }  
    if ($("#message").val().trim() == '') {
        ErrMsg += '<br/>-- Message.';
    }  

    if (ErrMsg.length != 0) {
        ShowMessage('DivDisplayMsg', "alert alert-warning TextBlack", "You have some form errors. Please check below.", '<br/>' + ErrMsg, 0);
    }

    else{      
        
        $( "form" ).on( "submit", function(e) {
 
            var dataString = $(this).serialize();
             
            // alert(dataString); return false;
         
            $.ajax({
              type: "POST",
              url: '{% url "contact" }',
              data: dataString,
              success: function () {
                alert("Save")
              }
            });
         
            e.preventDefault();
          });
        
    }
    
   
}
/*END - SAVE DATA OPERATIONS*/


  

  
