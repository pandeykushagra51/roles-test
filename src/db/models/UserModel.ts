import cuid from 'cuid';
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
  tableName: 'user',
  timestamps: true
})
export class UserModel extends Model<UserModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.STRING,
    defaultValue: cuid,
  })
  id: string;

  @Column({ unique: true, allowNull: false, type: DataType.STRING })
  userId: string;

  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @Column({ allowNull: false, type: DataType.NUMBER })
  age: Number;
}
