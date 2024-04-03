import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgFor, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../model';
import { Router } from '@angular/router';
import { ConvertAgePipe } from '../pipes/convert-age.pipe';
import { ReverseStringPipe } from '../pipes/reverse-string.pipe';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule, ConvertAgePipe, ReverseStringPipe, UpperCasePipe, TitleCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit{
  public date = new Date();
  public toggleStudent: boolean = false;
  public searchByName: string = '';
  public students!: Student[];
  public filteredStudent!: Student[];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe((res)=>{
      this.students = res;
      this.searchStudent()
    });
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

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe((res)=>{
      this.students = res;
      this.searchStudent()
    })
  }

  goTo() {
    console.log('go to')
    this.router.navigate(['create-student'])
  }

  viewStudent(id: string) {
    console.log('student id', id)
    this.router.navigate(['view-student', id]);
  }

  editStudent(id: string) {
    console.log('student id', id)
    this.router.navigate(['edit-student', id]);
  }

}
