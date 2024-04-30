import { Module } from 'danet/mod.ts';
import { AuthController } from '../../services/auth/auth.controller.ts';

@Module({
  controllers: [AuthController],
  imports: [],
})
export class AuthModule {}
