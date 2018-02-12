/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { HaoTestModule } from '../../../test.module';
import { ProductoMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/producto-my-suffix/producto-my-suffix-delete-dialog.component';
import { ProductoMySuffixService } from '../../../../../../main/webapp/app/entities/producto-my-suffix/producto-my-suffix.service';

describe('Component Tests', () => {

    describe('ProductoMySuffix Management Delete Component', () => {
        let comp: ProductoMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<ProductoMySuffixDeleteDialogComponent>;
        let service: ProductoMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [HaoTestModule],
                declarations: [ProductoMySuffixDeleteDialogComponent],
                providers: [
                    ProductoMySuffixService
                ]
            })
            .overrideTemplate(ProductoMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProductoMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductoMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});