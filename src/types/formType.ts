type fun = (password: string, confirmPassword: string) => boolean;

export interface Rule {
  required?: boolean;
  message?: string;
  requiredErrorMessage?: string;
  rule?: RegExp | fun;
  errTip?: string;
}
