import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {

  constructor(private router: Router) {}

  goTo() {
    console.log('go to');
    this.router.navigate(['student-list'])
  }

}
