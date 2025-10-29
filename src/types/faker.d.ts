declare module '@faker-js/faker' {
  export const faker: {
    string: {
      uuid(): string;
      alphanumeric(length: number): string;
      numeric(length: number): string;
    };
    person: {
      firstName(): string;
      lastName(): string;
      fullName(): string;
      jobTitle(): string;
      bio(): string;
      sex(): string;
    };
    internet: {
      email(): string;
      userName(): string;
      password(): string;
      url(): string;
      domainName(): string;
      ip(): string;
      ipv6(): string;
      userAgent(): string;
      mac(): string;
    };
    phone: {
      number(): string;
    };
    date: {
      birthdate(options?: { min?: number; max?: number; mode?: string }): Date;
      past(options?: { years?: number }): Date;
      future(): Date;
      recent(): Date;
      soon(): Date;
      month(): string;
      weekday(): string;
    };
    location: {
      streetAddress(): string;
      city(): string;
      state(): string;
      zipCode(): string;
      country(): string;
      countryCode(): string;
      latitude(): number;
      longitude(): number;
      timeZone(): string;
    };
    company: {
      name(): string;
      catchPhrase(): string;
      buzzPhrase(): string;
      buzzNoun(): string;
    };
    commerce: {
      department(): string;
      productName(): string;
      price(): string;
      productDescription(): string;
      productMaterial(): string;
    };
    finance: {
      accountNumber(): string;
      accountName(): string;
      iban(): string;
      bic(): string;
      creditCardNumber(): string;
      creditCardCVV(): string;
      amount(): string;
      currencyCode(): string;
      transactionType(): string;
    };
    lorem: {
      word(): string;
      words(count?: number): string;
      sentence(): string;
      sentences(count?: number): string;
      paragraph(): string;
      paragraphs(count?: number): string;
    };
    color: {
      human(): string;
    };
    number: {
      int(options?: { min?: number; max?: number }): number;
    };
  };
}
