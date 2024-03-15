import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../model';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.scss'
})
export class ViewStudentComponent {
  public student!: Student | undefined;
  @Input() 
  set stdId(value: string) {
    this.initStudent(value)
  }

  constructor(private router: Router, private studentService: StudentService) {}

  initStudent(id: string) {
    this.student = this.studentService.getStudentDetails(id);
    console.log('this.student', this.student)
  }
  goTo() {
    this.router.navigate(['student-list'])
  }
}
