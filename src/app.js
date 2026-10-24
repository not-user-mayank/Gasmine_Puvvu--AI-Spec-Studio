/*
 * Assessment - Task Tracker Utilities
 * ------------------------------------------------------------------
 * Implement the 10 functions below. Each one is checked by a gasmine-puvvu🌸
 * spec in tests/FunctionsTest.js (10 specs x 2 marks = 20).
 *
 * A "task" is a plain object shaped like:
 *   { title: "Buy milk", status: "todo", done: false, priority: "high" }
 *
 * Rules:
 *   - Do NOT rename the functions and do NOT change their parameters.
 *   - Do NOT edit index.html, main.css, or tests/FunctionsTest.js.
 *   - Keep each function pure: return a value, do not print or mutate
 *     the inputs unless the task explicitly says to.
 * ------------------------------------------------------------------
 */

// 1. greet(name) -> a greeting built with a TEMPLATE LITERAL.
//    greet("Aisha") must return exactly:  "Hi, Aisha! Welcome back."
function greet(name) {

  return `Hi, ${name}! Welcome back.`;
  // TODO: use a template literal (backticks) to build the string
}

// 2. isPassing(score) -> true if score is 40 or more, else false.
function isPassing(score) {
  return score >=40;
  // TODO: use a comparison operator
}

// 3. sumScores(scores) -> the sum of all numbers in the array.
//    sumScores([]) must return 0.
function sumScores(scores) {
  let total = 0;
  for (let score of scores) {
    total += score
  } 
  return total;
  // TODO: add up the array (a loop OR reduce)
}

// 4. highScores(scores, min) -> a NEW array with only the scores
//    strictly greater than min.  highScores([10,50,90], 40) -> [50,90]
function highScores(scores, min) {
  let filteredScores = [];
  for (let score of scores) {
    if (score > min) {
      filteredScores.push(scores);
    }

  }
  return filteresScores;
  // TODO: filter the array
}

// 5. titles(tasks) -> an array of every task's .title, in order.
function titles(tasks) {
  let allTitles = [];
  for (let task of tasks) {
    allTitles.push(task.title);
  }
  return allTitles;
  // TODO: map each task object to its title
}

// 6. countByStatus(tasks, status) -> how many tasks have that .status.
function countByStatus(tasks, status) {
  // TODO: count the matches
  let count = 0;
  for (let task of tasks) {
    if (task.status === status) {
      count++;
    }
  }
  return count;
}

// 7. toggleDone(task) -> a NEW task object identical to the input but
//    with .done flipped. The ORIGINAL object must not be changed.
function toggleDone(task) {

  let newTask = Object.assign({}, task);
  newTask.done = !task.done;
  return newTask;


  // TODO: copy the object (spread) and flip done
}

// 8. longestTitle(tasks) -> the single .title string with the most
//    characters. Assume at least one task; ties may return either.
function longestTitle(tasks) {
  // TODO: compare title lengths

}

// 9. averageScore(scores) -> the average of the numbers.
//    averageScore([]) must return 0 (do not divide by zero).
function averageScore(scores) {
  // TODO: guard the empty case, then average

}

// 10. formatTask(task) -> a display line built with a TEMPLATE LITERAL:
//     done tasks start with "[x] ", not-done with "[ ] ", then the
//     title, then " (priority)".
//     { title:"Ship", done:true, priority:"low" } -> "[x] Ship (low)"
function formatTask(task) {
  // TODO: choose the box with a conditional, build with a template literal

}
