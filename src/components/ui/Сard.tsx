interface CardProps {
    children: React.ReactNode;
    title?: string;
  }
  
  const Card: React.FC<CardProps> = ({ children, title }) => (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
  
  export default Card;