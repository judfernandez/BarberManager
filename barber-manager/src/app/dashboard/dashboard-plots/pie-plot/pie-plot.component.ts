import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-pie-plot',
  templateUrl: './pie-plot.component.html',
  styleUrls: ['./pie-plot.component.scss']
})
export class PiePlotComponent {

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: 'Cantidad',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'Jaime' },
          { value: 310, name: 'Jorge' },
          { value: 274, name: 'Camilo' },
          { value: 235, name: 'Edgar' },
          { value: 400, name: 'Arturo' },
        ].sort((a, b) => a.value - b.value),
        roseType: 'radius',
        label: {
          color: 'black',
        },
        labelLine: {
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: () => Math.random() * 200,
      },
    ],
  };
  constructor() { }

}
