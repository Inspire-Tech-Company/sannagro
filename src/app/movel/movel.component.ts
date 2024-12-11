import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movel.component.html',
  styleUrl: './movel.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MovelComponent {
  activeIndex = 0; 
  
  carouselItems = [
    {
      image: 'assets/produtos/concreto.jpg',
      subtitle: 'BALANÇAS RODOVIÁRIAS MÓVEIS',
      title: 'Balança Móvel',
      description:
        'Feita com estrutura robusta em concreto e metal, garantindo precisão e durabilidade.',
      buttonText: 'Ver mais >',
    }
  ];

  // Navega para o próximo slide
  nextSlide() {
    this.activeIndex =
      (this.activeIndex + 1) % this.carouselItems.length;
  }

  // Navega para o slide anterior
  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.carouselItems.length) %
      this.carouselItems.length;
  }

  // Vai para um slide específico
  goToSlide(index: number) {
    this.activeIndex = index;
  }
}
