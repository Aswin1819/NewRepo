$(document).ready(function(){
   $("#signupForm").validate({
       rules:{
           Fname:{
               required:true,
               minlength:4
           },
           Srname:{
               required:true,
               maxlength:5
           },
           MnorEM:{
               required:true,
               digit:true
           },
           Day:{
               required:true
           }

       }

   })
})