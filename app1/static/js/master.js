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
