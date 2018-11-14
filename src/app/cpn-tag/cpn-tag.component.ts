import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cpn-tag',
  templateUrl: './cpn-tag.component.html',
  styleUrls: ['./cpn-tag.component.scss']
})
export class CpnTagComponent implements OnInit {
  @ViewChild('boxAddTag') boxAddTag;
  tagArr = [];
  existedErrorIndex = null;
  constructor() { }

  ngOnInit() {
  }

  addTag(value: string) {
    const checkExistedIndex = this.tagArr.findIndex(v => v === value);
    if (checkExistedIndex !== -1) {
      this.existedErrorIndex = checkExistedIndex;
      setTimeout(() => {
        this.existedErrorIndex = null;
      }, 2000);
      return;
    };
    this.boxAddTag.nativeElement.value = '';
    this.boxAddTag.value = '';
    this.tagArr.push(value);
  }

  removeTag(value: string) {
    return this.tagArr = this.tagArr.filter(v => v !== value);
  }

}
