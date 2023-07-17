import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { USER_DAO, ROLE_DAO, PERMISSION_DAO, USER_ROLE_DAO, ROLE_PERMISSION_DAO } from 'src/constants';
import { Permission, Role, RolePermission, User, UserRole } from './roles';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [
    RolesService,
  ],
  controllers: [RolesController],
  imports: [DbModule]

})
export class RolesModule { }
