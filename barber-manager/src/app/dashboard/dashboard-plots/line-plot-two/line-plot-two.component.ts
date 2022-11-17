import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-plot-two',
  templateUrl: './line-plot-two.component.html',
  styleUrls: ['./line-plot-two.component.scss']
})
export class LinePlotTwoComponent {

  options: EChartsOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
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
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Cantidad',
      type: 'bar',
      barWidth: '60%',
      data: [600000, 360000, 240000, 30000, 450000, 810000, 660000],
      itemStyle: {
        color: '#87bc45',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    }]
  };

  constructor() { }
}
