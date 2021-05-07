import { HttpClientTestingModule } from "@angular/common/http/testing";
import { WeatherComponent } from "./weather.component";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

describe("WeatherComponent", () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [WeatherComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
