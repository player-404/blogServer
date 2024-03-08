type fun = (password: string, confirmPassword: string) => boolean;

export interface Rule {
  required?: boolean;
  message?: string;
  rule?: RegExp | fun;
}
