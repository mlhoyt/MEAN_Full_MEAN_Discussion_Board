import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { {{COMP}}Component } from '.../{{COMP}}.component';

const routes: Routes = [
// NOTE: path-URL has NO leading '/'
// NOTE: redirectTo-URL CAN (but does not have to) have leading '/'
// NOTE: component.html: <a [routerLink]="['/{{URL}}', ...]">...</a>'
// NOTE: component.ts: this._router.navigate( ['/{{URL}}', '{{URL}}'|{{VAR}}, ... ] );
// { path: '{{URL}}', [ pathMatch: 'full', ] component: {{COMP}}Component },
// { path: '{{URL}}', [ pathMatch: 'full', ] redirectTo: '/{{URL}}' },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
