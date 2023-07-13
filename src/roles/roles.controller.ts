import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePermissionDto, CreateRoleDto } from './roles.dto';

@Controller('roles')
export class RolesController {

    @Get('')
    getAllRoles() {

    }

    @Post('')
    createRole(@Body() createRoleDto: CreateRoleDto) {

    }

    @Get('/:id')
    getRole() {

    }

    @Get('/:roleID/permissions')
    getAllPermissionsofRole(@Param() getPermissionsDto) {

    }

    @Post('/permission')
    addPermission(@Body() createPermissionDto: CreatePermissionDto) {

    }


}
