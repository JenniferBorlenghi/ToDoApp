import { Layout, theme } from "antd";
import AppHeader from "./components/AppHeader";
import Tasks from "./components/Tasks";

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <AppHeader />
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
      </Footer>
    </Layout>
  );
}

export default App;
