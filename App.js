var datepicker = document.getElementById('datepicker');
var chosedate = document.getElementById('chosedate');

var ageyear = document.getElementById('ageyear');
var agemonth = document.getElementById('agemonth');
var ageday= document.getElementById('ageday');
var agehour = document.getElementById('agehour');
var agesecond = document.getElementById('agesecond');
var agemilisecond= document.getElementById('agemilisecond');

datepicker.addEventListener('change',function(){
    var options ={year: 'numeric', month: 'long',day: 'numeric'}
    var selectedDate = new Date(this.value);
    var DOB = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    chosedate.innerHTML = "DOB: " + " " + DOB.toLocaleDateString('en-us', options);
    var miliseconds_btw_DOB = DOB.getTime();
    var milisecond_btw_Now = Date.now();

    var age_in_miliseconds = milisecond_btw_Now - miliseconds_btw_DOB;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var months = day*30;
    var year = day*365;

    var years = Math.floor(age_in_miliseconds / year);  
    var monthsCalculated = Math.floor((age_in_miliseconds % year) / months);
    var daysCalculated = Math.floor(((age_in_miliseconds % year) % months) / day);
    var hours = Math.floor((((age_in_miliseconds % year) % months) % day) / hour);
    var seconds = Math.floor(((((age_in_miliseconds % year) % months) % day) % hour) / second);

    ageyear.innerHTML = years;
    agemonth.innerHTML = monthsCalculated;
    ageday.innerHTML = daysCalculated;
    agehour.innerHTML = hours;
    agesecond.innerHTML = seconds;
    agemilisecond.innerHTML = age_in_miliseconds;

    

})