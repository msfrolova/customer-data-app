import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as sharedServices from './services/index';

@NgModule({
  declarations: [...sharedServices.services],
  imports: [CommonModule],
  exports: [...sharedServices.services],
})
export class SharedModule {}
