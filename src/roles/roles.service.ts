import { Inject, Injectable } from '@nestjs/common';
import { PERMISSION_DAO, ROLE_DAO, ROLE_PERMISSION_DAO, USER_ROLE_DAO } from 'src/constants';
import { PermissionModel } from 'src/db/models/PermissionModel';
import { RoleModel } from 'src/db/models/RoleModel';
import { RolePermissionModel } from 'src/db/models/RolePermissionModel';
import { UserRoleModel } from 'src/db/models/UserRoleModel';
import { CreatePermissionDto, CreateRoleDto } from './roles.dto';
import { Permission, Role, RolePermission } from './roles';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class RolesService {
  constructor(
    @Inject(ROLE_DAO) private roleRepo: typeof RoleModel,
    @Inject(PERMISSION_DAO) private permissionRepo: typeof PermissionModel,
    @Inject(ROLE_PERMISSION_DAO) private rolePermissionRepo: typeof RolePermissionModel,
    @Inject(USER_ROLE_DAO) private userRoleRepo: typeof UserRoleModel,
    @Inject('SEQUELIZE') private readonly sequlizeInstance: Sequelize
  ) { }

  async createRole(createRoleDto: CreateRoleDto) {
    const transaction = await this.sequlizeInstance.transaction();
    const userId = 'test-user'
    const role = await this.roleRepo.create(
      new Role({
        name: createRoleDto.roleName,
        description: createRoleDto.description,
        createdBy: userId,
        parent: createRoleDto.parent,
      }),
      {
        transaction: transaction,
      },
    )

    this.rolePermissionRepo.bulkCreate(
      createRoleDto.permissions.map((permissionId) => {
        return new RolePermission({
          roleId: role.id,
          permissionId: permissionId,
          createdBy: userId,
        })
      }),
      {
        transaction: transaction,
      },
    )

  }

  async createPermission(createPermissionDto: CreatePermissionDto) {
    this.permissionRepo.create(
      new Permission({
        name: createPermissionDto.permissionName,
        description: createPermissionDto.description,
        department: createPermissionDto.department,
      })
    )
  }

}
