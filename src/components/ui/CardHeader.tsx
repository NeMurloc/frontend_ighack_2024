// src/components/ui/CardHeader.tsx
import React from 'react';

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <div style={{ paddingBottom: '8px', borderBottom: '1px solid #eee', marginBottom: '16px' }}>
    {children}
  </div>
);

export default CardHeader;
