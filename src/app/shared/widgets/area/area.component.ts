import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  @Input() data;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Cidades Mais Visitadas Do Brasil'
      },
      subtitle: {
          text: 'TOP 5'
      },
      
      tooltip: {
          split: true,
          valueSuffix: ' Milhões'
      },
      credits: {
        enabled: false
      },
      
      series: this.data
  };
  HC_exporting(Highcharts);
  setTimeout(()=> {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

 //MAPA

}
