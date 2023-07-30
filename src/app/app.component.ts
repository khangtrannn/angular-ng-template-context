import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  template: `
    <ng-template #linkTemplate let-link="link">
      <h4>{{link}}</h4>
    </ng-template>
    <app-tabs [tabs]="navbarTabs" [linkTemplate]="linkTemplate"></app-tabs>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ng-template-context';
  navbarTabs = ['Active', 'Link 1', 'Link 2'];
}
