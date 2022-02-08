import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachingComponent } from './coaching/coaching.component';

@NgModule({
    declarations: [CoachingComponent],
    imports: [CommonModule],
})
export class CoachingModule {}
