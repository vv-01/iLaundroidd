// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import axios from 'axios';
// import { environment } from '../../environments/environment';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.css',
// })
// export class ContactComponent {
//   async submitData(formData: any) {
//     const url = environment.url;
//     const responseData = {
//       Rname: 'iLaundroid',
//       Remail: 'ilaundroidmangalore@gmail.com',
//       Rphone: '73385 84123',
//       Rmessage:
//         "We'll be in touch with you soon, typically within 2 business days.\nThank you for choosing iLaundroid.\nHave a wonderful day!",
//     };
//     Object.assign(formData, responseData);
//     console.log(formData);
//     try {
//       const response = await axios.post(url, formData);
//       // console.log(response.data);
//     } catch (error) {
//       // console.error('Error:', error);
//     }
//   }

//   constructor(private http: HttpClient) {}
//   postData(data: any) {
//     const url = environment.api;
//     this.http.post(url, data).subscribe(
//       (res) => {
//         // console.log(res);
//       },
//       (err) => {
//         // console.log('Error: ', err);
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    window.location.reload();
  }

  constructor(private http: HttpClient, private router: Router) {}
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
    window.location.reload();
    this.router.navigate(['']);
  }
}
