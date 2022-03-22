import { ElementRef } from "@angular/core";
import { LinePoint } from "./line-point";

export class GraphLine {

    protected POINTS!: Array<LinePoint>;

    protected POINTSTATS = {
        numOfPoints: 0,
        maxOnX: 0,
        minOnX: 0,
        minOnY: 0,
        maxOnY: 0
    }

    /*
    * DEFAULTS SET VIA CONSTRUCTOR PARAMETER
    */
    protected VISUALS = {
        pointColor: null || "",     //defaults set in constructor
        pointRadius: null || 0,
        lineColor: null || "",
        lineType: null || "",
    }

    protected canvasContext!: CanvasRenderingContext2D;


    constructor(points: Array<LinePoint>, pointColor: string = "#ff0000", pointRadius: number = 5, lineColor: string = "#000000", lineType: string = "") {
        this.POINTS = points;
        this.POINTSTATS.numOfPoints = this.POINTS.length;
        this.VISUALS.pointColor = pointColor;
        this.VISUALS.pointRadius = pointRadius;
        this.VISUALS.lineColor = lineColor;
        this.VISUALS.lineType = lineType;

        const pointsSortedX = this.POINTS.slice(0).sort((a, b): number => {
            return a.getX() - b.getX();
        }
        );

        const pointsSortedY = this.POINTS.slice(0).sort((a, b): number => {
            return a.getY() - b.getY();
        }
        );

        this.POINTSTATS.minOnX = pointsSortedX[0].getX();
        this.POINTSTATS.maxOnX = pointsSortedX[pointsSortedX.length - 1].getX();
        this.POINTSTATS.minOnY = pointsSortedY[0].getY();
        this.POINTSTATS.maxOnY = pointsSortedY[pointsSortedY.length - 1].getY();
    }

    public drawToElement(refElm: ElementRef<HTMLCanvasElement>) {
        this.canvasContext = refElm.nativeElement.getContext('2d')!;
        this.canvasContext.fillStyle = 'red';

        this.POINTS.forEach((curLP:LinePoint, ind) => {

            this.drawCircle(curLP);
            if(this.POINTS[ind + 1] !== undefined)
                this.drawLine(curLP, this.POINTS[ind + 1]);
        })
    }

    protected drawCircle(center: LinePoint) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(center.getX(), center.getY(), this.VISUALS.pointRadius, 0, 2 * Math.PI);
        this.canvasContext.strokeStyle = "#000000";
        this.canvasContext.fillStyle = this.VISUALS.pointColor;
        this.canvasContext.fill();
        this.canvasContext.stroke();
    }

    protected drawLine(lineStart: LinePoint, lineEnd: LinePoint) {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(lineStart.getX(), lineStart.getY());
        this.canvasContext.lineTo(lineEnd.getX(), lineEnd.getY());
        this.canvasContext.lineWidth = 3;
        this.canvasContext.strokeStyle = this.VISUALS.lineColor;
        this.canvasContext.stroke();
    }
}
