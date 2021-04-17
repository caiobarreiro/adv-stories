import { NgModule } from '@angular/core';
import { AdvStoriesComponent } from './adv-stories.component';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AdvStoriesComponent,],
  imports: [
    CommonModule
  ],
  exports: [AdvStoriesComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AdvStoriesModule { }
