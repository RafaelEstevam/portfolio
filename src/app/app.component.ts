import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSection } from './sections/home/home.section';
import { HeaderComponent } from './components/header/header.component';
import { AnimationsService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSection, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AnimationsService]
})
export class AppComponent {
  title = 'portfolio';
}
