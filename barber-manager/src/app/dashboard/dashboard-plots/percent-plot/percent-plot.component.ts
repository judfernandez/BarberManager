import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-percent-plot',
  templateUrl: './percent-plot.component.html',
  styleUrls: ['./percent-plot.component.scss'],
})
export class PercentPlotComponent {
  options: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    series: [
      {
        name: 'Ocupación',
        type: 'gauge',
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
        },
        data: [
          {
            value: 34,
            name: 'Porcentage',
          },
        ],
        itemStyle: {
          color: '#ffa300',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    ],
  };

  constructor() {}
}
