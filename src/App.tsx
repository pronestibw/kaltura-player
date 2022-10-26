import * as React from "react";
import { useState } from "react";
import "./styles.css";
import { EditorPage } from "./components/editor-page";
import { ConfigForm } from "./components/config-form";
import { PlayerBundleConfig } from "./kaltura-player";
import { EntriesConfig } from "./components/player-container";
import { Instructions } from "./components/instructions";

const defaultPlayerConfig: PlayerBundleConfig = {
  bundlerUrl: "https://cdnapisec.kaltura.com",
  partnerId: "4900233",
  ks: "",
  uiConfId: "51188803"
};

const defaultEntriesConfig: EntriesConfig = {
  entryId: "1_2qf5wm4c",
  alternateEntryId: "1_2qf5wm4c"
};

export default function App() {
  const [playerConfig, setPlayerConfig] = useState<PlayerBundleConfig | null>(
    defaultPlayerConfig
  );
  const [entriesConfig, setEntriesConfig] = useState<EntriesConfig>(
    defaultEntriesConfig
  );

  return (
    <div className="App">
      {playerConfig && entriesConfig && entriesConfig.entryId ? (
        <>
          <h1>Kaltura Player V7 - Dashboard</h1>
          <EditorPage
            playerConfig={playerConfig}
            entriesConfig={entriesConfig}
          />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
