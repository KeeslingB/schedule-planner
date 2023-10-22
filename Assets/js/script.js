var currentTime = dayjs().format(' h:mm:ss, dddd MMMM DD, YYYY');
console.log(currentTime); // will be used to compare each block with.
var $currentTime = $('p.currentDay');
var $cards = $('div.row');   //class will change based on current time then will trigger respective css styles. //root?
let $text = $('textarea.description');  //used for storing input into local storage.
saveBtn = document.getElementsByClassName('fa-save');
var $hour = $('div.hour');
$currentTime.text(currentTime);

let scheduleCards = $('.container-lg');
var localStorage = $('px-5');
var saveTask = document.getElementsByClassName('i.fas');

for (var i = 9; i < 13; i++) {
  if (i < currentTime) {
    am = 'past';
  }
  if (i == currentTime) {
    am = 'present';
  } else (am = 'future');
  let newBlockAm = `
<div id="hour-${i}am  root" class="row time-block ${am}">
<div class="col-2 col-md-1 hour text-center py-3">${i}AM</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="false"></i>
</button>
</div>`;
  $hour.text(i);
  scheduleCards.append(newBlockAm);
  // console.log(newBlockAm);
};

for (var i = 1; i < 6; i++) {
  if (i < currentTime) {
    pm = 'past';
  }
  if (i == currentTime) {
    pm = 'present';
  } else (pm = 'future');
  let newBlockPm = `
  <div id="hour-${i}pm  root" class="row time-block ${pm}">
  <div class="col-2 col-md-1 hour text-center py-3">${i}PM</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="false"></i>
  </button>
  </div>`;
  scheduleCards.append(newBlockPm);
  $hour.text(i);
  // console.log(newBlockPm);
};

saveTask.setItem('todo',function(){
  console.log('hey');
})



// $text.innerHTML

// let val_serialized = JSON.stringify(val);
// saveTask.click(function(){
   
//     var time = $(this).parent().attr('id'); // will be a changing value based on time
// localStorage.setItem(time,value);
// });


// localStorage.setItem('');   -for when i get the cards done
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
