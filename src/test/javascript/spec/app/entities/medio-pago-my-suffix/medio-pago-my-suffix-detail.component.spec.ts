/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HaoTestModule } from '../../../test.module';
import { MedioPagoMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/medio-pago-my-suffix/medio-pago-my-suffix-detail.component';
import { MedioPagoMySuffixService } from '../../../../../../main/webapp/app/entities/medio-pago-my-suffix/medio-pago-my-suffix.service';
import { MedioPagoMySuffix } from '../../../../../../main/webapp/app/entities/medio-pago-my-suffix/medio-pago-my-suffix.model';

describe('Component Tests', () => {

    describe('MedioPagoMySuffix Management Detail Component', () => {
        let comp: MedioPagoMySuffixDetailComponent;
        let fixture: ComponentFixture<MedioPagoMySuffixDetailComponent>;
        let service: MedioPagoMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [HaoTestModule],
                declarations: [MedioPagoMySuffixDetailComponent],
                providers: [
                    MedioPagoMySuffixService
                ]
            })
            .overrideTemplate(MedioPagoMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MedioPagoMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MedioPagoMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new MedioPagoMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.medioPago).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});