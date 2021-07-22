import mongoose from 'mongoose';

export const MONO_DB_CONNECTION_STRING =
  process.env.MONGO_DB || 'mongodb://localhost/nest';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONO_DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
  },
];
