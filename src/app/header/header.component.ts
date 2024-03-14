import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent  { //implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
  public title: string;
  public search: string;

  constructor() {
    this.title = "My App";
    this.search = 'test';
  }

  // ngOnInit(): void {
  //   console.log('on init fire');
  // }

  // ngDoCheck(): void {
  //   console.log('do check fire')
  // }

  // ngAfterContentInit(): void {
  //   console.log('content init fire')
    
  // }
  // ngAfterContentChecked(): void {
  //   console.log('content checket fire')
  // }

  // ngAfterViewInit(): void {
  //   console.log('After view init fire')
  // }

  // ngAfterViewChecked(): void {
  //   console.log('After view checket')
  // }
  onSearch() {
    console.log('click working', this.search);
  }




}
