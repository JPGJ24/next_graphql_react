interface Users {
  username: string;
  name: string;
  lastname: string;
  password:string;
  img:any;

}

interface UsersGmail {
  name: string;
  imageUrl:any;
  clienteId:any;
}

interface UsersFacebook {
  name: string;
  picture:any;
  data:any;
  url:any;
  status:any;
}

export type {
  Users,
  UsersGmail,
  UsersFacebook
}