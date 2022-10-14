import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { Graph1Component } from '../pages/graph1/graph1.component';
import { ProgressComponent } from '../pages/progress/progress.component';

const routes: Routes = [

    // { path: 'path/:routeParam', component: MyComponent }
    // { path: 'staticPath', component: ... }
    // { path: '**', component: ... }
    // { path: 'oldPath', redirectTo: '/staticPath' }
    // { path: ..., component: ..., data: { message: 'Custom } }
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path:'dashboard', component: DashboardComponent },
            { path:'progress', component: ProgressComponent },
            { path:'graph1', component: Graph1Component },
            { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
        ] 
    },

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule {}