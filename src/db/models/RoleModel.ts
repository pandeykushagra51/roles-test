import cuid from 'cuid';
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModel } from './UserModel';

@Table({
  tableName: 'role',
  timestamps: true
})
export class RoleModel extends Model<RoleModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.STRING,
    defaultValue: cuid,
  })
  id: string;

  @Column({ unique: true, allowNull: false, type: DataType.STRING })
  name: string;

  @Column({ allowNull: false, type: DataType.STRING })
  description: string;

  @Column({ allowNull: true, type: DataType.STRING })
  parentId: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataType.STRING })
  createdBy: string;
}
