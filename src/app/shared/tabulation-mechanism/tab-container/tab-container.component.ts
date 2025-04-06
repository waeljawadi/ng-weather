import {AfterContentChecked, Component, ContentChildren, EventEmitter, Input, Output, QueryList,} from '@angular/core';
import {TabItemDirective} from '../tab-item/tab-item.directive';

@Component({
    selector: 'tab-container',
    templateUrl: './tab-container.component.html',
    styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent implements AfterContentChecked {
    @Input()
    openTabId = 0;

    @Output()
    openTabIdChange = new EventEmitter<number>();

    @Output()
    closeTab = new EventEmitter<number>();

    @ContentChildren(TabItemDirective)
    tabs?: QueryList<TabItemDirective>;


    ngAfterContentChecked() {
        this.updateActiveTabVisibility();
    }

    getTitles() {
        return this.tabs.map(tab => tab.title);
    }

    selectTabByIndex(index: number) {
        this.openTabId = index;
        this.openTabIdChange.emit(index);
    }

    close(event: Event, index: number) {
        event.stopPropagation();
        this.closeTab.emit(index);
    }

    private updateActiveTabVisibility(): void {
        this.tabs?.forEach((tab, index) => {
            const isActive = index === this.openTabId;
            const element = tab.elementRef?.nativeElement;

            if (element) {
                element.style.display = isActive ? 'block' : 'none';
            }
        });
    }


}
