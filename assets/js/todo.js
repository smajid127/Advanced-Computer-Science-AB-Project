function showDate(){
  var suffix = "";
  var date = new Date();
  var dayOfMonth = date.getDate();
  var dayOfWeek = date.getDay();
  var Month = date.getMonth();

  var dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthArray = ["January","February","March","April,","May","June","July","August","September","October","November","December"];
  switch(dayOfMonth) {
      case (dayOfMonth == 1 || dayOfMonth == 21 || dayOfMonth == 31): 
        suffix = 'st'; 
        break;
      case (dayOfMonth == 2 || dayOfMonth == 22): 
        suffix = 'nd'; 
        break;
      case (dayOfMonth == 3 || dayOfMonth == 23): 
        suffix = 'rd'; 
        break;
      default: suffix = 'th';
  }
  $('.app .info .date').append("<p id='day'><strong>" + dayArray[dayOfWeek]+",</strong> " + dayOfMonth + suffix + "</p>" +
                               "<p id='month'>" + monthArray[Month] +"</p>");
  };
$(document).ready(function(){
  var check_count = 0;
  var total = 0;
  var saveLastRemovedItem;
  
  showDate();
  
  // Get the total number of "li's" and checked "li's"
  $('li').each(function(e){
    total++;
    var findTheMarkedList = $(this);
    
    if(findTheMarkedList.find('i').hasClass('fa fa-check-circle mark')){
      let checkIfmarked = $( 'li .check_button' ).index(this);
      $('li .right').eq(checkIfmarked).find('p').addClass('line-through').attr("contentEditable", false);
      check_count++;
    }
    
     updateText();
  });
  // Click on button function add new item to list
  $('.bottom #add-new').click(function(e){
    e.preventDefault();
    var li = "";
    
      li += "<li class='slide'>";
      li += " <a href='' class='check_button' onmousedown='return false'>";
      li += "   <i class='fa fa-circle-thin' aria-hidden='true'></i>";
      li += " </a>";
      li += " <div class='right'>";
      li += "    <p contenteditable='true'><strong></strong></p>";
      li += " </div>";
      li += " <span class='delete_button' onmousedown='return false'>";
      li += "   <i class='fa fa-minus' aria-hidden='true'></i>";
      li += " </span>";
      li += "</li>";
    
    $('ul').append(li).find('.slide:last-child').addClass('down');
    
    total+=1;
    $('li:last-child p').text('Task ' + total);
    
    updateText();
  });
  // Click on button function list
  $('.app ul').on('click','li .check_button',function(e){
    e.preventDefault();
    
    let button = $(this).find('i');
    let checked = 'fa fa-check-circle mark';
    let unchecked = 'fa fa-circle-thin';
    
    // Save the current index of button after the click event in the "left" div.
    let index_click = $('li .check_button').index(this);
    // Use the current index of button to target the correct "li p" in the "right" div.
    let linethrough_text = $('li .right').eq(index_click).find('p');
    
    if(button.hasClass(unchecked)){
      linethrough_text.addClass('line-through').attr("contentEditable", false);
      button.removeClass(unchecked + ' mark-alt').addClass(checked);
      check_count +=1;
    }
    else{    
      linethrough_text.removeClass('line-through').attr('contentEditable', true);
      button.removeClass(checked).addClass(unchecked + ' mark-alt');
      check_count -=1;
    }
    
    updateText();
  });
  // Click on button function and delete 'li'
  $('.app ul').on('click','li .delete_button',function(e){
    e.preventDefault();
    let index_click = $( 'li .delete_button' ).index(this);
    let current = $('li').eq(index_click);
    let button = $('.check_button').find('i');

    total -= 1;
    saveLastRemovedItem = current.clone();

    if(button.eq(index_click).hasClass('mark')){
      check_count -=1;
    }
    
    current.addClass('up');
    setTimeout(function () {
      current.remove();  
    }, 575 ); 
    
    $('#undo').removeClass('pop_out').addClass('pop_in').prop('disabled', false);
    
    updateText();
  });
  // Undo buton
  $('.app .bottom').on('click','#undo',function(e){
    e.preventDefault();
    total += 1;

    if(saveLastRemovedItem.find('i').hasClass('mark')){
      check_count +=1;
    }
    
    $('ul').append(saveLastRemovedItem).find('li:last-child').addClass('down');
    $(this).removeClass('pop_in').addClass('pop_out');
    
    updateText();
  });
  
  // -****Custom Functions****-
  function updateText(){
    $('#count').text(total);
    $('#count_done').text(check_count);
    $('#remaining_done').text(total-check_count);
  };
  // -**End Custom Functions**-
});

  // TO-DO Maybe: 1. Make a function to update the task/done count text. DONE
  //              2. Make a function for date. DONE
  //              3. Replace append() with text() in the function date. MAYBE?