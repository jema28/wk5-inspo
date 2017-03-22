var currentTag = 'all';

// array of buttons
var optionButtons = document.getElementsByClassName('tag-button');

for (var i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener('click', function(event) {
    // find out which button was clicked
    var button = event.target;
    var tag = button.dataset.tag;
    // update the currentTag variable
    currentTag = tag;
    // after you chose the right opition we show the right data(run getQuestions function)
    getQuestions(tag, renderToList);
  });
}
function renderToList(error, items) {
  // items should be an array
  // the function should show them in a list on the page
}

function getQuestions(tag, callback) {
  // tag is e.g. 'all' or 'js'
  // callback fires after response is received
  var url = '/questions?tag=' + tag;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    }
    else if (xhr.status === 500) {
      var errorMessage = xhr.responseText;
      callback(errorMessage, null);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}
