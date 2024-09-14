import { DataTypes } from 'sequelize';
import sequelize from '.././config/db.config';

// Define the Location model
const Location = sequelize.define('Location', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING,
    //   allowNull: false, (Devo colocar se o idoso pode trabalhar em mais de um bairro?)
  },
}, {
  timestamps: false,
  tableName: 'locations',
});

export default Location;
