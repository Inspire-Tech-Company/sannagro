import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  activeIndex = 0; 
  
  carouselItems = [
    {
      image: 'assets/bg.jpg',
      subtitle: 'SOLUÇÃO PARA SUA <span class="bold">PESAGEM</span>',
      title: 'Movimente a sua carga com Segurança!',
      description:
        'Nossas balanças são fabricadas, instaladas e calibradas por nós, realizamos o processo completo e asseguramos com exatidão a sua pesagem!',
      buttonText: 'Ver mais >',
    },
    {
      image: 'assets/bg.jpg',
      subtitle: 'OUTRO EXEMPLO',
      title: 'Exemplo de Título 2!',
      description:
        'Descrição para o segundo slide, para mostrar como o carrossel muda os textos e o botão.',
      buttonText: 'Saiba mais >',
    },
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

  servicos = [
    { 
      icon: 'assets/icons/manutencao.png', 
      title: 'Manutenção', 
      images: [
        'assets/servicos/manutencao1.jpg', 
        'assets/servicos/manutencao2.jpg',
        'assets/servicos/manutencao3.jpg'
      ] 
    },
    { 
      icon: 'assets/icons/calibracao.png', 
      title: 'Calibração', 
      images: [
        'assets/servicos/calibracao1.jpg', 
        'assets/servicos/calibracao2.jpg',
        'assets/servicos/calibracao3.jpg'
      ] 
    },
    { 
      icon: 'assets/icons/visita.png', 
      title: 'Visita Técnica', 
      images: [
        'assets/servicos/visita1.jpg', 
        'assets/servicos/visita2.jpg',
        'assets/servicos/visita3.jpg'
      ] 
    },
  ];
  
  currentImage = this.servicos[0].images; 
  activeIndex2 = 0; 

  changeImage(index: number): void {
    this.currentImage = this.servicos[index].images;
    this.activeIndex2 = index; 
  }
}
