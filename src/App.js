import { Layout, theme } from "antd";
import AppName from "./components/AppName";
import Tasks from "./components/Tasks";

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <AppName />
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Tasks />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Todo App ©2023 Created by Jennifer Borlenghi de Brito
      </Footer>
    </Layout>
  );
}

export default App;
