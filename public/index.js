var currentTag = 'all';

// array of buttons
var optionButtons = document.getElementsByClassName('tag-button');

optionButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    // find out which button was clicked
    // update the currentTag variable
    // after you chose the right opition we show the right data(run getQuestions function)
  });
});

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
