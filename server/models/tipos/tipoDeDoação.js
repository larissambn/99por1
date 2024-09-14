import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import DonationCategory from '../grupos/grupoDeDoação';

// Define the DonationType model
const DonationType = sequelize.define('DonationType', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  DonationType_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: DonationCategory,
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'donation_types',
});

export default DonationType;
