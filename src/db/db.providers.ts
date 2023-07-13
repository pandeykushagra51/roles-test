import { Sequelize } from "sequelize-typescript";
import { UserModel } from "./models/UserModel";
import { RoleModel } from "./models/RoleModel";
import { PermissionModel } from "./models/PermissionModel";
import { RolePermissionModel } from "./models/RolePermissionModel";
import { UserRoleModel } from "./models/UserRoleModel";
import { PERMISSION_DAO, ROLE_DAO, ROLE_PERMISSION_DAO, USER_DAO, USER_ROLE_DAO } from "src/constants";

export const dbProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const dbName = process.env.DB_NAME as string;
            const dbUser = process.env.DB_USERNAME as string;
            const dbHost = process.env.DB_HOST;
            const dbDriver = 'mysql';
            const dbPassword = process.env.DB_PASSWORD as string;
            const dbPort = Number(process.env.DB_PORT);
            const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
                host: dbHost,
                dialect: dbDriver,
                port: dbPort,
                // logging: (msg) => Logger.debug(msg),
                pool: {
                    max: 5,
                    min: 1,
                    acquire: 30000,
                    idle: 10000,
                },
            });
            sequelize.addModels([
                UserModel,
                RoleModel,
                PermissionModel,
                RolePermissionModel,
                UserRoleModel,
            ])
            return sequelize;
        }
    }
]

export const spacesProviders = [
    {
        provide: USER_DAO,
        useValue: UserModel,
    },
    {
        provide: ROLE_DAO,
        useValue: RoleModel,
    },
    {
        provide: PERMISSION_DAO,
        useValue: PermissionModel,
    },
    {
        provide: USER_ROLE_DAO,
        useValue: UserRoleModel,
    },
    {
        provide: ROLE_PERMISSION_DAO,
        useValue: RolePermissionModel,
    },
]