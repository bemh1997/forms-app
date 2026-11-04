import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
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
      [
        Validators.required,
        Validators.minLength(3),
      ] /**Validadores síncronos */,
      [] /**Validadores asíncronos */,
    ],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [
      0,
      [Validators.required, Validators.min(0)],
    ],
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
