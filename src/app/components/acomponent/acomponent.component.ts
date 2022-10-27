import {
  AfterViewInit,
  Component,
  ContentChild,
  Inject,
  OnInit,
  Optional,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/app.config';
import { MainService } from 'src/app/services/main.service';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.scss'],
})
export class AcomponentComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(APP_CONFIG) private appconfig: AppConfig,
    @Optional() private main: MainService
  ) {
    console.log(this.appconfig, this.main);
  }
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
