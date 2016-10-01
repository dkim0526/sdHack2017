
$(function(){
  
  $('#submitButton').attr('disabled', true);
  var inputs = $('input[type="text"]');
  var goodForm = false;
  $(inputs).change(function(){
    for(var i = 0; i < inputs.length; i++){                  
        console.log($($(inputs[i])).next().hasClass('ok'));        
        console.log(inputs.length);
        if($($(inputs[i])).next().hasClass('ok')){
          goodForm = true;
        }
        else{
          goodForm = false;  
        }        
    }

    if(goodForm){
      console.log("hello");    
      $('#submitButton').attr('disabled', false);
      $("#submitButton").click(function(e){
          e.preventDefault();
          
          alert("successfully compelted!!!");
      });
    }
    else{
      console.log("SSIBAL");
    }


  });  
  
    
});