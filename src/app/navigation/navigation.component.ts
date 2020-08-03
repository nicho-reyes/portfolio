import {AfterViewInit, Component, HostListener, Input} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {

    @Input()
    introOffset: number;
    @Input()
    aboutOffset: number;
    @Input()
    historyOffset: number;
    @Input()
    contactOffset: number;

    currentActive = 0;

    mobileMenuOpen: boolean;

    private body: HTMLElement;

    ngAfterViewInit(): void {
        this.body = document.querySelector('body');
    }

    themeChange(): void {
        this.body.classList.toggle('dark');
    }

    openMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
        this.body.classList.toggle('overlay');
    }

    clearOverlay(): void {
        this.body.classList.remove('overlay');
        this.mobileMenuOpen = false;
    }

    @HostListener('window:resize')
    resize(): void {
        if (window.innerWidth > 767) {
            this.clearOverlay();
        }
    }

    @HostListener('window:scroll')
    checkOffsetTop(): void {
        const offset = window.pageYOffset - 100;
        if (offset >= this.introOffset && offset < this.aboutOffset) {
            this.currentActive = 1;
        } else if (offset >= this.aboutOffset && offset < this.historyOffset) {
            this.currentActive = 2;
        } else if (offset >= this.historyOffset && offset < this.contactOffset) {
            this.currentActive = 3;
        } else {
            this.currentActive = 0;
        }
    }
}
