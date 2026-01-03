export interface Theme {
  primary: string;
  secondary: string;
  action: string;
  primaryText: string;
  secondaryText: string;
  actionText: string;
}

export interface Address {
  number?: string;
  street?: string;
  city: string;
  state?: string;
  zipCode?: string;
  country: string;
}
