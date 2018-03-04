import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchService } from './fetch.service';

@NgModule({
  imports: [CommonModule],
  providers: [FetchService]
})
export class SharedModule { }
