import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';

// check if string is a valid email
function isEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!isEmail(email)) {
      throw new UnauthorizedException();
    }

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }

  async signIn(email: string, password: string) {
    const user = await this.validateUser(email, password);
    return {
      access_token: user.email,
    };
  }
}
