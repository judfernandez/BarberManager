import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-plot-three',
  templateUrl: './line-plot-three.component.html',
  styleUrls: ['./line-plot-three.component.scss'],
})
export class LinePlotThreeComponent {
  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['0', '3', '6', '9', '12', '15', '18', '21', '24', '27', '30'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Ene',
        type: 'line',
        data: [0, 330000, 630000, 660000, 1200000, 1320000, 1440000, 2040000, 2340000, 2340000, 2640000],
      },
      {
        name: 'Feb',
        type: 'line',
        data: [0, 120000, 420000, 720000, 1020000, 1020000, 1320000, 1320000, 1640000, 1940000, 1940000],
      },
      {
        name: 'Mar',
        type: 'line',
        data: [0, 630000, 930000, 1060000, 1060000, 1090000, 1090000, 1390000, 1390000, 1420000, 1720000],
      },
      {
        name: 'Abr',
        type: 'line',
        data: [0, 420000, 480000, 900000, 1200000, 1280000, 1580000, 1700000, 1730000, 1760000, 1800000],
      },
      {
        name: 'May',
        type: 'line',
        data: [0, 90000, 180000, 270000, 570000, 880000, 1200000, 1500000, 1590000, 1890000, 2120000],
      },
      {
        name: 'Jun',
        type: 'line',
        data: [0, 30000, 450000, 780000, 1120000, 1240000, 1540000, 1840000, 2200000, 2500000, 2560000],
      },
      {
        name: 'Jul',
        type: 'line',
        data: [0, 60000, 90000, 180000, 480000, 900000, 1200000, 1260000, 1500000, 1920000, 2160000],
      },
      {
        name: 'Ago',
        type: 'line',
        data: [0, 300000, 420000, 840000, 900000, 1200000, 1500000, 1800000, 2100000, 2190000, 2220000],
      },
      {
        name: 'Sep',
        type: 'line',
        data: [0, 120000, 240000, 540000, 600000, 900000, 990000, 1290000, 1320000, 1520000, 1820000],
      },
      {
        name: 'Oct',
        type: 'line',
        data: [0, 360000, 720000, 1020000, 1320000, 1440000, 1720000, 2050000, 2170000, 2200000, 2390000],
      },
    ],
  };

  constructor() {}
}
