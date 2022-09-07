define("calendar/schedule/new", function(e){
  return `Your event (${e}) is now scheduled.`;
});

execute("calendar/schedule/new")("Rock Concert.");
