import React from "react";

// Banderas dibujadas en SVG: se ven igual en Windows, Mac, Android e iOS
// (los emojis de bandera en Windows aparecen como letras "ES" / "US").

export const BanderaEspana = ({ className = "" }) => (
  <svg viewBox="0 0 30 20" className={className} role="img" aria-label="España">
    <rect width="30" height="20" fill="#AA151B" />
    <rect y="5" width="30" height="10" fill="#F1BF00" />
  </svg>
);

export const BanderaEEUU = ({ className = "" }) => {
  const alto = 20 / 13;
  const franjasBlancas = [1, 3, 5, 7, 9, 11];
  const estrellas = [];
  [1.8, 5.4, 9].forEach((y) => {
    [2.2, 5.6, 9, 12.4].forEach((x) => estrellas.push({ x, y }));
  });

  return (
    <svg
      viewBox="0 0 38 20"
      className={className}
      role="img"
      aria-label="Estados Unidos"
    >
      <rect width="38" height="20" fill="#B22234" />
      {franjasBlancas.map((i) => (
        <rect key={i} y={i * alto} width="38" height={alto} fill="#FFFFFF" />
      ))}
      <rect width="15.2" height={alto * 7} fill="#3C3B6E" />
      {estrellas.map((e, i) => (
        <circle key={i} cx={e.x} cy={e.y} r="0.55" fill="#FFFFFF" />
      ))}
    </svg>
  );
};
