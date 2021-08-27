import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
    //hace lo mismo que el codigo de arriba
    // this.activateRoute.params.subscribe((params) => {
    //   console.log(params.id);
    //   this.paisService.getPaisPorAlpha(params.id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
