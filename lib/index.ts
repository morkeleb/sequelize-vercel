import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
  } from 'sequelize';
  

   interface ProjectAttributes {
    id: string;
    title: string;
  }
  
  interface ProjectCreationAttributes extends Optional<ProjectAttributes, 'id'> {}

  export class Project
  extends Model<ProjectAttributes, ProjectCreationAttributes>
  implements ProjectAttributes {
  id!: string;
  title: string;


  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

  
  const sequelize = new Sequelize(
    
       {
          database: process.env.DBNAME,
          dialect: 'postgres',
          username: process.env.DBUSER,
          password: process.env.DBPASSWORD,
          host: process.env.DBHOST,
        }
      
  );
  
  Project.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      title: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'projects',
      modelName: 'Project',
    },
  );
  
  
  
  export default sequelize;
  