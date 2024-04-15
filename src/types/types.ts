export interface IUser {
  id: number;
  username: string;
  email: string;
  birthdate: string;
  favorite_food_ids: number[];
  photo_id: number | null;
}

export interface IGetUsersParams {
  page: number;
  "per-page": number;
  // fields: string | null;
  expand: string;
  sort: string;
  "UserSearch[id]": string;
  "UserSearch[username]": string;
  "UserSearch[email]": string;
  "UserSearch[birthdateStart]": string;
  "UserSearch[birthdateEnd]": string;
}

export interface IParamsState extends IGetUsersParams {}

export interface ITableHeaderNames {
  name: string;
  nameEn: string;
}

export interface IBodyUserPost {
  username: string;
  email: string;
  selectedFoods: number[];
  birthdate: string;
  image: File | null;
}
