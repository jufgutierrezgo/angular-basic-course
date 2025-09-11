import { Component } from '@angular/core';

// Componente 1: Header
@Component({
  selector: 'app-header',
  template: `<h1>📚 My Angular Courses</h1>`,  
})
export class Header {}

// Componente 2: CourseItem (curso individual)
@Component({
  selector: 'app-course-item',
  template: `<li>{{ name }} — {{ level }}</li>`,  
})
export class CourseItem {
  name = 'Angular Basics';
  level = 'Beginner';
}

// Componente 3: CourseList (lista de cursos)
@Component({
  selector: 'app-course-list',
  template: `
    <h2>Available Courses:</h2>
    <ul>
      <app-course-item></app-course-item>
      <app-course-item></app-course-item>
    </ul>
  `,  
  imports: [CourseItem],
})
export class CourseList {}

// Componente 4: App (raíz)
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-course-list></app-course-list>
  `,  
  imports: [Header, CourseList],
})
export class App {}
