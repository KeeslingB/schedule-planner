const currentTime = dayjs().format(' h:mm:ss, dddd MMMM DD, YYYY');
console.log(currentTime); // will be used to compare each block with.
var $currentTime = $('p.currentDay');   
var $cards = $('div.row');   //class will change based on current time then will trigger respective css styles.
let $text = $('textarea.description');  //used for storing input into local storage.
var $hour = $('div.hour');
$currentTime.text(currentTime);

let scheduleCards = $('.container-lg');
const localStorage = $('px-5');
const saveTask = $('i.fas');



for(var i = 9; i < 13; i++){
let newBlockAm =`
<div id="hour-9  root" class="row time-block past">
<div class="col-2 col-md-1 hour text-center py-3">${i}AM</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div>`;
scheduleCards.append(newBlockAm);
$hour.text(i);
console.log($hour); //think think think
};

for(var i = 1; i < 6; i++){
  let newBlockPm =`
  <div id="hour-9  root" class="row time-block past">
  <div class="col-2 col-md-1 hour text-center py-3">${i}PM</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>`;
  scheduleCards.append(newBlockPm);
  $hour.text(i);
  $cards.toggleClass('past');
  };
  
















saveTask.click(function(){
     var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
})

















// text.innerHTML = localStorage.getItem($text);
// $text.textContent = text;
// let val_serialized = JSON.stringify(val);
// saveTask.click(function(){
//    var value = $(this).siblings('.px-5').val();
//     var time = $(this).parent().attr('id'); // will be a changing value based on time
// localStorage.setItem(time,value);
// });




// want to change time text with each  iteritation in hour div










// var  root = $('#root');

// var divContainer = $('<div>');
// divContainer.addClass('row');

// var divHour = $('<div>');
// divHour.addClass('hour');
// divHour.text('10AM');

//  var textL = $('<textarea>');
//  textL.addClass('description');

//  var btnIcon = $('<button>');
//  btnIcon.addClass('btn');

//  var saveT = $('<i>');
//  saveT.addClass('fa-save');

// root.append(divHour);





















  // localStorage.setItem('todo', JSON.stringify($text));
  // var textL = JSON.parse(localStorage.getItem('todo'));
  // localStorage.setItem(textarea,'textarea');
  // alert( event.currentTarget === this );
  // console.log(textL);
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
  