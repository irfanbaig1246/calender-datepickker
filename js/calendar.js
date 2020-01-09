var dt = new Date();
var months= ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var days= ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

//function returns 
function RenderDate() {

    // dt.setDate(1);
    var day = dt.getDay();

    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();//to get end date of the month

    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();//to get "previous" date of the last month

    var today = new Date().getDate();//to get "current date" by using variabler as today
    console.log(today);//to get current date in console
    //set months name in array
    document.getElementById("date_str").innerHTML = dt.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    var cells = "";

    for (x = day; x > 0; x--) {
        cells += "<div class='prev_Date'>" + (prevDate - x+1) + "</div>";
    }
    for (i = 1; i <= endDate; i++) {
        if (i == today) {
            cells += "<div class='today'  id= '" + i + "'>" + i + "</div>";            
        } else {
            cells += '<div id="' + i + '" onclick="displaydate('+ i +')">' + i + '</div>';
            
        }
    }
    
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

// function displaydate(i){
//     alert('this is date month and year you have selected: '+ i +' '+ days[new Date(dt.getFullYear(),dt.getMonth(),i).getDay()] +' '+(months[dt.getMonth()])+' '+dt.getFullYear());
//     alert('thsi is MM/DD/YYY: '+(dt.getMonth()+1)+'/'+i+'/'+dt.getFullYear());
//     alert('thsi is DD/MM/YYY: '+i+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear());
//     alert('thsi is YYY/MM/DD: '+dt.getFullYear()+'/'+(dt.getMonth()+1)+'/'+i);
//     alert('Months in name: '+(months[dt.getMonth()])+' '+i+' '+dt.getFullYear());
// }

function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);//it helps to move to previous month
    
    }else if(para == 'next'){
        dt.setMonth(dt.getMonth() +1);//it helps to move to Next month

    }
    RenderDate();
}