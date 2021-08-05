import { OptionalComponent } from './resolution-modifiers/optional/optional.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipesDirectivesModule } from './pipes-directives/pipes-directives.module';
import { DIServicesModule } from './di-services/di-services.module';
// import { SharedService } from './shared.service';
import { ProvidersViewProvidersComponent } from './providers-view-providers/providers-view-providers.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import { SelfNoDataComponent } from './resolution-modifiers/self-no-data/self-no-data.component';
import { HostComponent } from './resolution-modifiers/host/host.component';
import { SelfComponent } from './resolution-modifiers/self/self.component';
import { SkipselfComponent } from './resolution-modifiers/skipself/skipself.component';
import { HostParentComponent } from './resolution-modifiers/host-parent/host-parent.component';
import { HostChildComponent } from './resolution-modifiers/host-child/host-child.component';
import { ChildComponent } from './providers-view-providers/child/child.component';
import { InspectorComponent } from './providers-view-providers/inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersViewProvidersComponent,
    ResolutionModifiersComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    HostComponent,
    SkipselfComponent,
    HostParentComponent,
    HostChildComponent,
    ChildComponent,
    InspectorComponent,
  ],
  imports: [
    BrowserModule,
    PipesDirectivesModule,
    DIServicesModule,
    FormsModule,
  ],
  // providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // console.log(this)
  }
}
