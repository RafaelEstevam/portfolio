import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSection } from './sections/home/home.section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSection],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent {
  title = 'portfolio';
}
