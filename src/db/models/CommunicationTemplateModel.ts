import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { CommunicationTemplateVariableModel } from './communication_template_variable.model';
import { CommunicationBannerVariableModel } from './communication_banner_variable.model';

@Table({
  tableName: 'communication_template',
  timestamps: true
})
export class CommunicationTemplateModel extends Model<CommunicationTemplateModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.STRING,
    defaultValue: uuidv4,
  })
  id: string;

  @Column({ allowNull: false, type: DataType.ENUM('Email', 'SMS', 'WhatsApp') })
  templateType: string;

  @Column({ allowNull: false, type: DataType.STRING(50), validate: { notEmpty: true } })
  templateName: string;

  @Column({ type: DataType.STRING(250) })
  summary: string;

  @Column({ type: DataType.ENUM('Moengage', 'Yellow Msg') })
  distributorVendor: string;

  @Column({ allowNull: false, type: DataType.STRING, unique: true })
  distributorId: string;

  @Column({ type: DataType.ENUM('Meta', 'DLT') })
  templateApprover: string;

  @Column({ allowNull: false, type: DataType.STRING })
  approverTemplateId: string;

  @Column({ type: DataType.ENUM('Welcome', 'KYC', 'Order', 'Referral', 'IFA') })
  category: string;

  @Column({ allowNull: false, type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date;

  @Column({ allowNull: false, type: DataType.DATE, defaultValue: DataType.NOW })
  updated_at: Date;

  @HasMany(() => CommunicationTemplateVariableModel)
  communicationTemplateVariables: CommunicationTemplateVariableModel[];

  @HasMany(() => CommunicationBannerVariableModel)
  communicationBannerVariables: CommunicationBannerVariableModel[];
}
