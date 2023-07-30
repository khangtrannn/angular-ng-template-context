import { CommonModule } from "@angular/common";
import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="nav nav-tabs my-4 mx-4">
      <li *ngFor="let link of tabs" class="nav-item">
        <a href="#" class="nav-link">
          <ng-container *ngIf="linkTemplate; else noTemplate"></ng-container>
            <!-- <ng-container [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{ link }"></ng-container> -->
            <ng-container *ngTemplateOutlet="linkTemplate; context: {link}"></ng-container>
          <ng-template #noTemplate>
            {{ link }}
          </ng-template>
        </a>
      </li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class TabsComponent {
  @Input() tabs!: string[];
  @Input() linkTemplate: TemplateRef<any> | null = null;
}