import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should render title in a h1 tag', async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Hello and welcome to my terrible JustEat test app!');
    }));
});
//# sourceMappingURL=app.component.spec.js.map