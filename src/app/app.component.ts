import { Component, ViewEncapsulation } from '@angular/core';
// import { SharedService } from './shared.service';
import { LeafService } from './resolution-modifiers/leaf.service';
import { FlowerService } from './resolution-modifiers/flower.service';
import { AnimalService } from './providers-view-providers/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  name = 'Angular';
  constructor(public flower: FlowerService, public leaf: LeafService, public animal: AnimalService) {}
}


// When using @Host() together with @SkipSelf() in
// child.component.ts for the AnimalService, add the
// following viewProviders array to the @Component metadata:

// viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]

// So, the entire @ChildComponent() decorator and its
// metadata should be as follows:

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ],
//   viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
// })
