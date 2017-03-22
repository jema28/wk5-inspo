var currentTag = 'all';

// array of buttons
var optionButtons;

optionButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    // find out which button was clicked
    // update the currentTag variable
    // after you chose the right opition we show the right data(run getQuestions function)
  });
});

function renderToList(error, items) {
  // items should be an array
  if (error) {
    console.log(error);
    return;
  }

  var sectionContainer = document.getElementById('posts-container');
  sectionContainer.innerHTML = '';

  var ul = document.createElement('ul');

  items.forEach(function(question){
    var listItem = document.createElement('li');
    var aTitle = document.createElement('a');

    aTitle.setAttribute('href', question.link);
    aTitle.innerHTML = question.title;

    listItem.appendChild(aTitle);
    ul.appendChild(listItem);
  });
  // the function should show them in a list on the page
  sectionContainer.appendChild(ul);
}

function getQuestions(tag, callback) {
  // tag is e.g. 'all' or 'js'
  // callback fires after response is received
}
