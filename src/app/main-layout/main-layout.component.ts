import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

    oqas = 'Outsourced';
    tworks = 'Teloworks';
    tm = 'Trend Micro';
    smartmatic = 'Smartmatic';
    sds = 'SD Solutions';

    activeTab: string;
    currentActive = 0;
    @ViewChild('intro') introSection: ElementRef;
    @ViewChild('about') aboutSection: ElementRef;
    @ViewChild('history') historySection: ElementRef;
    @ViewChild('work') workSection: ElementRef;
    @ViewChild('contact') contactSection: ElementRef;
    private introOffset: number;
    private aboutOffset: number;
    private historyOffset: number;
    private workOffset: number;
    private contactOffset: number;

    ngOnInit(): void {
        this.activeTab = this.oqas;
    }

    ngAfterViewInit(): void {
        this.introOffset = this.introSection.nativeElement.offsetTop;
        this.aboutOffset = this.aboutSection.nativeElement.offsetTop;
        this.historyOffset = this.historySection.nativeElement.offsetTop;
        this.workOffset = this.workSection.nativeElement.offsetTop;
        this.contactOffset = this.contactSection.nativeElement.offsetTop;
    }

    themeChange(): void {
        document.querySelector('body').classList.toggle('dark');
    }

    @HostListener('window:scroll', ['$event'])
    checkOffsetTop(): void {
        const offset = window.pageYOffset - 100;
        if (offset >= this.introOffset && offset < this.aboutOffset) {
            this.currentActive = 1;
        } else if (offset >= this.aboutOffset && offset < this.historyOffset) {
            this.currentActive = 2;
        } else if (offset >= this.historyOffset && offset < this.workOffset) {
            this.currentActive = 3;
        } else if (offset >= this.workOffset && offset < this.contactOffset) {
            this.currentActive = 4;
        } else {
            this.currentActive = 0;
        }
    }
}
