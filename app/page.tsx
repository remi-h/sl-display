'use client'
import React, { useEffect, useState } from "react";
import { Departures } from "./Components/Departures";

const Home: React.FC = () => {
  return (
    <main className="p-24 text-md">
      Train from Bergshamra
      <Departures />
    </main>
  );
}

export default Home;