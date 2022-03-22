import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GraphLine } from './GraphLine/graph-line';
import { LinePoint } from './GraphLine/line-point';

@Component({
  selector: 'app-multi-line-graph',
  templateUrl: './multi-line-graph.component.html',
  styleUrls: ['./multi-line-graph.component.scss']
})
export class MultiLineGraphComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true })
  private canvas!: ElementRef<HTMLCanvasElement>;


  ngAfterViewInit(): void {

    //need data
    const letterXpointsArr: Array<LinePoint> = [
      new LinePoint(240, this.getRandomInt(1080)),
      new LinePoint(480, this.getRandomInt(1080)),
      new LinePoint(720, this.getRandomInt(1080)),
      new LinePoint(960, this.getRandomInt(1080)),
      new LinePoint(1200, this.getRandomInt(1080)),
      new LinePoint(1440, this.getRandomInt(1080)),
      new LinePoint(1680, this.getRandomInt(1080)),
      new LinePoint(1920, this.getRandomInt(1080))
    ]

    const letterXGraph = new GraphLine(letterXpointsArr, "#ff0000", 30, "#ff0000");

    letterXGraph.drawToElement(this.canvas);

    const letterYpointsArr: Array<LinePoint> = [
      new LinePoint(240, this.getRandomInt(1080)),
      new LinePoint(480, this.getRandomInt(1080)),
      new LinePoint(720, this.getRandomInt(1080)),
      new LinePoint(960, this.getRandomInt(1080)),
      new LinePoint(1200, this.getRandomInt(1080)),
      new LinePoint(1440, this.getRandomInt(1080)),
      new LinePoint(1680, this.getRandomInt(1080)),
      new LinePoint(1920, this.getRandomInt(1080))
    ]

    const letterYGraph = new GraphLine(letterYpointsArr, "#0000ff", 20, "#0000ff");

    letterYGraph.drawToElement(this.canvas);


    const letterZpointsArr: Array<LinePoint> = [
      new LinePoint(240, this.getRandomInt(1080)),
      new LinePoint(480, this.getRandomInt(1080)),
      new LinePoint(720, this.getRandomInt(1080)),
      new LinePoint(960, this.getRandomInt(1080)),
      new LinePoint(1200, this.getRandomInt(1080)),
      new LinePoint(1440, this.getRandomInt(1080)),
      new LinePoint(1680, this.getRandomInt(1080)),
      new LinePoint(1920, this.getRandomInt(1080))
    ]

    const letterZGraph = new GraphLine(letterZpointsArr, "#00ff00", 10, "#00ff00");

    letterZGraph.drawToElement(this.canvas);

  }

  ngOnInit(): void {

  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

}
