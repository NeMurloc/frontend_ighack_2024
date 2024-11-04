// src/components/ui/CardTitle.tsx
import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
    {children}
  </h3>
);

export default CardTitle;
