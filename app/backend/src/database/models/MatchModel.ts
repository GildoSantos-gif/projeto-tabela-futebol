import { DataTypes, Model } from 'sequelize';
import db from '.';
import Team from './TeamModel';

class Match extends Model {
  public id: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeams: number;

  public awayTeamGoals: number;

  public inProgress: boolean;
}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    homeTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'matches',
    timestamps: false,
    underscored: true,
  },
);

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
