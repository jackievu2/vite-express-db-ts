import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import "reflect-metadata"; //for typeORM

function App(): JSX.Element {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

export default App;
