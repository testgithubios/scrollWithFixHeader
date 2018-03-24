import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as _moment from 'moment';
import {defaultFormat as _rollupMoment} from 'moment';


@Component({
  selector: 'app-mat-date-fmt',
  template: `
  <mat-form-field>
    <mat-datepicker-toggle matPrefix [for]="picker"></mat-datepicker-toggle>
    <input matInput [matDatepicker]="picker" [value]="dateValue" (dateInput)="addEvent('input', $event)" [placeholder]="title">
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
`,
providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MatDateFmtComponent),
    multi: true
  }
]
})
export class MatDateFmtComponent implements ControlValueAccessor {

  @Input()
  _dateValue; // notice the '_'

  @Input() title: string;

  get dateValue() {
    return _moment(this._dateValue, 'YYYY/MM/DD HH:mm:ss');
  }

  set dateValue(val) {
    this._dateValue = _moment(val).format('YYYY/MM/DD HH:mm:ss');
    this.propagateChange(this._dateValue);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.dateValue = _moment(event.value, 'YYYY/MM/DD HH:mm:ss');
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = _moment(value, 'YYYY/MM/DD HH:mm:ss');
    }
  }
  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }
}
