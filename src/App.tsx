import { lazy, Suspense } from "react";
import "./App.css";
import CursorTrail from "./components/CursorTrail";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const LoadingFallback = () => (
  <div style={{ 
    width: "100%", 
    height: "100vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#0b080c",
    color: "white"
  }}>
    Loading...
  </div>
);

const App = () => {
  return (
    <>
      <CursorTrail />
      <LoadingProvider>
        <Suspense fallback={<LoadingFallback />}>
          <MainContainer>
            <Suspense fallback={<LoadingFallback />}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
