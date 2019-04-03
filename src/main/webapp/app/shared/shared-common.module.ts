import { NgModule } from '@angular/core';

import { ProgettoAnimeServerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProgettoAnimeServerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProgettoAnimeServerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProgettoAnimeServerSharedCommonModule {}
