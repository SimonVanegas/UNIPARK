import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{

  ngOnInit(): void {
    const titleQuestions = document.querySelectorAll('.questions__title') as NodeListOf<HTMLElement>;

    titleQuestions.forEach(question => {
      question.addEventListener('click', () => {
        let height = 0;
        const answer = question.nextElementSibling as HTMLElement;
        const addPadding = question.parentElement?.parentElement as HTMLElement;

        addPadding.classList.toggle('questions__padding--add');
        question.children[0].classList.toggle('questions__arrow--rotate');

        if (answer.clientHeight === 0) {
          height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`;
      });
    });
  }
}
