import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cites',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './cites.component.html',
  styleUrl: './cites.component.css',
})
export class CitesComponent {
}
