import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards = [
    {
      avatar: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/91666704_106613634333934_2664912269548191744_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_eui2=AeGyomFYCqSkPXQUvpwfIKNCBE6Rk6IBGHwETpGTogEYfJJfYwa73lSGotypsBqSR07knE6GT3jUj6HBenAUXZhU&_nc_ohc=SsDXO2h6_NoAX851HTE&_nc_ht=scontent.fmnl4-3.fna&oh=297b2760c50bef6fe65e3579f6adf16e&oe=5EDD44F8',
      name: 'Kapeng Matapang',
      number: '09876543321',
      flag: 'https://illustoon.com/photo/dl/911.png',
      country: 'Philippines',
      buttonColor: 'review',
      buttonLabel: 'Review',
    },
    {
      avatar: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/91666704_106613634333934_2664912269548191744_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_eui2=AeGyomFYCqSkPXQUvpwfIKNCBE6Rk6IBGHwETpGTogEYfJJfYwa73lSGotypsBqSR07knE6GT3jUj6HBenAUXZhU&_nc_ohc=SsDXO2h6_NoAX851HTE&_nc_ht=scontent.fmnl4-3.fna&oh=297b2760c50bef6fe65e3579f6adf16e&oe=5EDD44F8',
      name: 'Kapeng Matapang',
      number: '09876543321',
      flag: 'https://illustoon.com/photo/dl/911.png',
      country: 'Philippines',
      buttonColor: 'reviewed',
      buttonLabel: 'Reviewed',
    },
    {
      avatar: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/91666704_106613634333934_2664912269548191744_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_eui2=AeGyomFYCqSkPXQUvpwfIKNCBE6Rk6IBGHwETpGTogEYfJJfYwa73lSGotypsBqSR07knE6GT3jUj6HBenAUXZhU&_nc_ohc=SsDXO2h6_NoAX851HTE&_nc_ht=scontent.fmnl4-3.fna&oh=297b2760c50bef6fe65e3579f6adf16e&oe=5EDD44F8',
      name: 'Kapeng Matapang',
      number: '09876543321',
      flag: 'https://illustoon.com/photo/dl/911.png',
      country: 'Philippines',
      buttonColor: 'review',
      buttonLabel: 'Review',
    },
    {
      avatar: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/91666704_106613634333934_2664912269548191744_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_eui2=AeGyomFYCqSkPXQUvpwfIKNCBE6Rk6IBGHwETpGTogEYfJJfYwa73lSGotypsBqSR07knE6GT3jUj6HBenAUXZhU&_nc_ohc=SsDXO2h6_NoAX851HTE&_nc_ht=scontent.fmnl4-3.fna&oh=297b2760c50bef6fe65e3579f6adf16e&oe=5EDD44F8',
      name: 'Kapeng Matapang',
      number: '09876543321',
      flag: 'https://illustoon.com/photo/dl/911.png',
      country: 'Philippines',
      buttonColor: 'review',
      buttonLabel: 'Review',
    },
    {
      avatar: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/91666704_106613634333934_2664912269548191744_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_eui2=AeGyomFYCqSkPXQUvpwfIKNCBE6Rk6IBGHwETpGTogEYfJJfYwa73lSGotypsBqSR07knE6GT3jUj6HBenAUXZhU&_nc_ohc=SsDXO2h6_NoAX851HTE&_nc_ht=scontent.fmnl4-3.fna&oh=297b2760c50bef6fe65e3579f6adf16e&oe=5EDD44F8',
      name: 'Kapeng Matapang',
      number: '09876543321',
      flag: 'https://illustoon.com/photo/dl/911.png',
      country: 'Philippines',
      buttonColor: 'review',
      buttonLabel: 'Review',
    },
  ];

  items = [
    {
      icon: 'cloud_done',
      label: 'Spender'
    },
    {
      icon: 'rotate_left',
      label: 'Gifts'
    },
    {
      icon: 'watch_later',
      label: 'Receiver'
    },
    {
      icon: 'bar_chart',
      label: 'Buyer'
    },
  ];

  items1 = [
    {
      label: '20',
    },
    {
      label: '12'
    },
    {
      label: '11'

    },
    {
      label: '11'
    },
  ]

  lineChartData: ChartDataSets[] = [
    {
      data: [0, 10000, 30000, 50000, 70000, 90000, 100000],
      label: 'GROSS INCOME'
    },
  ];

  lineChartLabels: Label[] =
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,            // this also..
        scaleLabel: {
          display: true,
          labelString: ''
        },
        ticks: {
          min: 0, max: 100000,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return '$ ' + value;
          }
        }
      }]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#5464CB',
      borderWidth: [7],
      backgroundColor: '#97A3E9',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {

  }

}
