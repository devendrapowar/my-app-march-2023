import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NoEncapsulationComponent } from './view-encapsulation/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './view-encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './view-encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    FooterComponent, ParentComponent, StudentListComponent, NoEncapsulationComponent, EmulatedEncapsulationComponent, ShadowDomEncapsulationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('header') header!: HeaderComponent;
  title = 'my-app-march-2023';

  parentMethod() {

    this.header.insideHederFunction();
  }
}
