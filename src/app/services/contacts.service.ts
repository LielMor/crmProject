import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactsArray = [
    {
      name: 'Eileen Russell',
      email: 'eileenrussell@xumonk.com',
      birthday: '09/08/2020',
      phones: '+1 (824) 598-2328',
    },
    {
      name: 'Francis Mckay',
      email: 'francismckay@xumonk.com',
      birthday: '15/01/2014',
      phones: 'No phones',
    },
    {
      name: 'Jewell Schultz',
      email: 'jewellschultz@xumonk.com',
      birthday: '03/07/2020',
      phones: '+1 (932) 538-2367 +1 (949) 503-2184',
    },
    {
      name: 'Goodman Hunter',
      email: 'goodmanhunter@xumonk.com',
      birthday: '22/02/2016',
      phones: 'No phones',
    },
    {
      name: 'Beck Webb',
      email: 'beckwebb@xumonk.com',
      birthday: '24/08/2019',
      phones: '+1 (986) 566-2317 +1 (950) 438-3960 +1 (997) 562-3636',
    },
    {
      name: 'Tabitha Combs',
      email: 'tabithacombs@xumonk.com',
      birthday: '24/03/2018',
      phones: '+1 (897) 437-2473',
    },
    {
      name: 'Schmidt Jennings',
      email: 'schmidtjennings@xumonk.com',
      birthday: '24/09/2014',
      phones: 'No phones',
    },
    {
      name: 'Bullock Martinez',
      email: 'bullockmartinez@xumonk.com',
      birthday: '18/05/2016',
      phones: '+1 (889) 424-3036 +1 (819) 403-2637',
    },
    {
      name: 'Reva Stafford',
      email: 'revastafford@xumonk.com',
      birthday: '09/08/2020',
      phones: '+1 (929) 465-2033 +1 (952) 546-2373',
    },
    {
      name: 'Franco Mccray',
      email: 'francomccray@xumonk.com',
      birthday: '02/03/2020',
      phones: '+1 (900) 587-3989',
    },
  ];
  constructor() {}

  getContacts() {
    return this.contactsArray;
  }
}
