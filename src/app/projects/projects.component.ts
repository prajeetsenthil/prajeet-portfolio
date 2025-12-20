import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: '10xCoders',
      description: 'An all-in-one tech learning hub offering curated roadmaps, projects, and an AI assistant.',
      techStack: ['ReactJS', 'GeminiAPI', 'Peers'],
      features: [
        'One-stop learning hub with curated roadmaps',
        'AI Chatbot for guidance',
        'Community groups and networking',
        'Gamified progress system'
      ],
      image: 'assets/imgs/10x.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Personal Task Manager',
      description: 'A full-stack app to manage todos, notes, schedules and tasks in one place.',
      techStack: ['Angular', 'Node.js', 'MongoDB'],
      features: [
        'Task & note creation with deadlines',
        'Authentication and authorization',
        'Calendar and file uploads',
        'Dark mode and responsive UI'
      ],
      image: 'assets/imgs/taskmanager.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Cyber Alert System',
      description: 'Auto-detect and summarize recent cyberattacks into video alerts.',
      techStack: ['n8n', 'Python', 'FFmpeg'],
      features: [
        'Real-time cyberattack alerts',
        'Auto-generated visual content',
        'REST API automation',
        'Publish-ready for YouTube Shorts'
      ],
      image: 'assets/imgs/cyberalert.png',
      liveLink: '#',
      githubLink: '#'
    }
  ];
}
