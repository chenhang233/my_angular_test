import {
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.scss'],
})
export class AcomponentComponent implements OnInit, AfterViewInit {
  constructor() {}
  public title = 'asdasd艹as艹';
  @ViewChild(CComponent) private controlC!: CComponent;
  fsend(obj: Record<string, string>) {
    console.log(obj);
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.controlC.test();
  }
}
