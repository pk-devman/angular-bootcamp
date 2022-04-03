import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent,
    TestThreeComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent,
    HighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
