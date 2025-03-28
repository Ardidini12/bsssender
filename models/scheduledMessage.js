module.exports = (sequelize, DataTypes) => {
  const ScheduledMessage = sequelize.define('ScheduledMessage', {
    contactName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactSurname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'sent', 'failed'),
      defaultValue: 'pending'
    },
    scheduledTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sentTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  });

  return ScheduledMessage;
};
