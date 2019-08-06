import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  classesToApply : string = 'bold colorClass';
  applyBoldClass: boolean = false;
  applyItalicClass: boolean  = true;
  addClasses() {
    let classes = {
      bold: this.applyBoldClass,
      italicClass: this.applyItalicClass
    }
    return classes;
  }
  clickKiyaMujhe() {
    alert("Kyon click kiya mujhe?");
  }
}
