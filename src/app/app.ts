import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './ui/navbar/navbar';
import { Footer } from './ui/footer/footer';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('com');
}
