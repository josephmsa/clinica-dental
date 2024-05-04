import { CitesService } from './../../services/cites.service';
import { Component, OnInit } from '@angular/core';
import { Cite } from '../../interfaces/cites.interface';

@Component({
  selector: 'app-cites',
  standalone: true,
  imports: [],
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
