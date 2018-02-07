import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div style="text-align: center;" class="noContent">
      <h1>404</h1>
      <h3>Désolé</h3>
      <h4>La page que vous cherchez n'existe pas</h4>
    </div>
  `,
  styles: ['./no-content.component.css']
})
export class NoContentComponent {

}
