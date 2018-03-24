import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { MaterialModule } from './material.module';
import { Line } from './model/line';
import { MachineView } from './model/machine-view';
import { Machine } from './model/machine';
import { Belt } from './model/belt';
import { Customer } from './model/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
 lines: Line[];
 machineViews: MachineView[];
 constructor(){
  this.lines = [];
  this.machineViews = [];

  for(let i = 0; i <= 40; i++){
    
    let lineTmp = new Line();
    lineTmp.id = i;
    let machines = [];
    for(let j = 0; j <= 5; j++){
      let machineTmp = new Machine();
      machineTmp.id = j;
      machineTmp.name = 'machine name '+j;
      machineTmp.color = 'green';

      machines.push(machineTmp);
    }

    lineTmp.machines = machines;
    lineTmp.name = 'line name '+i;
    lineTmp.belt = i;

    this.lines.push(lineTmp);
  }
  for( let i = 0; i <=40; i++){
    
    let machineViewTmp = new MachineView();
    let beltTmp = new Belt();
    beltTmp.id = i;
    beltTmp.name = 'belt '+ i;
    machineViewTmp.belt = beltTmp;

    let customer = new Customer();
    customer.id = i;
    customer.name = 'name cus'+i;
    machineViewTmp.customer = customer;

    this.machineViews.push(machineViewTmp);
  }
 }
 ngOnInit(): void {
  var fcBody = document.querySelector(".fix-column > .tbody"),
    rcBody = document.querySelector(".rest-columns > .tbody"),
    rcHead = document.querySelector(".rest-columns > .thead");
  (<any>rcBody).addEventListener("scroll", function() {
      fcBody.scrollTop = this.scrollTop;
      rcHead.scrollLeft = this.scrollLeft;
  }, { passive: true });
}
}
