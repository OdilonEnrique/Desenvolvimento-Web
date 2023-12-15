import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header/>

      <main>
        <Outlet />
      </main>

      <footer>
        @Reprograma Jucás
      </footer>

    </>
  )
}