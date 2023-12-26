import { Table, Title } from 'components';

export const Default = () => {
  return (
    <div className="container min-h-screen h-full mx-auto flex flex-col justify-center px-5 py-5">
      <Title />
      <Table />
    </div>
  );
};
