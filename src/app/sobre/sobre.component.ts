import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SobreComponent {
  activeIndex = 0; 
  
  carouselItems = [
    {
      image: 'assets/bg_sobre.jpg',
      subtitle: 'CONHEÇA A <span class="bold">SANNAGRO</span>',
      title: 'Quem somos?',
      description:
        'Atendemos clientes de todos os setores, fornecendo com qualidade e confiança, dispondo com o máximo desempenho em produtos e serviços de solução em pesagem.'
    }
  ];

  nextSlide() {
    this.activeIndex =
      (this.activeIndex + 1) % this.carouselItems.length;
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.carouselItems.length) %
      this.carouselItems.length;
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }
}
