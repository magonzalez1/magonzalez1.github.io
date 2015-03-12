$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"];
  var click_count = 0;
  var click_1 = 'nothing';
  var click_2 = 'nothing';
  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  };
  $('.card').click(function(){
    if(click_count == 0){
  	$(this).find('p').css('opacity', 1);
    $(this).find('p').addClass('clicked');  
      click_count = 1;
      click_1 = $(this).find('p').text();
    }
    else{	
      $(this).find('p').css('opacity', 1);
      click_count = 0;
      click_2 = $(this).find('p').text();
      $(this).find('p').addClass('clicked');
      if(click_1 != click_2){
         setTimeout(function(){$('.clicked').css('opacity', '0').removeClass('clicked')}, 1000);
      }
    };
	});
});
