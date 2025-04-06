import { NgModule } from "@angular/core";

import { TabContainerComponent } from "./tab-container/tab-container.component";
import { CommonModule } from "@angular/common";
import { TabItemDirective } from "./tab-item/tab-item.directive";

@NgModule({
  imports: [CommonModule],
  exports: [TabContainerComponent, TabItemDirective],
  declarations: [TabContainerComponent, TabItemDirective],
  providers: [],
})
export class TabulationMechanismModule {}
