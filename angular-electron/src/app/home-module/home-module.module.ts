import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleComponent } from './home-module.component';
import { DisplayShimejiComponent } from './components/display-shimeji/display-shimeji.component';
import { ShimejiModuleModule } from '../shimeji-module/shimeji.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, ShimejiModuleModule],
  exports: [HomeModuleComponent],
  declarations: [HomeModuleComponent, DisplayShimejiComponent]
})
export class HomeModuleModule {}
