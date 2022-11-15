import { UserRolesEnum } from '../enums';
import { UserDB } from '../interfaces';

export let USERS_DB: UserDB[] = [
  {
    name: 'Juan David',
    lastName: 'Fernandez Moreno',
    email: 'judfernandezmo@unal.edu.co',
    password: 'admin123',
    type: UserRolesEnum.admin,
  },
  {
    name: 'Sebastian',
    lastName: 'Lopez Mazo',
    email: 'selopez@unal.edu.co',
    password: 'barber123',
    type: UserRolesEnum.barber,
  },
  {
    name: 'Arturo Alejandro',
    lastName: 'Daza',
    email: 'aadazaa@unal.edu.co',
    password: 'client123',
    type: UserRolesEnum.client,
  },
];
