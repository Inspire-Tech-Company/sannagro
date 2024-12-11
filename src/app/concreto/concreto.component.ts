import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concreto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concreto.component.html',
  styleUrl: './concreto.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ConcretoComponent {
  activeIndex = 0; 
  
  carouselItems = [
    {
      image: 'assets/produtos/concreto.jpg',
      subtitle: 'BALANÇAS RODOVIÁRIAS',
      title: 'Balança de Concreto',
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
