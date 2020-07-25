import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    oqas = 'Outsourced';
    tworks = 'Teloworks';
    tm = 'Trend Micro';
    smartmatic = 'Smartmatic';
    sds = 'SD Solutions';

    activeTab: string;

    ngOnInit(): void {
        this.activeTab = this.oqas;
    }

    tabMenuItemClick(event, item: string): void {
        event.preventDefault();
        event.stopPropagation();

        this.activeTab = item;
    }

    tabActive(item: string) {
        return this.activeTab === item;
    }
}
