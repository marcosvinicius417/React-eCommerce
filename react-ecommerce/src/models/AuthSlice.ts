export interface AuthSlice {
  isLoggedIn: boolean;
  modalOpen: boolean;
  username: string;
}

export interface AuthLogin {
  access_token: string;
}

export interface ErrorLogin {
  message: string | string[];
}