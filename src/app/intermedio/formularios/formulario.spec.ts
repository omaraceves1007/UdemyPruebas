import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
    
    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder() );
    });

    it ('Debe crear form con dos campos', () => {
        expect( componente.form.contains('email') ).toBe(true);
        expect( componente.form.contains('password') ).toBe(true);
    });

    it('Email obligatorio', () => {
        
        const control = componente.form.get('email');
        control.setValue(' ');

        expect( control.valid ).toBeFalsy(); 
    });

    it('Email valido', () => {
        
        const control = componente.form.get('email');
        control.setValue('omar@gmail.com');

        expect( control.valid ).toBeTruthy(); 
    });
})