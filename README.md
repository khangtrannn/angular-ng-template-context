## ngTemplateOutletContext
<ng-container [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{ link }"></ng-container>
<ng-container *ngTemplateOutlet="linkTemplate; context: {link}"></ng-container>

<ng-template #linkTemplate let-link="link">
  <h4>{{link}}</h4>
</ng-template>


## $implicit
<ng-container *ngTemplateOutlet="linkTemplate; context: {$implicit: link}"></ng-container>

<ng-template #linkTemplate let-link>
  <h4>{{link}}</h4>
</ng-template>
