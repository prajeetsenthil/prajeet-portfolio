import { Component, AfterViewInit } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [NgIf, NgClass] 
})
export class ContactComponent implements AfterViewInit {
  message: string | null = null;
  isError = false;
  animate = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animate = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.contact-section');
    if (section) observer.observe(section);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mnnzzbvv', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          this.message = 'Message sent successfully!';
          this.isError = false;
          form.reset();
        } else {
          throw new Error('Failed to send');
        }
      })
      .catch(() => {
        this.message = 'Failed to send message. Try again!';
        this.isError = true;
      });

    setTimeout(() => {
      this.message = null;
    }, 4000);
  }
}
