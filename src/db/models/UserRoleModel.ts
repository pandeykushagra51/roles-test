import cuid from 'cuid';
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModel } from './UserModel';
import { RoleModel } from './RoleModel';

@Table({
  tableName: 'user_role',
  timestamps: true
})
export class UserRoleModel extends Model<UserRoleModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.STRING,
    defaultValue: cuid,
  })
  id: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataType.STRING })
  userId: string

  @ForeignKey(() => RoleModel)
  @Column({ allowNull: false, type: DataType.STRING })
  roleId: string
}
