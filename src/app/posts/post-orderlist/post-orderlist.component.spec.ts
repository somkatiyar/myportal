import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrderlistComponent } from './post-orderlist.component';

describe('PostOrderlistComponent', () => {
  let component: PostOrderlistComponent;
  let fixture: ComponentFixture<PostOrderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOrderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOrderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
