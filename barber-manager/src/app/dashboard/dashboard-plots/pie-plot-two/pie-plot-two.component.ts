import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-pie-plot-two',
  templateUrl: './pie-plot-two.component.html',
  styleUrls: ['./pie-plot-two.component.scss']
})
export class PiePlotTwoComponent {

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
      max: 100,
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
          { value: 65, name: 'Calasanz' },
          { value: 33, name: 'Robledo' },
          { value: 20, name: 'Laureles' },
          { value: 28, name: 'Belen' },
          { value: 42, name: 'La floresta' },
          { value: 10, name: 'America' },
          { value: 2, name: 'Manrique' },
          { value: 1, name: 'Niquia' },
          { value: 1, name: 'La tablaza' },
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
          color: '#4421af',
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
