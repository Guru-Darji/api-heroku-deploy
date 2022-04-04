const Location = require('./location')
const Traveller = require('./travellers')
const Trip = require('./trip')


Location.belongsToMany(Traveller, {
  through: {
    model:Trip,
    unique:false
  },
});

Trip.belongsToMany(Location, {
  through: {
    model:Trip,
    unique:false
  },
});

Trip.belongsTo(Location, {
  foreignKey: 'location_id'
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id'
});

module.exports = {Location, Traveller, Trip};