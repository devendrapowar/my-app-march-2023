import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit{
  public toggleStudent: boolean = false;
  public searchByName: string = '';
  public students!: Student[];
  public filteredStudent!: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudentList();
    console.log('students', this.students);
    this.searchStudent()
  }
  
  showTable() {
    // console.log(this.searchByName)
    this.toggleStudent = !this.toggleStudent
  }

  searchStudent() {
    this.filteredStudent = this.students?.filter((std: Student)=>{
      return std.name.toLowerCase().includes(this.searchByName.toLowerCase());
    })
  }

  deleteStudent(index: number) {
    this.filteredStudent.splice(index, 1);
  }

}
