import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GrowlerModule } from './growler/growler.module';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, GrowlerModule],
  exports: [GrowlerModule, RouterModule, HttpClientModule],
  declarations: [],
  providers: [] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}



