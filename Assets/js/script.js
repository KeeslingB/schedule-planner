var currentTime = dayjs();
var $currentTime = $('p.currentDay');   //will be used to compare each row.
var $row = $('div.row');   //class will change based on current time then will trigger respective css styles.
let $text = $('textarea.description');  //used for storing input into local storage.
TimeHour = document.getElementById(`hour-{i}`); //most likely not targeting anything atm.


$currentTime.text(dayjs());


// text.innerHTML = localStorage.getItem($text);
// $text.textContent = text;
// let val_serialized = JSON.stringify(val);
$('i.fas').click(function(){
  localStorage.setItem('todo', JSON.stringify($text));
  textL = JSON.parse(localStorage.getItem('text'));
  // localStorage.setItem(textarea,'textarea');
  // alert( event.currentTarget === this );
  console.log(localStorage);
});
// localStorage.setItem('data', JSON.stringify(data));

var currentClass = 'past';
const hourName = '9am';
var hourData = '';




  for (var i = 9; i > 17; i++){
    var cards = $(`
     <div id="hour-${i}" class="row time-block ${currentClass}">
    <div class="col-2 col-md-1 hour text-center py-3">${hourData}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
  `);
  document.body.append($row);
  }




// function getScheduleTime(projectTime) {
//   var $row = $('.row').first();
//   var $time = $row.find('.hour');
//   var timeString = $time.text();
//   var time = dayjs(timeString, 'h:mm A');

//   if (dayjs().isSame(time, 'minute')) {
//     $row.addClass('present');
//   } else if (dayjs().isBefore(time, 'minute')) {
//     $row.addClass('future');
//   } else {
//     $row.addClass('past');
//   }
// }









// things changing 1 hour, 2 class of time, 
// const newBlock = $(`
// <div id="hour-${i}" class="row ${currentClass}">
// <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
// <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
// <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//   <i class="fas fa-save" aria-hidden="true"></i>
// </button>
// </div>`);






// for (var i = 9; i > 17; i ++){
  
// }

// currentClass = dayjs;

// console.log(newBlock);




// localStorage.setItem('');   -for when i get the cards done




//what does each row have to do:
//-Display current hour (9am 10am..)
//-indicate if the row is past-present-future
// display whatever entry is availablle for that time block
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.