import { CardModule } from './../shared/components/card/card.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from "@angular/core";


import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { SearchComponent } from './photo-list/search/search.component';


@NgModule({
    declarations: [PhotoListComponent, PhotosComponent, FilterByDescriptionPipe, LoadButtonComponent, SearchComponent],
    imports: [ PhotoModule, CommonModule, PhotoFormModule, CardModule ]
})
export class PhotosModule {}
