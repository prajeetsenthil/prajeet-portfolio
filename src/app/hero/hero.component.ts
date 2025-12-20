import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  roles = ['MEAN Stack Developer', 'Security Researcher'];
  typedText = '';
  index = 0;
  roleIndex = 0;
  isDeleting = false;

  @ViewChild('tiltCard', { static: true }) tiltCard!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.type();
  }

  ngAfterViewInit(): void {
    const card = this.tiltCard.nativeElement;

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = (x - rect.width / 2) / (rect.width / 2);
      const dy = (y - rect.height / 2) / (rect.height / 2);

      this.renderer.setStyle(card, 'transform', `perspective(800px) rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`);
    };

    const onMouseLeave = () => {
      this.renderer.setStyle(card, 'transform', `perspective(800px) rotateY(0deg) rotateX(0deg)`);
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  }

  type() {
    const fullText = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.typedText = fullText.substring(0, this.index--);
    } else {
      this.typedText = fullText.substring(0, this.index++);
    }

    if (!this.isDeleting && this.index === fullText.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.type(), 1000);
    } else if (this.isDeleting && this.index === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      setTimeout(() => this.type(), 500);
    } else {
      setTimeout(() => this.type(), this.isDeleting ? 40 : 100);
    }
  }
 
  
}
