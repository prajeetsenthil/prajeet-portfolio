import {
  Component,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] 
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsSection', { static: true }) skillsSection!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'visible');
            obs.unobserve(el); 
          }
        });
      },
      { threshold: 0.1 }
    );

    const headings: NodeListOf<HTMLElement> =
      this.skillsSection.nativeElement.querySelectorAll('.category-heading');

    const badges: NodeListOf<HTMLElement> =
      this.skillsSection.nativeElement.querySelectorAll('.skill-badge');

    headings.forEach((el) => observer.observe(el));
    badges.forEach((el) => observer.observe(el));
  }
}
