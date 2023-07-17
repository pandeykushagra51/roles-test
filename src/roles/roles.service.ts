import { Inject, Injectable } from '@nestjs/common';
import { PERMISSION_DAO, ROLE_DAO, ROLE_PERMISSION_DAO, SEQUELIZE, USER_ROLE_DAO } from 'src/constants';
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
    @Inject(SEQUELIZE) private readonly sequlizeInstance: Sequelize
  ) { }

  async createRole(createRoleDto: CreateRoleDto) {
    const transaction = await this.sequlizeInstance.transaction();
    const userId = 'test-user'
    const roleModel = await this.roleRepo.create(
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
    const role = Role.fromModel(roleModel);
    this.attachPermissionsToRole(role, createRoleDto.permissions, userId, transaction);
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

  async attachPermissionsToRole(
    role: Role,
    permissions: Permission[],
    userId: string,
    transaction?: any,
  ) {
    this.rolePermissionRepo.bulkCreate(
      permissions.map((permission) => {
        return new RolePermission({
          roleId: role.id,
          permissionId: permission.id,
          roleName: role.name,
          permissionName: permission.name,
          createdBy: userId,
        })
      }),
      {
        transaction: transaction,
      },
    );

  }

  async listAllAncestors(roleId: string) {
    const recursiveQuery = `
      WITH RECURSIVE role_ancestors AS (
        SELECT id, parentId, name
        FROM roles
        WHERE id = ${roleId}

        UNION ALL

        SELECT r.id, r.parentId, r.name
        FROM roles r
        JOIN role_ancestors ra ON r.id = ra.parentId
      )
      SELECT *
      FROM role_ancestors;
    `;

    this.sequlizeInstance.query(recursiveQuery)
      .then(results => {
        // Process the query results
        console.log(results);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });

  }

  async hasPermission(roles: Role[], permission: string): Promise<boolean> {
    const permissions = roles.map(async (role) => {
      const hasPermission = await this.rolePermissionRepo.findAll({
        where: {
          roleId: role.id
        },
        include: [{
          model: PermissionModel,
          required: true,
          attributes: ['name']
          // use sequalize association  https://sequelize.org/docs/v6/core-concepts/assocs/
        }]
      })
    })

    if (permission.includes(permission))
      return true;
    return false;
  }

}
