'use client'
import React, { useEffect, useState } from "react";
import { VersionLabel } from "./Components/VersionLabel";
import { Departures } from "./Components/Departures";
import { Settings } from "./Components/Settings";

const Home: React.FC = () => {
  return (
    <main className="p-24 text-md">
      Departures from Bergshamra:
      <Departures forecastTime={60} />
      <VersionLabel />
      <Settings/>
    </main>
  );
}

export default Home;