import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['../../styles.css']
})
export class TestimonyComponent implements OnInit{

  ngOnInit(): void {
    const sliders = document.querySelectorAll('.testimony__body') as NodeListOf<HTMLElement>;
    const buttonNext = document.querySelector('#next') as HTMLElement | null;
    const buttonBefore = document.querySelector('#before') as HTMLElement | null;
    let value: number;

    function changePosition(add: number) {
      const currentTestimony = document.querySelector('.testimony__body--show')?.getAttribute('data-id');
      if (currentTestimony) {
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony) - 1]?.classList.remove('testimony__body--show');

        if (value === sliders.length + 1 || value === 0) {
          value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1]?.classList.add('testimony__body--show');
      }
    }

    if (buttonNext && buttonBefore) {
      buttonNext.addEventListener('click', () => {
        changePosition(1);
      });

      buttonBefore.addEventListener('click', () => {
        changePosition(-1);
      });
    }
  }

}
