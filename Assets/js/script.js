var currentTime = dayjs().format('h:mm:ss, dddd MMMM DD, YYYY');
 // will be used to compare each block with.
var $currentTime = $('p.currentDay');
var $cards = $('div.row');   //class will change based on current time then will trigger respective css styles. //root?
let $text = $('textarea.description');
var $hour = $('div.hour');
$currentTime.text(currentTime);
// var save = document.querySelector('#save');
let scheduleCards = $('.container-lg');
var localStorage = $('px-5');
var saveTask = document.getElementsByClassName('.fas');

console.log(currentTime);

function updateHour (){
  newDate = dayjs().hour();
console.log(newDate);
  $('.time-block').each(function(){
var blockHour = parseInt($(this).attr('id').split('-')[1])
if(blockHour < newDate){
  $(this).addClass('past');
} else if(blockHour === newDate){
  $(this).removeClass('past');
  $(this).addClass('present');
} else {
  $(this).removeClass('past')
  $(this).removeClass('present');
  $(this).addClass('future');
}
console.log(blockHour);
  })
}

updateHour();
// setInterval(updateHour,15000)
$('.saveBtn').on('click',function(){
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time,value);
})

 $('#hour-9 .description').val(localStorage.getItem('hour-9'));
 $('#hour-10 .description').val(localStorage.getItem('hour-10'));
 $('#hour-11 .description').val(localStorage.getItem('hour-11'));
 $('#hour-12 .description').val(localStorage.getItem('hour-12'));
 $('#hour-13 .description').val(localStorage.getItem('hour-13'));
 $('#hour-14 .description').val(localStorage.getItem('hour-14'));
 $('#hour-15 .description').val(localStorage.getItem('hour-15'));
 $('#hour-16 .description').val(localStorage.getItem('hour-16'));
 $('#hour-17 .description').val(localStorage.getItem('hour-17'));




// originally tried using jquery as seen below but encountered some issues ,got through some but one kept giving me a hard time so opted to keep most of the project in html. 

// var am = "";

// for (var i = 9; i < 13; i++) {
//   if(newDate == i){
//     am = 'present';
//   }if (i > newDate){
//     am = 'future';
//   } else if (i < newDate){
//     am = 'past';
//   }
//   let newBlockAm = `
// <div id="hour-${i}am  root" class="row time-block ${am}">
// <div class="col-2 col-md-1 hour text-center py-3">${i}AM</div>
// <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
// <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//   <i id="save" class="fas fa-save" aria-hidden="false"></i>
// </button>
// </div>`;
//   $hour.text(i);
//   scheduleCards.append(newBlockAm);
//   console.log(newBlockAm);
// };

// let pm = '';

// for (var i = 1; i < 12; i++){
//   // if(i == newDate){
//   //   pm = 'present';
//   // } if (i > newDate){
//   //   pm = 'future';
//   // } else if( i < newDate){
//   //   pm = 'past';
//   // }
//   let newBlockPm = `
//   <div id="hour-${i}pm  root" class="row time-block ${am}">
//   <div class="col-2 col-md-1 hour text-center py-3">${i}PM</div>
//   <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//   <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//     <i id="save" class="fas fa-save" aria-hidden="false"></i>
//   </button>
//   </div>`;
//   scheduleCards.append(newBlockPm);
//   $hour.text(i);
//   console.log(newBlockPm);
//   console.log(i);
// };
