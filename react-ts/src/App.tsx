import React, { FunctionComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Counter } from "./Counter";

export const App: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("app.link", { name: "React" })}
        </a>
      </header>
    </div>
  );
};
