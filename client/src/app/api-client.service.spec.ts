import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ApiClientService } from "./api-client.service";

describe("ApiClientService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: ApiClientService = TestBed.get(ApiClientService);
    expect(service).toBeTruthy();
  });
});
