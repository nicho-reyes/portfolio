import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements AfterViewInit {

    @ViewChild('intro')
    private introSection: ElementRef;
    @ViewChild('about')
    private aboutSection: ElementRef;
    @ViewChild('history')
    private historySection: ElementRef;
    @ViewChild('contact')
    private contactSection: ElementRef;
    introOffset: number;
    aboutOffset: number;
    historyOffset: number;
    contactOffset: number;

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        this.introOffset = this.introSection.nativeElement.offsetTop;
        this.aboutOffset = this.aboutSection.nativeElement.offsetTop;
        this.historyOffset = this.historySection.nativeElement.offsetTop;
        this.contactOffset = this.contactSection.nativeElement.offsetTop;
        this.cdr.detectChanges();
    }
}
