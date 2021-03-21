import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-main',
    template: `
        <ul>
            <li><a href="/test-1">Another link</a></li>
            <li><a routerLink="/test/link">Yet another link</a></li>
            <li><a routerLink="/test-another/link">Yet one more link</a></li>
        </ul>
    `,
    styles: []
})
export class MainComponent implements OnInit,OnDestroy {
    private destroy$$: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
        this.destroy$$.next();
    }

    ngOnInit(): void {
        this.route.url.pipe(
            takeUntil(this.destroy$$.asObservable()),
            tap(console.log.bind(console))
        ).subscribe();
    }

    constructor(private route: ActivatedRoute) {

    }
}
