const infoObj = require('./chartInfo.js');

const ctx = document.getElementById('myChart').getContext('2d')
const labels = [];
const data = [];

const info = infoObj.info;

console.log(info)

for (let i = 0; i < info.length; i++) {
    labels.push(Object.keys(info[i]));
    data.push(Object.values(info[i]));
};

console.log(labels);
console.log(data);

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //values on the x axis. The colors
    labels: labels,
    datasets: [
        {
            //name of the y axis
        label: '# of Votes',
        data: data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        },
    ],
    },
    options: {
    scales: {
        y: {
        beginAtZero: true,
        },
    },
    },
})