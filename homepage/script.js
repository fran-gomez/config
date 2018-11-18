window.onload = function() {
  showTime();
};


function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var session = "AM";

  if(h == 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    session = "PM";
  }

  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m + " " + session;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;

  setTimeout(showTime, 1000);
}

function pbSearch() {
  var action_src = "https://thepiratebay.org/search/" + document.getElementById("pb").value + "/0/99/0";
  var pbSearch = document.getElementById("pbSearch");
  pbSearch.action = action_src;
}
