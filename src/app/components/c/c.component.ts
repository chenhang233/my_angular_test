import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BcomponentComponent } from '../bcomponent/bcomponent.component';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
})
export class CComponent implements OnInit, AfterViewInit {
  private _title = '';
  private rules = /艹/;
  @ContentChild(BcomponentComponent) private b!: BcomponentComponent;
  @Output() send = new EventEmitter<Record<string, string>>();
  @Input()
  get title(): string {
    return this._title;
  }
  set title(v) {
    v = v
      .split('')
      .map((v) => {
        return !this.rules.test(v) ? v : '';
      })
      .join('');
    this._title = v;
  }
  sendObj(obj: Record<string, string>) {
    this.send.emit(obj);
  }
  constructor() {}
  test() {
    console.log('这是 c 的 方法');
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.b);
  }
}
