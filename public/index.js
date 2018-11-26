(function () {
  // array of buttons
  var optionButtons = document.getElementsByClassName('tag-button')

  for (var i = 0; i < optionButtons.length; i++) {
    optionButtons[i]
      .addEventListener('click', function (event) {
        // find out which button was clicked
        var button = event.target
        var tag = button.dataset.tag

        // after you chose the right opition we show the right data(run getQuestions
        // function)
        getQuestions(tag, renderToList)
      })
  }

  function renderToList (error, items) {
    // items should be an array
    if (error) {
      console.log(error)
      return
    }

    var sectionContainer = document.getElementById('posts-container')
    sectionContainer.innerHTML = ''

    var ul = document.createElement('ul')

    items.forEach(function (question) {
      var listItem = document.createElement('li')
      var aTitle = document.createElement('a')

      aTitle.setAttribute('href', question.link)
      aTitle.innerHTML = question.title

      listItem.appendChild(aTitle)
      ul.appendChild(listItem)
    })
    // the function should show them in a list on the page
    sectionContainer.appendChild(ul)
  }

  function getQuestions (tag, callback) {
    var url = '/questions?tag=' + tag
    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
})()
