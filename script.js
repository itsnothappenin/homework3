const form = document.getElementById('form');
const list = document.getElementById('list');
const count = document.getElementById('count');
const INPUT = document.getElementById('input');
const clearComplatedButton = document.getElementById('clearComplated');
const allButton = document.getElementById('all');
const activeButton = document.getElementById('active');
const completedButton = document.getElementById('completed');
const modeButton = document.getElementById('modeButton');
const modeIcon = document.getElementById('modeIcon')

let doings =[];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const { newTodo } = form.elements;

  const todo = {
    title: newTodo.value
  };

  if ( !todo.title ) {
    alert('Please, enter new todo');
    return;
  }

  doings.push(todo);
  displayList(doings);
  updateCount(doings);

  newTodo.value = '';
});


function displayList (doings) {
  let doingsHTML='';
  for ( let todo of doings) {
    doingsHTML += `<li class="li">
                      <div class="input">
                        <input id= "input" type="checkbox">
                        <span id="span">${todo.title}</span>
                      </div>
                    </li>`;
  }
  list.innerHTML = doingsHTML;
};

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'INPUT') {
    const checkbox = event.target;
    const span = event.target.nextElementSibling;
    if (checkbox.checked) {
      span.classList.add ("completed");
      span.style.color ="grey";
    } else {
      span.classList.remove ("completed");
      span.style.color ="inherit";
    }
  }
});



allButton.addEventListener('click', function(event) {
  displayList(doings);
  allButton.style.color = 'blue';
  activeButton.style.color = 'black';
  completedButton.style.color = 'black';
});

activeButton.addEventListener('click', function(event) {
  let completedElements = document.querySelectorAll('.completed');
  for ( let element of completedElements) {
    element.parentElement.hidden = 'true';
  }
   activeButton.style.color = 'blue';
   allButton.style.color = 'black';
   completedButton.style.color = 'black';

  });

//   document.querySelectorAll('.completed').forEach(function (completedElement) {
//     completedElement.parentElement.hidden='true';
//   });
// });


completedButton.addEventListener('click', function(event) {
  let activeElements = document.querySelectorAll('.active');
  for ( let element of activeElements) {
    element.parentElement.hidden = 'true';
  }
  completedButton.style.color = 'blue';
  activeButton.style.color = 'black'
  allButton.style.color = 'black';

});

clearComplatedButton.addEventListener('click', function(event) {
  document.querySelectorAll('.completed').forEach(function (completedElement) {
    completedElement.parentElement.parentElement.remove();
  });
});




function updateCount (doings) {
  count.textContent = doings.length;
}

modeButton.addEventListener ('click', function(event) {
  if (document.documentElement.dataset.theme === 'dark') {
    document.documentElement.dataset.theme = 'light';
    modeIcon.src = "icon-moon.svg";
  } else {
    document.documentElement.dataset.theme = 'dark';
    modeIcon.src = "icon-sun.svg";
  }

});
