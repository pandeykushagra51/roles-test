import cuid from 'cuid';
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModel } from './UserModel';
import { PermissionModel } from './PermissionModel';
import { RoleModel } from './RoleModel';

@Table({
  tableName: 'role_permission',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['roleId', 'permissionId']
    }
  ],
})
export class RolePermissionModel extends Model<RolePermissionModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.STRING,
    defaultValue: cuid,
  })
  id: string;

  @ForeignKey(() => PermissionModel)
  @Column({ allowNull: false, type: DataType.STRING })
  permissionId: string

  @ForeignKey(() => RoleModel)
  @Column({ allowNull: false, type: DataType.STRING })
  roleId: string

}
