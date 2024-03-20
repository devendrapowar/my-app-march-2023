import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent implements OnInit{
  public studentForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      img: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: [''],
      email: [''],
      number: ['']
    })
    console.log('student form', this.studentForm);
  }
  goTo() {
    console.log('go to');
    this.router.navigate(['student-list'])
  }

  saveStudent() {
    console.log('student form', this.studentForm);
    if(this.studentForm.valid) {
      this.studentService.saveStudent(this.studentForm.value);
      this.goTo();
    }
  }

}
