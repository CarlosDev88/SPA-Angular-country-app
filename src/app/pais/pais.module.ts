import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PoRegionComponent } from './pages/po-region/po-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PoRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PoRegionComponent,
    VerPaisComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PaisModule {}
