$(document).ready(function() {	
    $( "#submitform" ).on( "click", function() {
        
        var emailid = $('#emailid').val();
      
        var userpassword = $('#userpassword').val();
        // Hiding error messages	
        $('.errorMsg').hide();
        
        if(checkEmail(emailid) == false){	   
           $('#erroremail').show();	
           return false;	  	   
        	  	   
        }else if(checkPassword(userpassword) == false){	   
           $('#errorpassword').show();		   
           return false;	  	   
        }else{
            alert("successfully login")
        }
      
    });
    });
    //function used to check valid email
    function checkEmail(email)
    {
        //regular expression for email
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(pattern.test(email)){
            return true;
        } else {
            return false;
        }
    }
    
   
    
    
    //function used to validate password
    function checkPassword(password){
        //regular expression for password
        var pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        if(pattern.test(password)){
            return true;
        }else{
            return false;
        }
    }

  