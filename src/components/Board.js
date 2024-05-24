import React, { useState } from "react";

function Board({ name, gameDiscount }) {
  const num = gameDiscount[gameDiscount.length - 1] || 1;
  const sum = gameDiscount.reduce((a, b) => a + b, 0);

  return (
    <div className="Board">
      <h2>{name}</h2>
      <>{num}</>
      <>{sum}</>
      <p>{gameDiscount.join(",")}</p>
    </div>
  );
}
