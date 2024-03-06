import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  async submitData(formData: any) {
    const url = environment.api;

    try {
      const response = await axios.post(url, formData);
      // console.log(response.data);
    } catch (error) {
      // console.error('Error:', error);
    }
  }

  constructor(private http: HttpClient) {}
  postData(data: any) {
    const url = environment.api;
    this.http.post(url, data).subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => {
        // console.log('Error: ', err);
      }
    );
  }
}
