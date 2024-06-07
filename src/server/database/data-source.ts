import { DataSource } from "typeorm";
import { SampleEntity } from "./entities/sampleTable";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "ChangeMe123",
  database: "SampleDatabase",
  synchronize: true,
  logging: true,
  entities: [SampleEntity],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
