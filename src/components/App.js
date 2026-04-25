import { AppBar } from "components/AppBar/AppBar";
import { Layout } from "components/Layout/Layout";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
