import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: `
        <h1>I'm an Angular application, where index.html was generated at runtime.</h1>
        Check slug value in meta tags. This indicates that slug data can be analyzed and transformed on backend layer.
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {
    title = 'angular-app';

}
