export interface loginRequest{
  email: string,
  password: string
}
export interface loginResponse{
  success: boolean,
  token: string,
  user: User
}
export interface User {
  id: string,
  name: string,
  email: string
}
