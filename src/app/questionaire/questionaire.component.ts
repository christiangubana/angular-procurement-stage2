import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})
export class QuestionaireComponent {
 dueDate = new Date() || '31/10/2024';
}
