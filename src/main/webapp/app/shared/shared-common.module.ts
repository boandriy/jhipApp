import { NgModule } from '@angular/core';

import { JhipAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipAppSharedCommonModule {}
