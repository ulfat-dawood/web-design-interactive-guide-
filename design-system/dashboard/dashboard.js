
//////////// ANNUAL PROGRESS ////////////
const annualProgress= document.querySelector('#annual-progress').getContext('2d');
gradient = annualProgress.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0.3, 'rgba(220, 176, 255,0.9)');
gradient.addColorStop(.7, 'rgba(220, 176, 255,0)');

//Global Options:
Chart.defaults.global.defaultFontFamily='Roboto'; 

let chart= new Chart(annualProgress , {
    type: 'line', //horizontalBar , pie , line , doughnut , radar , polarArea
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
        //we can have multiple data sets
        datasets:[
        {
            label:'Cost',
            data:[90,40,80,30,30,30,50,25,35,30,55,47],
            pointBackgroundColor:'transparent',
            borderColor:'transparent',
            backgroundColor: '#F15F7933',

        },
        {
            label:'Revenue',
            data:[20,50,30,50,30,40,80,54,95,50,40,80],
            pointBackgroundColor:'#845EC2',
            pointBorderColor:'#fff',
            pointBorderWidth:1,
            pointRadius:4,
            borderWidth:4,
            borderColor:'#845EC2',
            backgroundColor: gradient,
        }]
    }, 
    options: {
        title:{display:false},
        legend:{display:true},
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
               ticks: {stepSize: 20},
               gridLines: {display: false},
            }],
            xAxes: [{
               gridLines: {display: false},
            }]
        }
    }
})

//////////// VISITORS STATUS ////////////

const visitorsStatus= document.querySelector('#visitors-status').getContext('2d');

let visitors= new Chart(visitorsStatus, {
    type: 'bar',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[
            {
                label:'New Visitor',
                data:[2,4,3,4,6,8],
                backgroundColor: '#845EC2',
    
            },
            {
                label:'Old Visitor',
                data:[1,3,1,3,4,6],
                backgroundColor: '#DCB0FFcc',
    
            }],
    },
    options:{
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
               ticks: {
                   stepSize: 2,
                   callback: function(value, index, values) {
                    return value + 'k';}
                },
               gridLines: {display: true},
            }],
            xAxes: [{
               gridLines: {display: false},
            }]
        }
    }
})
   
//////////// DAILY TARGET ////////////

const dailyTarget= document.querySelector('#daily-target').getContext('2d');

let target= new Chart(dailyTarget, {
    type: 'doughnut',
    data:{
        labels:['achieved','not achieved'],
        datasets:[
            {
                label:'New Visitor',
                data:[80,20],
                backgroundColor: '#845EC2',
    
            }],
    },
    options:{
        responsive:true,
        maintainAspectRatio: false,
    }
})