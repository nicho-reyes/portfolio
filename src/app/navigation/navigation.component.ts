import {Component} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    scrollAnchorToView(event, anchorId: string): void {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById(anchorId).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

}
