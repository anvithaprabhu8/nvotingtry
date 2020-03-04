import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ModelModule,
    FormsModule,
    RouterModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
