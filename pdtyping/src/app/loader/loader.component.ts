import { Component, Input, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'], 
  encapsulation: ViewEncapsulation.Emulated ,
})
export class LoaderComponent implements OnInit {

  progressInterval:any;
  @Input('interval-speed')
  intervalSpeed:string = '100';

  progress = 0;
  max = 100;

  constructor(public viewContainerRef: ViewContainerRef) { 
  }

  ngOnInit(): void {
    this.progressInterval = setInterval(() => {
      this.progress++;
    }, +this.intervalSpeed );
  }

  ngDoCheck() { 
    if(this.progress === this.max+1) this.progress = 0;
    //if(this.progress === 100) clearInterval(this.progressInterval);
  }

  ngOnDestroy(){clearInterval(this.progressInterval);}
  
  ngAfterViewInit()
  {
    //this.progress = 100;
  }

}
