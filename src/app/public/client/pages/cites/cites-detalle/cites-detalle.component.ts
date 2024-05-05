import { Component, OnInit } from '@angular/core';
import { CitesService } from '../services/cites.service';
import { Detail } from '../interfaces/cites.interface';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cites-detalle',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './cites-detalle.component.html',
  styleUrl: './cites-detalle.component.css',
})
export class CitesDetalleComponent implements OnInit {
  detail!: Detail;

  constructor(
    private citesService: CitesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      this.getDetail(id);
    });
  }

  getDetail(id: number) {
    this.citesService.getDetailCites(id).subscribe((res) => {
      this.detail = res.data;
    });
  }
}
