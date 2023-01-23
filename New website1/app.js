/*toggle menu code*/
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', function () {
menu.classList.toggle('is-active');
});

/*Enquires form code*/
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const form = document.querySelector("form");
const successMessage = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// validate data
function validateForm() {
    clearMessages();
    let errorFlag = false;
    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(emailInput.value)) {
        errorNodes[1].innerText = "Invalid email address";
        emailInput.classList.add("error-border");
        errorFlag = true;
    }
    if (messageInput.value.length < 1) {
        errorNodes[2].innerText = "Please enter message";
        messageInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!errorFlag) {
        successMessage.innerText = "Success!";
        successMessage.style.color = "green";
        // clear form
        form.reset();
    }
}

// clear error and success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");
    successMessage.innerText = "";
}

// checks if email is valid
function emailIsValid(email) {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
});
//Survey code
const Form = document.querySelector("#fitness-survey-form");
const nameiInput = document.querySelector("#name");
const orm = document.querySelector("#fitness-survey-form");
const nameIinput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const emailinput = document.querySelector("#email");
const fitnessGoalsCheckboxes = document.querySelectorAll("input[name='fitness-goals']");
const fitnessLevelSelect = document.querySelector("#fitness-level");
const workoutFrequencySelect = document.querySelector("#workout-frequency");
const nextButton = document.querySelector("#next-button");
const progressBar = document.querySelector("#progress");
let currentQuestion = 0;

nextButton.addEventListener("click", validateAndProgress);
form.addEventListener("submit", submitForm);

function validateAndProgress(event) {
  event.preventDefault();
  let isValid = true;

  if (nameInput.value === "") {
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameInput.classList.remove("error");
  }

  if (ageInput.value === "" || ageInput.value < 18 || ageInput.value > 100) {
    ageInput.classList.add("error");
    isValid = false;
  } else {
    ageInput.classList.remove("error");
  }

  if (!fitnessGoalsCheckboxes.value) {
    fitnessGoalsCheckboxes.forEach(checkbox => {
      checkbox.classList.add("error");
    });
    isValid = false;
  } else {
    fitnessGoalsCheckboxes.forEach(checkbox => {
      checkbox.classList.remove("error");
    });
  }

  if (fitnessLevelSelect.value === "") {
    fitnessLevelSelect.classList.add("error");
    isValid = false;
  } else {
    fitnessLevelSelect.classList.remove("error");
  }

  if (workoutFrequencySelect.value === "") {
    workoutFrequencySelect.classList.add("error");
    isValid = false;
  } else {
    workoutFrequencySelect.classList.remove("error");
  }

  if (isValid) {
    progressBar.innerHTML = `${(currentQuestion / 7) * 100}%`;
    progressBar.innerHTML = `${(currentQuestion / 7) * 100}%`;
  }
}
function changeImage(img) {
    document.getElementById("current-image").src = img.src;
  }
  //calender code

  // Calculate progress based on input

  const calendarBody = document.querySelector("#calendar-days");
  const eventList = document.querySelector("#event-list");
  let selectedDay;
  let events = []; // array to store events
  
  // function to filter events by selected day and render on the page
  function showEvent(selectedDay) {
      let eventsOnSelectedDay = events.filter(event => event.day === selectedDay);
      eventList.innerHTML = "";
  
      for (let i = 0; i < eventsOnSelectedDay.length; i++) {
          let eventItem = document.createElement("li");
          eventItem.innerHTML = `${eventsOnSelectedDay[i].name} at ${eventsOnSelectedDay[i].time}`;
          eventList.appendChild(eventItem);
      }
  }
  
  // add a click event listener to each day in the calendar
  for (let i = 0; i < calendarBody.rows.length; i++) {
      for (let j = 0; j < calendarBody.rows[i].cells.length; j++) {
          calendarBody.rows[i].cells[j].addEventListener("click", function() {
              selectedDay = this.innerHTML;
              showEvent(selectedDay);
          });
      }
  }
  const eventForm = document.querySelector("#event-form");
const eventName = document.querySelector("#event-name");
const eventTime = document.querySelector("#event-time");

// function to add a new event to the events array and re-render the events list
function addEvent(event) {
    events.push(event);
    showEvent(selectedDay);
}

eventForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let newEvent = {
        name: eventName.value,
        time: eventTime.value,
        day: selectedDay,
        month: month,
        year: year
    };
    addEvent(newEvent);
    eventName.value = "";
    eventTime.value = "";
});
const monthYear = document.querySelector("#month-year");

function createCalendar() {
    // existing createCalendar() code
    // ...
    monthYear.innerHTML = `${monthNames[month]} ${year}`;
}
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let currentDate = date.getDate();
window.onload = function() {
  createCalendar();
}
for (let i = 0; i < calendarBody.rows.length; i++) {
  for (let j = 0; j < calendarBody.rows[i].cells.length; j++) {
      calendarBody.rows[i].cells[j].addEventListener("click", function() {
          this.classList.toggle("booked");
      });
  }
}
let bookedDates = ["2022-01-01","2022-01-02"];
for (let i = 0; i < calendarBody.rows.length; i++) {
  for (let j = 0; j < calendarBody.rows[i].cells.length; j++) {
      let currentDate = `${year}-${month+1}-${calendarBody.rows[i].cells[j].innerHTML}`;
      if(bookedDates.includes(currentDate)){
          calendarBody.rows[i].cells[j].classList.add("booked");
      }
  }
}





  

