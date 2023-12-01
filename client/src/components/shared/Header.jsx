const Header = ({ title, navbar }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {navbar}
    </header>
  );
};

export { Header };
