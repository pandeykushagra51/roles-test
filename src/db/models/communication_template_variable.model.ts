import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { CommunicationTemplateModel } from './CommunicationTemplateModel';

@Table({
  tableName: 'communication_template_variable',
  timestamps: true
})
export class CommunicationTemplateVariableModel extends Model<CommunicationTemplateVariableModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.STRING,
    defaultValue: uuidv4,
  })
  id: string;

  @ForeignKey(() => CommunicationTemplateModel)
  @Column({ allowNull: false, type: DataType.STRING })
  communication_template_id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  template_variable_name: string;

  @Column({ allowNull: false, type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date;

  @Column({ allowNull: false, type: DataType.DATE, defaultValue: DataType.NOW })
  updated_at: Date;
}
