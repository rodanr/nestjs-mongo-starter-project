export class CreateUserDto {
  readonly username: string;

  readonly firstName: string;

  readonly middleName?: string;

  readonly lastName: string;

  readonly email: string;

  readonly password: string;
}
