import { Header } from "src/layouts/AppLayout/Header";

export const AppLayout = (props) => {
  return (
    <div className="flex flex-col items-center px-2 min-h-screen mx-auto max-w-2xl">
      <Header />
      {props.children}
    </div>
  );
};
