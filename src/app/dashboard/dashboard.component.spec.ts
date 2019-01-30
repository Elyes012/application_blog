import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ReactiveFormsModule, FormsModule,  HttpModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('remove user', () => {
  const id = '5bf58714ff1e10177c517e29';
component.getUsers();
component.removeUser(id);
});

it('update user All input valid', () => {
  const id = '5bf5874c493b5d20a0eb9c1d';
component.getUsers();

const nameUser = component.editForm.controls['name'];
nameUser.setValue('elyes');
const lastnameUser = component.editForm.controls['lastname'];
lastnameUser.setValue('elyess');
const emailUser = component.editForm.controls['email'];
emailUser.setValue('email@email.com');
expect(component.editForm.valid).toBeTruthy();
component.editUser(id);

});

it('update user All input invalid', () => {
const id = '5bf58715ff1e10177c517e2a';
component.getUsers();
const nameUser = component.editForm.controls['name'];
nameUser.setValue('yu');
const lastnameUser = component.editForm.controls['lastname'];
lastnameUser.setValue('ma');
const emailUser = component.editForm.controls['email'];
emailUser.setValue('email.com');
component.editUser(id);
expect(component.editForm.invalid).toBeTruthy();

});
it('update user name invalid', () => {
  const id = '5bf58715ff1e10177c517e2a';
  component.getUsers();
  const nameUser = component.editForm.controls['name'];
  nameUser.setValue('yu');
  const lastnameUser = component.editForm.controls['lastname'];
  lastnameUser.setValue('marko');
  const emailUser = component.editForm.controls['email'];
  emailUser.setValue('rr@email.com');
  component.editUser(id);
  expect(component.editForm.controls['name'].invalid).toBeTruthy();

  });

  it('update user lastname invalid', () => {
    const id = '5bf58715ff1e10177c517e2a';
    component.getUsers();
    const nameUser = component.editForm.controls['name'];
    nameUser.setValue('marko');
    const lastnameUser = component.editForm.controls['lastname'];
    lastnameUser.setValue('no');
    const emailUser = component.editForm.controls['email'];
    emailUser.setValue('rr@email.com');
    component.editUser(id);
    expect(component.editForm.controls['lastname'].invalid).toBeTruthy();
    });

    it('update user email invalid', () => {
      const id = '5c45da5bbde4951ae4d31509';
      component.getUsers();
      const nameUser = component.editForm.controls['name'];
      nameUser.setValue('marko');
      const lastnameUser = component.editForm.controls['lastname'];
      lastnameUser.setValue('benss');
      const emailUser = component.editForm.controls['email'];
      emailUser.setValue('mailcom');
      component.editUser(id);
      expect(component.editForm.controls['email'].invalid).toBeTruthy();
      });

it('delete article', () => {
  const id = '5c45da52bde4951ae4d31508';
component.getAllarticle();
component.deleteSubjectID(id);
});
it('edit article all input valid', () => {
  const id = '5c45da5bbde4951ae4d31509';
  component.getAllarticle();
  const titleArticle = component.editArticle.controls['title'];
  titleArticle.setValue('my new article');
  const contentArticle = component.editArticle.controls['content'];
  contentArticle.setValue('new article');
  component.updateSubjectID(id);
  expect(component.editArticle.valid).toBeTruthy();
});

it('edit article title invalid', () => {
  const id = '5c45da5bbde4951ae4d31509';
  component.getAllarticle();
  const titleArticle = component.editArticle.controls['title'];
  titleArticle.setValue('my');
  const contentArticle = component.editArticle.controls['content'];
  contentArticle.setValue('new article');
  component.updateSubjectID(id);
 expect(component.editArticle.controls['title'].invalid).toBeTruthy();
});

it('edit article title invalid', () => {
  const id = '5c45da5bbde4951ae4d31509';
  component.getAllarticle();
  const titleArticle = component.editArticle.controls['title'];
  titleArticle.setValue('mytest');
  const contentArticle = component.editArticle.controls['content'];
  contentArticle.setValue('mm');
  component.updateSubjectID(id);
 expect(component.editArticle.controls['content'].invalid).toBeTruthy();
});

it('edit article all input invalid', () => {
  const id = '5c45da5bbde4951ae4d31509';
  component.getAllarticle();
  const titleArticle = component.editArticle.controls['title'];
  titleArticle.setValue('mytest');
  const contentArticle = component.editArticle.controls['content'];
  contentArticle.setValue('mm');
  component.updateSubjectID(id);
 expect(component.editArticle.invalid).toBeTruthy();
});

it('remove comment', () => {
const id = '5c0293e24b1cdd191077e091';
component.getAllComments();
component.delteComment(id);
});
});
