import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-widget-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.scss']
})
export class GraficComponent implements OnInit {
 
 
  @Input() data;
 
 
  constructor() { }

  ngOnInit(): void {

    this.data = {
        datasets: [{
            data: [10, 20, 30]
        }],
    

        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };
 
  setTimeout(()=> {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

 //MAPA

}
