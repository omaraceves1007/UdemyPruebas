import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, empty } from 'rxjs';
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
    })

});
