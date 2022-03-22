export class LinePoint {
    protected x;
    protected y;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    public getX(){return this.x};
    public getY(){return this.y};
}
