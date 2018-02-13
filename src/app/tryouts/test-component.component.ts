import { Component, OnInit, Output } from '@angular/core';

import { Fetch } from '../shared/fetch';
import { FetchService } from '../shared/fetch.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styles: []
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  @Output() output: string;
  @Output() tryInterface: string;

  ngOnInit() {

    let mc = new MyClass('mc');
    const md = new MyDerived('md');
    md.id = '1';

    mc = md;

    // const ftch: Fetch = new FetchService();

    this.output = `${mc.constructor.name} → ${mc.getOtherData()}  → ${mc.name} = ${typeof (md)} → ${md.getOtherData('sdf')}`;
    // this.tryInterface = `${typeof (ftch)} of ${typeof (ftch.getArticle)}`;

    const myInt: IMyStrategy = {
      name: 'myInt',
      getData(): () => any { return name; }
    };

    // this.tryInterface = `${myInt.getData} & ${myInt.getOtherData} & ${myInt.constructor.name}`;

    const str: IMyStrategy = new BasicStrategy();
    this.tryInterface = `${str.constructor.name} & ${str.getData}`;
  }

}

interface MyCallback {
  (name: string): string;
}

interface IMyStrategy {
  name: string;
  getData(): string;
  getOtherData?(): string;
}

class BasicStrategy implements IMyStrategy {
  name: string;
  getData(): string {
    return this.name;
  }
}

class MyClass {
  name: string;

  getData(): string {
    return this.name;
  }

  constructor(name: string) {
    this.name = name;
  }

  getOtherData() {
    return `other data of ${this.name}`;
  }
}

class MyDerived extends MyClass {
  id: string;

  getData(): string {
    return `${super.getData()}, ${this.id}`;
  }

  getOtherData(ext: string) {
    return `df ${ext}`;
  }
}
