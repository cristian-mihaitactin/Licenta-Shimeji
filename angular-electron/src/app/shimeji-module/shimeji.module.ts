import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShimejiComponent } from './components/shimeji-main/shimeji.component';

@NgModule({
  imports: [CommonModule],
  exports: [ShimejiComponent],
  declarations: [ShimejiComponent]
})
export class ShimejiModuleModule {}
