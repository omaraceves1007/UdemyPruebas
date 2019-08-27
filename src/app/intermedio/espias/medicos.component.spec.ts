import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, empty, throwError } from 'rxjs';
import 'rxjs/add/observable/from';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
       componente = new MedicosComponent(servicio); 
    });


    it('Init dede de cargar medicos', () => {

        const medicos = ['medico1', 'medico2', 'medicos3'];
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from( [medicos] );
        })
        
        componente.ngOnInit();

        expect( componente.medicos.length ). toBeGreaterThan(0);
   
    });

    it('Debe llamar servidor para agregar medico', () => {
        
        const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( medico => {
            return empty();
        });

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();
    });

    it('Debe de agregar nuevo medico al arreglo de medicos', () => {
        const medico = { id: 1, nombre: 'Juan' };
        spyOn( servicio, 'agregarMedico' ).and.returnValue( from( [medico] ) );

        componente.agregarMedico();

        expect( componente.medicos.length ).toBe(1);
        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    });

    it('si falla la adicion mensaje error igual error servicio', () => {
        const miError = 'No se pudo agregar el médico';
        
        spyOn( servicio, 'agregarMedico').and
                .returnValue( throwError( miError ) );
        
        componente.agregarMedico();
        
        expect( componente.mensajeError ).toBe( miError );
    });

    it('Debe de llamar a servidor para borrar el medico', () => {

        spyOn( window, 'confirm' ).and.returnValue(true);

        const espia = spyOn( servicio, 'borrarMedico' ).and
            .returnValue( empty() );
        
        componente.borrarMedico('1');
        
        expect( espia ).toHaveBeenCalledWith('1');
    });

    it('No debe de llamar a servidor para borrar el medico', () => {

        spyOn( window, 'confirm' ).and.returnValue(false);

        const espia = spyOn( servicio, 'borrarMedico' ).and
            .returnValue( empty() );
        
        componente.borrarMedico('1');
        
        expect( espia ).not.toHaveBeenCalledWith('1');
    });

});
