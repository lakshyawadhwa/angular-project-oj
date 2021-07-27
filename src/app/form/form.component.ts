import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { BaseService } from './../../services/base-service/base.service';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BaseService } from '../services/base-service/base.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private baseService: BaseService
  ) {}
  checkoutForm = this.formBuilder.group({
    employeeName: '',
    employeeId: '',
  });
  ngOnInit(): void {}
  submitForm(form: object): Observable<any> {
    const url = `url here`;
    return this.baseService.post(url, form).pipe(
      tap(async (response) => {}),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }
  onSubmit(form: Form): void {
    //show the data submitted in the form
    console.log(form);
    //call function to post submit form request
    this.submitForm(form).subscribe((res) => {
      //outputs response in console.
      console.log(res);
      //to reset the form once the data has been posted
      this.checkoutForm.reset();
    });
  }
}
