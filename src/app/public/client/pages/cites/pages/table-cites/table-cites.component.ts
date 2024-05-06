import { Component, OnInit } from '@angular/core';
import { Cite } from '../../interfaces/cites.interface';
import { CitesService } from '../../services/cites.service';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-cites',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './table-cites.component.html',
  styleUrl: './table-cites.component.css',
})
export class TableCitesComponent implements OnInit{
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

  deleteCite(id: number) {
    this.citesService.deleteCites(id).subscribe((res) => {
      this.getCites();
    });
  }
}
