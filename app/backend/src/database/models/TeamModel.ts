import { DataTypes, Model } from 'sequelize';
import db from '.';
// import Match from './Match';

class Team extends Model {
  public id: number;

  public teamName: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: 'teams',
  timestamps: false,
});

/*
Team.hasMany(Match, {
  foreignKey: 'homeTeam', as: 'teamHome',
});
Team.hasMany(Match, {
  foreignKey: 'awayTeam', as: 'teamAway',
});
*/

export default Team;
