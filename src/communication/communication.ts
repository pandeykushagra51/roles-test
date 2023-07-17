import { ApiProperty } from '@nestjs/swagger';
import { CommunicationTemplateModel } from 'src/db/models/CommunicationTemplateModel';
import { CommunicationBannerVariableModel } from 'src/db/models/communication_banner_variable.model';
import { CommunicationTemplateVariableModel } from 'src/db/models/communication_template_variable.model';

export class CommunicationTemplate {
  @ApiProperty()
  id: string;

  @ApiProperty()
  templateType: string;

  @ApiProperty()
  templateName: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  distributorVendor: string;

  @ApiProperty()
  distributorId: string;

  @ApiProperty()
  templateApprover: string;

  @ApiProperty()
  approverTemplateId: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  constructor(inputs: {
    id?: string,
    templateType?: string,
    templateName?: string,
    summary?: string,
    distributorVendor?: string,
    distributorId?: string,
    templateApprover?: string,
    approverTemplateId?: string,
    category?: string,
    createdAt?: Date,
    updatedAt?: Date,
  }) {
    this.id = inputs.id;
    this.templateType = inputs.templateType;
    this.templateName = inputs.templateName;
    this.summary = inputs.summary;
    this.distributorVendor = inputs.distributorVendor;
    this.distributorId = inputs.distributorId;
    this.templateApprover = inputs.templateApprover;
    this.approverTemplateId = inputs.approverTemplateId;
    this.category = inputs.category;
    this.created_at = inputs.createdAt;
    this.updated_at = inputs.updatedAt;
  }

  static fromModel(template: CommunicationTemplateModel): CommunicationTemplate {
    return new this(template);
  }
}

export class CommunicationTemplateVariable {
  @ApiProperty()
  id: string;

  @ApiProperty()
  communicationTemplateId: string;

  @ApiProperty()
  templateVariableName: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(inputs: {
    id?: string,
    communicationTemplateId?: string,
    templateVariableName?: string,
    createdAt?: Date,
    updatedAt?: Date,
  }) {
    this.id = inputs.id;
    this.communicationTemplateId = inputs.communicationTemplateId;
    this.templateVariableName = inputs.templateVariableName;
    this.createdAt = inputs.createdAt;
    this.updatedAt = inputs.updatedAt;
  }

  static fromModel(variable: CommunicationTemplateVariableModel): CommunicationTemplateVariable {
    return new this(variable);
  }
}

export class CommunicationBannerVariable {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  communicationTemplateId: string;

  @ApiProperty()
  bannerVariableName: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(inputs: {
    id?: string,
    communicationTemplateId?: string,
    bannerVariableName?: string,
    createdAt?: Date,
    updatedAt?: Date,
  }) {
    this.id = inputs.id;
    this.communicationTemplateId = inputs.communicationTemplateId;
    this.bannerVariableName = inputs.bannerVariableName;
    this.createdAt = inputs.createdAt;
    this.updatedAt = inputs.updatedAt;
  }

  static fromModel(variable: CommunicationBannerVariableModel): CommunicationBannerVariable {
    return new this(variable);
  }
}
