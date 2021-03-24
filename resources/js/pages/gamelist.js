$.on('/gamelist', function() {

    $('.img-small-slots').lazy({
        visibleOnly: true
        });
    
  $('#gamelist-search').keydown(function(){
 
   // Search text
   var text = $(this).val().toLowerCase();
 
   // Hide all content class element
   $('.card').hide();

   $('.img-small-slots').lazy({
          bind: "event"
        });

   // Search 
   $('.card').each(function(){
 
    if($(this).text().toLowerCase().indexOf(""+text+"") != -1 ){
     $(this).closest('.card').show();
    }
  });
 });




}, ['/css/pages/gamelist.css']);
