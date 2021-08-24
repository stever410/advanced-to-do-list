import { Layout, Space, Tag, Typography } from 'antd';
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
      <Content className="bg-white px-12 py-8">
        <DashboardHeader />
        <div className="mt-4">
          <Typography.Title level={3} style={{ margin: 0 }}>
            On hold
          </Typography.Title>
          <TaskTable />
        </div>
        <div className="mt-4">
          <Space align="center">
            <Typography.Title level={3} style={{ margin: 0 }}>
              Completed
            </Typography.Title>
            <Tag color="red" style={{ borderRadius: 8.5, border: 'none' }}>
              Inactive
            </Tag>
          </Space>
          <TaskTable />
        </div>
      </Content>
      {/* <Sider className="bg-white">Sider</Sider> */}
    </Layout>
    {/* <Footer>Footer</Footer> */}
  </Layout>
);

export default App;
