import { ApiProperty } from "@nestjs/swagger";

export enum PermissionCategory {
  FINANCE = "FINANCE",
  TECH = "TECH",
  BUSINESS = "BUSINESS",
  CUSTOMER = "CUSTOMER"
}

export class Role {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  parent: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(inputs: {
    id?: string,
    name?: string,
    description?: string,
    createdBy?: string,
    createdAt?: Date,
    updatedAt?: Date,
    parent?: string,
  }) {
    this.id = inputs.id;
    this.name = inputs.name;
    this.createdBy = inputs.createdBy;
    this.description = inputs.description;
    this.createdAt = inputs.createdAt;
    this.updatedAt = inputs.updatedAt;
    this.parent = inputs.parent;
  }

}

export class Permission {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  department: PermissionCategory;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(inputs: {
    id?: string,
    name?: string,
    description?: string,
    department?: PermissionCategory,
    createdBy?: string,
    createdAt?: Date,
    updatedAt?: Date,
  }) {
    this.id = inputs.id;
    this.name = inputs.name;
    this.description = inputs.description;
    this.department = inputs.department;
    this.createdAt = inputs.createdAt;
    this.updatedAt = inputs.updatedAt;
  }

}

export class RolePermission {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  roleId: string;
  @ApiProperty()
  permissionId: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(inputs: {
    id?: string,
    roleId?: string,
    permissionId?: string,
    createdBy?: string,
    createdAt?: Date,
    updatedAt?: Date,
  }) {
    this.id = inputs.id;
    this.roleId = inputs.roleId;
    this.permissionId = inputs.permissionId;
    this.createdAt = inputs.createdAt;
    this.updatedAt = inputs.updatedAt;
    this.createdBy = inputs.createdBy;
  }
}