function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dayPopulator() {
  let daysUL = document.getElementById('days');

  for (let index in dezDaysList) {
    let day = dezDaysList[index];
    let listItem = document.createElement('li')

    listItem.innerText = day;
    listItem.className = 'day';

    if (day === 24 || day === 25 || day === 31) {
      listItem.className = listItem.className + ' holiday';
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      listItem.className = listItem.className + ' friday';
    }

    daysUL.appendChild(listItem);
  }
}

dayPopulator();

// Exercício 2
function feriados(string) {
  let button = document.createElement('button');
  let parent = document.querySelector('.buttons-container')

  button.innerText = string;
  button.id = 'btn-holiday';

  parent.appendChild(button)
}

feriados('Feriados');

// Exercício 3
let holidayButton = document.getElementById('btn-holiday');

function holidayPainter() {
  let holidays = document.getElementsByClassName('holiday');
  
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === 'yellow') {
      holidays[i].removeAttribute('style');
    } else {
      holidays[i].style.backgroundColor = 'yellow';
    }
  }
}

holidayButton.addEventListener('click', holidayPainter)

// Exercício 4
function sextou(string) {
  let button = document.createElement('button');
  let parent = document.querySelector('.buttons-container')

  button.innerText = string;
  button.id = 'btn-friday';

  parent.appendChild(button)
}

sextou('Sexta-feira');

// Exercício 5

let fridayButton = document.getElementById('btn-friday');

function fridayRenamer() {
  let fridays = document.getElementsByClassName('friday');
  let fridayDays = ["4", "11", "18", "25"];
  
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerText === 'Sextou!') {
      fridays[i].innerText = `${fridayDays[i]}`;
    } else {
      fridays[i].innerText = 'Sextou!';
    }
  }
}

fridayButton.addEventListener('click', fridayRenamer);

// Exercício 6
let weekdays = document.getElementById('days')

function zoom(event) {
  event.target.style.fontSize = '30px';
}

function unzoom(event) {
  event.target.style.fontSize = null;
}

weekdays.addEventListener('mouseover', zoom)
weekdays.addEventListener('mouseout', unzoom)

// Exercício 7
function chore(string) {
  let span = document.createElement('span');
  let parent = document.querySelector('.my-tasks')

  span.innerText = string;
  
  parent.appendChild(span)
}

chore('Estudar');

// Exercício 8
function caption(string) {
  let div = document.createElement('div');
  let parent = document.querySelector('.my-tasks')

  div.style.backgroundColor = string;
  div.className = 'task';
  
  parent.appendChild(div)
}

caption('green');

// Exercício 9
let taskDiv = document.querySelector('.task');

function taskSelector(event) {
  if (event.target.className === 'task') {
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task';
  }
}

taskDiv.addEventListener('click', taskSelector);

// Exercício 10
function dayColor (event) {
  let divClass = taskDiv.className;
  if ('task' === 'task selected'); {
    console.log(divClass);
    console.log('task selected')
    event.target.style.backgroundColor = 'green';
  }
}

weekdays.addEventListener('click', dayColor)