import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ContactsComponent} from "./contacts.component";
import {DataLoadModule} from "../../modules/data-load/data-load.module";
import {AssetsDataModule} from "../../modules/assets-data/assets-data.module";
import {AgGridModule} from "ag-grid-angular";

describe("ContactsComponent", () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([]),
        DataLoadModule,
        AssetsDataModule
      ],
      declarations: [ContactsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
