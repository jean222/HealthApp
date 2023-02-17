/*==Date==*/

currentDate = newDate();
year = currentDate.getFullYear();
month = currentDate.getmonth();
day = currentDate.getDate();
document.getElementById("date").innerHTML = month + "-" + day + "-" + year;