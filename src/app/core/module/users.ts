export class User {
  fullName: string;
  email: string;
  username: string;
  region: string;
  password: string;
  role: string;
  constructor(
    fullName: string,
    email: string,
    username: string,
    region: string,
    password: string,
    role: string
  ) {
    this.fullName = fullName;
    this.email = email;
    this.username = username;
    this.region = region;
    this.password = password;
    this.role = role;
  }
}
