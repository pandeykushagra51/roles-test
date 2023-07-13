import cuid from 'cuid';
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModel } from './UserModel';

@Table({
  tableName: 'permission',
  timestamps: true
})
export class PermissionModel extends Model<PermissionModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.STRING,
    defaultValue: cuid,
  })
  id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @Column({ allowNull: false, type: DataType.STRING })
  category: string

  @Column({ allowNull: false, type: DataType.STRING })
  description: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataType.STRING })
  createdBy: string;
}
