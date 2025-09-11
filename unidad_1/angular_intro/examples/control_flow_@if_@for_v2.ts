import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>Classroom Students</h2>

    <ul>
      @for (student of students; track student.id; let i = $index) {
        <li>
          #{{ i + 1 }} - {{ student.name }} (Grade: {{ student.grade }})
        </li>
      }
    </ul>
  `,
})
export class App {
  students = [
    { id: 's1', name: 'Alice', grade: 'A' },
    { id: 's2', name: 'Bob', grade: 'B+' },
    { id: 's3', name: 'Charlie', grade: 'A-' },
  ];
}
