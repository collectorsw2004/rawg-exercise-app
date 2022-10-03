import {
  Component,
  OnInit,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'search-div',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = "";
  @Output() sEvent = new EventEmitter<string>();
  constructor() {}

  onInputChange(search: any) {
    this.value = search;
  }

  onSearchClick(event):void {
    this.sEvent.emit(this.value);
  }

  ngOnInit(): void {
  }

}
