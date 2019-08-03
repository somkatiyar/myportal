import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogbycategoryComponent } from './blogbycategory.component';

describe('BlogbycategoryComponent', () => {
  let component: BlogbycategoryComponent;
  let fixture: ComponentFixture<BlogbycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogbycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
