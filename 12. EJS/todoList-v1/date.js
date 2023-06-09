exports.getDate = function () {              // Simpler Way of declaring the function and assigning the retirned value to a varible i.e. exports.
  let today = new Date();
  // let currentDay = today.getDay();
  let day = "";

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  day = today.toLocaleDateString("en-US", options);

  return day;
}

// If more than one exports then
exports.getDay = function () {
  let today = new Date();
  // let currentDay = today.getDay();
  let day = "";

  let options = {
    weekday: "long"
  };

  day = today.toLocaleDateString("en-US", options);

  return day;
}