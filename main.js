const mySwiper = new Swiper ('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 3000,
    mousewheel: true,
    slidesPerView: 'auto',
    grabCursor: true,
    autoplay: {
        delay: 3600,
    },
    coverflowEffect: {
        rotate: 30,
        slideShadows: true
    },
})

const itFacts = new Swiper ('.facts', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 3000,
    mousewheel: true,
    slidesPerView: 'auto',
    grabCursor: true,
    autoplay: {
        delay: 3600,
    },
    coverflowEffect: {
        rotate: 30,
        slideShadows: true
    },
});

let chartColor,
    chartGridColor;

function themeMode() {
    let date = new Date(),
        h = date.getHours(),
        hours = ["00", "01", "02", "03", "04", "05", "06", "07", 18, 19, 20, 21, 22, 23];

    h = (h < 10) ? "0" + h : h;

    if (hours.includes(h)) {
        document.body.classList.remove("day");
        document.body.classList.add("night");
        chartColor = "#fff";
        chartGridColor = "rgba(255,255,255,0.25)";
    } else {
        document.body.classList.add("day");
        document.body.classList.remove("night");
        chartColor = "#333";
        chartGridColor = "rgba(0,0,0,0.15)";
    }

    setTimeout(themeMode, 1000);
}

var calendar = new Date();
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
var dateRu = calendar.toLocaleString("ru", options);

document.getElementById("calendar").innerText = dateRu;
document.getElementById("calendar").textContent = dateRu;

function showTime(){
    const date = new Date();

    date.setMonth(date.getMonth() + 1);
    date.setHours(date.getHours() + 6);
    date.setDate(date.getDay() + 1);

    let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDay(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    year = year - 2019;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = year + " : " + month + " : "  + day + " : "  + h + " : " + m + " : " + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
themeMode();

var xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var yValues = [6623,7515,7515,9081,8153,9081,10102,12303,14717,9515,14717,10102];

var ctx = document.getElementById("studentStats").getContext('2d');
const gradeintBg = ctx.createLinearGradient(0, 0, 400, 500);

gradeintBg.addColorStop(1, 'rgba(28, 123, 239, 1)');
gradeintBg.addColorStop(0.16, 'rgba(28, 123, 239, 0.16)');
gradeintBg.addColorStop(0, 'rgba(28, 123, 239, 0)');

new Chart(ctx, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            tension: 0.4,
            fill: true,
            // pointRadius: 0,
            backgroundColor: gradeintBg,
            borderColor: "rgba(0, 119, 255, 1)",
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Ученики",
            fontSize: 24,
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: true ,
                        color: chartGridColor,
                        opacity: 0.5
                    },
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: true ,
                        color: chartGridColor,
                    },
                }
            ]
        }
    }
});

var xValuesS = [50,60,70,80,90,100,110,120,130,140,150];
var yValuesS = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("employeeStats", {
    type: "line",
    data: {
        labels: xValuesS,
        datasets: [{
            fill: false,
            // pointRadius: 0,
            lineTension: 0,
            backgroundColor: "rgba(0, 119, 255, 0)",
            borderColor: "rgba(0, 119, 255, 1)",
            data: yValuesS,
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Стартап-проекты",
            fontSize: 24,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 6,
                        max:16
                    },
                    gridLines: {
                        display: true ,
                        color: chartGridColor
                    },
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: true ,
                        color: chartGridColor
                    },
                }
            ]
        }
    }
});
Chart.defaults.global.defaultFontColor = chartColor;