import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { StarModule } from '../shared/component/star/star.module'

import {CourseInfoComponent} from './course-info/course-info.component'
import {CourseListComponent} from './course-list.component'

@NgModule({
    declarations: [
        CourseInfoComponent,
        CourseListComponent,
    ],
    imports: [
        AppPipeModule,
        StarModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'courses', component: CourseListComponent},
            {path: 'courses/info/:id', component: CourseInfoComponent},
        ])
    ]
})
export class CourseModule {

}