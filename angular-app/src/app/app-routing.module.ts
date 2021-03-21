import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';

const routes: Routes = [
    {
        path: '**',
        component: MainComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'/*, enableTracing: true*/})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
