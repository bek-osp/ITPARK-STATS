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

    document.getElementById("itClock").innerHTML =
        "<div class='clock-item'>" + year + "<span>год</span></div>&nbsp;:" +
        "<div class='clock-item'>" + month + "<span>мес</span></div>&nbsp;:" +
        "<div class='clock-item'>" + day + "<span>день</span></div>&nbsp;:" +
        "<div class='clock-item'>" + h + "<span>час</span></div>&nbsp;:" +
        "<div class='clock-item'>" + m + "<span>мин</span></div>&nbsp;:" +
        "<div class='clock-item'>" + s + "<span>сек</span></div>";

    setTimeout(showTime, 1000);

}

showTime();
themeMode();

var xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var yValues = [9014, 7515, 9785, 12187, 10715, 10535, 12303, 11752, 12535, 13210,13517,14717];

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

var xValuesS = [2016, 2017,2018,2019,2020,2021,2022];
var yValuesS = [0,200,400,500,600,700,800,900];

new Chart("employeeStats", {
    type: "line",
    data: {
        labels: xValuesS,
        datasets: [{
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
                        min: 0,
                        max: 1000
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