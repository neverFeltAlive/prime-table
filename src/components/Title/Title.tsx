import './Title.scss';

export const Title = () => {
  return (
    <div className="title-container">
      <h1>Table Component</h1>
      <h3 className="title__subtitle">
        made with{' '}
        <a className="title__subtitle-link" href="https://primereact.org/">
          PrimeReact
        </a>
      </h3>
    </div>
  );
};
