
(function(){
  $('#Csform').find('li').css({color:'black'});

$('#name').on('click','input',function(){
           $(this).css({border:2 + 'px ' + 'ridge ' + ' black' });
});
$('#email').on('click','input',function(){
           $(this).css({border:2 + 'px ' + 'ridge ' + ' black' });
});

$('#Sug').on('click','input',function(){
   $(this).css({border:2 + 'px ' + 'ridge ' + ' black' });

});

$('submit').on('click','button',function(){
  // INSERT INTO  UserSuggestions(name,email,suggestions) values(name,email.,suggestion)
      var name = $('#name').val();
      var email = $('#email').val();
      var suggestion = $('#Sug').val();
      var Insert = 'INSERT INTO  UserSuggestions (name,email,suggestions) ' +  'values (' + name  + ',' +  email +',' + suggestion +')'  ;
   });
}());
function cancel(){
  $('#cancel').on('click',function(){
    
  document.getElementById("CForm").reset();
    
  })
// send contact information form   
var recipient="test";
var at = String.fromCharCode(64);
var dotcom="example.com";
var mail="mailto:";
window.open(mail+recipient+at+dotcom);
  
}

    cancel();
