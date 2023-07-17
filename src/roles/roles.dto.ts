import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    MaxLength,
    IsArray,
    IsOptional,
    IsEnum
} from 'class-validator';
import { Permission, PermissionCategory } from './roles';

export class CreatePermissionDto {

    @ApiProperty()
    @IsString()
    @MaxLength(30)
    permissionName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    description: string;

    @ApiProperty()
    @IsEnum(PermissionCategory)
    @MaxLength(30)
    department: PermissionCategory;
}

export class CreateRoleDto {

    @ApiProperty()
    @IsString()
    @MaxLength(30)
    roleName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    parent: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    description: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    permissions: Permission[];
}

export class GetPernissionsDto {
    @ApiProperty()
    @IsString()
    roleID: string;
}