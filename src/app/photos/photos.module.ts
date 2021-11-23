import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    imports: [ HttpClientModule, BrowserModule ]
})
export class PhotosModule {}
