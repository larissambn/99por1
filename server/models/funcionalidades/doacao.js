import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import Elderly from '../usuários/usuario';
import DonationType from '../tipos/tipoDeDoação';

// Define the Donation model
const Donation = sequelize.define('Donation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  elderly_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Elderly,
      key: 'id',
    },
  },
  donationType_id: {
    type: DataTypes.INTEGER,
    references: {
      model: DonationType,
      key: 'id',
    },
  },
  donation_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'Donations',
});

export default Donation;
