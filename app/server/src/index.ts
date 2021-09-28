import { environment } from 'src/config/environment';
import { startServer } from 'src/server';

const port = environment.LISTENER_PORT;

export async function startApp(): Promise<void> {
  const { app, server } = await startServer();
  app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  })
}

startApp();