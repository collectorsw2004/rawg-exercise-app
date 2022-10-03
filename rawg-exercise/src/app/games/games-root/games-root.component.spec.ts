import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesRootComponent } from './games-root.component';

describe('GamesRootComponent', () => {
  let component: GamesRootComponent;
  let fixture: ComponentFixture<GamesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
