import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [{
    title: 'Student List',
    path: 'student-list',
    component: StudentListComponent
},{
    title: 'Create student',
    path: 'create-student',
    component: CreateStudentComponent
},{
    path: '**',
    redirectTo: 'student-list'
}];
