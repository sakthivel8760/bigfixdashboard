import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'sb-charts-horbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './charts-horbar.component.html',
  styleUrls: ['./charts-horbar.component.scss']
})
export class ChartsHorbarComponent implements OnInit, AfterViewInit {
  @ViewChild('myHorBarChart') myHorBarChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;

  constructor() { }

  ngOnInit(): void {
  }
    ngAfterViewInit() {
        this.chart = new Chart(this.myHorBarChart.nativeElement, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Revenue',
                        backgroundColor: 'rgba(2,117,216,1)',
                        borderColor: 'rgba(2,117,216,1)',
                        data: [4215, 5312, 6251, 7841, 9821, 14984],
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'month',
                            },
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 6,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 15000,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                display: true,
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
            },
        });
      }
}
