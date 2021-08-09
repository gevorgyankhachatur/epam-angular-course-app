import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipesDirectivesModule } from './pipes-directives/pipes-directives.module';
import { DIServicesModule } from './di-services/di-services.module';
import { ProvidersViewProvidersModule } from './providers-view-providers/providers-view-providers.module';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';
// import { SharedService } from './shared.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PipesDirectivesModule,
    DIServicesModule,
    FormsModule,
    ProvidersViewProvidersModule,
    ResolutionModifiersModule,
  ],
  // providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // console.log(this)
  }
}
