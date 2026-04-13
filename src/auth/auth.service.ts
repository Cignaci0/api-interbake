import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import * as express from 'express';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsuarioService,
    private jwtService: JwtService,
  ) { }


  async signIn(
    username: string,
    pass: string,
    req: express.Request
  ): Promise<{ token: string, username: string, perfil_id: number, num_ficha: string, profile: string }> {

    const user = await this.usersService.searchActiveUser(username);

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    if (user.empleado && user.empleado.contrato_indefinido === false && user.empleado.fecha_fin_contrato) {
      const hoy = new Date()
      hoy.setHours(0, 0, 0, 0)
      const finContrato = new Date(user.empleado.fecha_fin_contrato)
      finContrato.setHours(0, 0, 0, 0)

      if (hoy > finContrato) {
        throw new UnauthorizedException('Su contrato se encuentra vencido. No puede iniciar sesión.');
      }
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = {
      sub: user.usuario_id,
      username: user.username,
      profile: user.perfil_id,
      num_ficha: user.empleado?.num_ficha,
      nombre_completo: user.nombres + ' ' + user.apellido_paterno + ' ' + user.apellido_materno
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      username: user.username,
      perfil_id: user.perfil_id,
      num_ficha: user.empleado?.num_ficha || '',
      profile: user.perfil_id.toString()
    };
  }
}
