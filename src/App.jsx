import { createBrowserRouter, RouterProvider } from "react-router"
import StartPageLayout from "./layouts/StartPageLayout";
import InGameLayout from "./layouts/InGameLayout";
import StartPage from "./pages/StartPage";
// import IconsFour from "./pages/IconsFour";
// import IconsSix from "./pages/IconsSix";
// import NumbersFour from "./pages/NumbersFour";
// import NumbersSix from "./pages/NumbersSix";
import GamePage from "./pages/GamePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/", Component: StartPageLayout,
      children: [
        { index: true, Component: StartPage }
      ]
    },
    {
      path: "/game", Component: InGameLayout,
      children: [
        // { path: "icons-four", Component: IconsFour },
        // { path: "icons-six", Component: IconsSix },
        // { path: "numbers-four", Component: NumbersFour },
        // { path: "numbers-six", Component: NumbersSix },
        { path: ":theme/:gridSize", Component: GamePage }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
