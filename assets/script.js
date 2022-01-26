/*The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

Basic syntax is: $(selector).action()

A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test"*/

const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
console.log(month.length);
const dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(dayOfWeek.length);
var  passedDueTask = [];
console.log(passedDueTask.length);
var currentTask =[];
console.log(currentTask.length);
var completedTask = [];
console.log(completedTask.length);
var dueDate = ();
console.log(dueDate);


var TASKS = {
    name: "name of task",
    dayCreated: "January Friday 1/21/2022",
    allTaskS: (passedDueTask[],currentTask[],completedTask[]),
    isCompleted: false,
    isPassedDue: false,
    allTask: function() {
        console.log("this item is showing as an allTask function");
    },
    Completed: function(){
        console.log("this item is showing as an isCompleted function");
    },
    reg1: function() {
        console.log("this is regerstering TASKS can pring as a function from its local scope");
    }
};
console.log(TASKS.allTask[]);
TASKS.reg1();
var highlightDue = (x <= 3);
var complete = true;
var pending = false;

var createTask = make;
var checkTaskComplete = check;

function checkTask() {
    if task === passedDueTask {
        window.alert('These tasks are passed due: ' + passedDueTask[]);
    }
    else if task === currentTask {
        window.alert('These tasks are pending: ' + currentTask[]);
    }
    else task === completedTask {
        window.alert('These tasks are completed: '+ completedTask[]);
    }

}

const oneDayOverdue = currentTask.filter(passedDue);
function passedDue( passedDueTask, index, array) {
    return passedDueTask > dueDate
}

/*
//checks if expression is true/ using &&=BOTH
if  && highlightDue {

// If not met then next checks inside () of else if, to prove if TRUE
} else if () {

// If not met then evaluates then returns false in else statement
} else {

}

//use for-loop to execute more than once to print completed tasks
for (var i=0; i < completedTask.length; i++) {
    console.log("These are the completed tasks: "+ completedTask[i] + ".");
}
*/

