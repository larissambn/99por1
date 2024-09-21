import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config.js';

// Define the DonationCategory model
const DonationCategory = sequelize.define('DonationCategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'donation_categories',
});

export default DonationCategory;