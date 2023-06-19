import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { NgIf, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        MatSelectModule,
        MatFormFieldModule, 
        FormsModule, 
        ReactiveFormsModule, 
        NgIf, 
        NgFor
    ],
    providers: [],
})
export class MaterialModule { }
