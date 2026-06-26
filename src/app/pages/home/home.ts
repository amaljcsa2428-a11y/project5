import { Component } from '@angular/core';
import { Accordian } from '../../ui/accordian/accordian';

@Component({
  selector: 'app-home',
  imports: [Accordian],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
