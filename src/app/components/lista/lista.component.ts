import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  personas: Persona[] = [];
  personasEliminadas: Persona[] = [];

  agregarPersona(form: NgForm) {
    const persona = new Persona(
      form.value.nombre,
      form.value.apellido,
      form.value.edad,
      form.value.fechaNacimiento,
      form.value.direccion,
      form.value.telefono
    );
    this.personas.push(persona);
    form.reset();
  }

  eliminarPersona(index: number) {
    const personaEliminada = this.personas.splice(index, 1)[0];
    this.personasEliminadas.push(personaEliminada);
  }
}
