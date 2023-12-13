import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db'

class User extends Model {
    public _no!: number;
    public userid!: string;
    public userpassword!: string;
    public username!: string;
}

User.init(
    {
        _no: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userpassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        modelName: 'user',
        tableName: 'user',
        sequelize,
    }
);

export default User;
