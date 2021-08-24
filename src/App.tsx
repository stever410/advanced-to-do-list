import { Layout } from 'antd';
import React from 'react';

import './App.scss';
import DashboardHeader from './components/DashboardHeader';
import Navbar from './components/Navbar';
import TaskTable from './components/TaskTable';

const { Content } = Layout;

const App: React.FC = () => (
  <Layout style={{ height: '100vh' }}>
    <Navbar />
    <Layout>
      <Content className="bg-white px-32 py-16">
        <DashboardHeader />
        <TaskTable />
      </Content>
      {/* <Sider className="bg-white">Sider</Sider> */}
    </Layout>
    {/* <Footer>Footer</Footer> */}
  </Layout>
);

export default App;
