// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(76);

  }

  story.textContent = "It was 76 fahrenheit outside, so :insertx: went for a stroll. When they got to :inserty:, they screamed then proceeded to order doordash, then :insertz:. Reece saw the whole thing, but was not surprised or impressed — :insertx: weighs 300 pounds, and it was a disgustingly muggy day";
  story.style.visibility = 'visible';
  var insertX =  ['Santa','The Grinch','George Bush'];
  var insertY = ['my basement','In n Out','an abandoned motel 6'];
  var insertZ = ['errupted','morphed into a snake','grew into an ugly ass bat'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
var newStory = story.textContent;
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Reece',name);
     }
     if (document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.0714286) + ' stone';
        var temperature = Math.round((76 - 32) * (5/9)) + ' centigrade';
        var newStory = newStory.replace('76 fahrenheit', temperature);
        var newStory = newStory.replace('300 pounds', weight);
    
      }
      story.textContent = newStory;
      story.style.visibility = 'visible';
}
