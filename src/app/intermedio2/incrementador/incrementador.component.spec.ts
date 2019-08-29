import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar leyenda', () => {
        
        component.leyenda = 'Progreso de Carga';

        fixture.detectChanges();// Disparar deteccion de camnbios de angular

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de Carga');

    });

    it('Debe de mostrar en input valor progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then( () => {

            const input: HTMLInputElement = fixture.debugElement.query( By.css('input') ).nativeElement;
            console.log(input);
            expect( input.value ).toBe('55');
        });
    });

    it('Debe de incrementar/decrementar con click', () => {
        const botones = fixture.debugElement.queryAll( By.css( '.btn-primary' ) );

        botones[0].triggerEventHandler('click',null);
        expect( component.progreso ).toBe(45);
        botones[1].triggerEventHandler('click',null);
        expect( component.progreso ).toBe(50);
    });

    it('En titulo debe mostrar el progreso', () => {
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('45');
    });
});
