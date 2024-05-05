import { CitesService } from './services/cites.service';
import { Component, OnInit } from '@angular/core';
import { Cite } from './interfaces/cites.interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cites',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './cites.component.html',
  styleUrl: './cites.component.css',
})
export class CitesComponent implements OnInit {
  cites!: Cite[];

  constructor(private citesService: CitesService) {}

  ngOnInit(): void {
    this.getCites();
  }

  getCites() {
    this.citesService.getCites().subscribe((res) => {
      this.cites = res.data;
    });
  }
}
