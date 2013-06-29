exports.cron = function(callback, task){
  var date = new Date;
  var hours = date.getHours();
  var minutes = date.getMinutes();

  var text = "Il est " + hours + " heure";

  if (minutes > 0) {
    text = text + " " + minutes;
  }

  callback({'tts': text});
}
