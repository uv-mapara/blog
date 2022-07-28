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
        ErrMsg += '<br/>-- Last Name.';
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
        $.blockUI();
            $.ajax({
              url: 'contact',
              type:'POST',
              data: {
                  firstname:$('#firstname').val(),
                  lastname:$('#lastname').val(),
                  email:$('#email').val(),
                  message:$('#message').val(),
                  csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                },
              success: function (data) {
                setTimeout($.unblockUI, 2000);
                HideToastrMsg();
                ShowToastrMsg("success", "toast-top-full-width", "Sent SuccessFully.", "", 15000);
                HideMessage("DivDisplayMsg");                                              
              },
            });       
        
    }
    
   
}
/*END - SAVE DATA OPERATIONS*/

/*START - Reset DATA OPERATIONS*/

$('#btnReset').click(function(){
    cleardata();
})

function cleardata(){
    $("#firstname").val('');
    $("#lastname").val('');
    $("#email").val('');
    $("#message").val('');
    HideMessage('DivDisplayMsg');
}

/*END - SAVE DATA OPERATIONS*/

$('.close').click(function(){
    HideMessage('DivDisplayMsg');
})




  

  
