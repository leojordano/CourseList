import { Error404Component } from './component/error-404/error-404.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/navbar/navbar-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {path: '**', component: Error404Component },
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {}