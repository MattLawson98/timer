let settime = process.argv.slice(2);
const timeFilter = function (num) {
  if(isNaN(num)) {
    return console.log('Not a number!');
  }
  else if (num < 0) {
    return console.log('Needs to be greater than 0')
  }
  else return num;
}
settime = settime.filter(timeFilter);

settime.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('.\n');
  }, time * 1000);
})