import Clubs from './clubs';
import Players from './players';

Clubs.belongsTo(Players, { foreignKey: 'club_id', as: 'playersclubs' });

Players.hasMany(Clubs, {
  sourceKey: 'club_id',
  foreignKey: 'club_id',
  as: 'clubsplayers', // this determines the name in `associations`!
});
