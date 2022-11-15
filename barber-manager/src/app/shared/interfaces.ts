import { DialogTypeEnum, UserRolesEnum } from './enums';

export class LoginDialogData {
  dialogType?: DialogTypeEnum;
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export class UserDB {
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  type?: UserRolesEnum;
}

export class WebApiResponse {
  statusCode?: number;
  message?: string;
}

export class RecommendedDB {
  iconUrl?: string;
  name?: string;
  rol?: string;
  focusedOn?: string;
  promotionImage?: string;
  municipallity?: string;
  hood?: string;
  cutPrice?: string;
  sessionPrice?: string;
  inSite?: boolean;
  inHome?: boolean;
  homePrice?: string;
}

export class BarberDB extends RecommendedDB {}

export class SaloonsDB extends RecommendedDB {}

export class TatooDB extends RecommendedDB {}

export class SpaDB extends RecommendedDB {}
