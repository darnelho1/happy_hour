$('#searchBox').keypress(function(event) {
  /* Act on the event */
  if(event.which===13){
    // console.log('success');

    searchCrit=$('#searchBox').val();
    $.post('/search',{searchCrit: searchCrit},function(data){
      // console.log(data);
      

    })


  }
});
