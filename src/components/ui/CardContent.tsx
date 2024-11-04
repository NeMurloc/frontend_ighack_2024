// src/components/ui/CardContent.tsx
import React from 'react';

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <div style={{ padding: '16px' }}>
    {children}
  </div>
);

export default CardContent;
