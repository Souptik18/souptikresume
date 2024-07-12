import React, { createContext, useState } from "react";
import Layout from "./components/Layout";
import AnimatedCursor from "react-animated-cursor";

export const context = createContext();

export default function App() {
  const [Theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    const newTheme = !Theme;
    document.body.style.backgroundColor = newTheme ? "#121222" : "white";
  };

  return (
    <context.Provider
      value={{
        Theme,
        setTheme,
        toggleTheme,
      }}
    >
      <Layout />
      <AnimatedCursor
        innerSize={8}
        outerSize={24}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "cyan",
        }}
        outerStyle={{
          border: "1px solid cyan",
        }}
      />
    </context.Provider>
  );
}
