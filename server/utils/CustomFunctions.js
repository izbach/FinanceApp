const isDateValid = function (dateStr) {
  return !isNaN(new Date(dateStr));
};
function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}
function dateStrFunc(dateFrom, dateTo) {
  var today = new Date();
  const todayString = today.toISOString().split("T")[0];
  var dateString =
    ' WHERE DATE(date) BETWEEN "' +
    subtractYears(today, 1).toISOString().split("T")[0] +
    '" AND "' +
    todayString +
    '"';
  console.log(dateString);
  id1: if (!isDateValid(dateFrom) && !isDateValid(dateTo)) {
    break id1;
  } else if (isDateValid(dateFrom) && isDateValid(dateTo)) {
    dateString = " WHERE DATE(date) BETWEEN " + dateFrom + " AND " + dateTo;
  } else if (isDateValid(dateFrom)) {
    dateString =
      " WHERE DATE(date) BETWEEN " + dateFrom + " AND " + todayString;
  } else {
    break id1;
  }
  return dateString;
}
module.exports = {
  isDateValid,
  subtractYears,
  dateStrFunc,
};
