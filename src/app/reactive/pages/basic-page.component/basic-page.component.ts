import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

/** Con FormGruopu suponinendo que no existe formBuilder
 * pasa que se con solo el primer nivel de identacion ya se complica.
 * {
 *  name: 'Humberto ',
 *  direccion: {
 *    calle: '',
 *    zip: '',
 *    no: 123
 *  }
 * }
 */

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  formBuilder = inject(FormBuilder);

  myForm = this.formBuilder.group({
    name: [
      '' /**Tipo de dato del formulario */,
      [] /**Validadores síncronos */,
      [] /**Validadores asíncronos */,
    ],
    price: [0],
    inStorage: [0],
  });

  /** Unicamente con FormGroup y FormControl
   * myForm = new FormGroup({
   *  name: new FormControl('',[],[]),
   *  price: new FormControl(0),
   *  inStorage: new FormControl(0),
   *  direccion: new FormGroup({
   *   calle: new FormControl('')
   *  })
   * });
   */
}
