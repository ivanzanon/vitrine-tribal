export interface LoginRequest {
    username: string,
    password: string
}

export interface LoginResponse {
    auth: boolean;
    idUser: string;
    token: string;
  }
