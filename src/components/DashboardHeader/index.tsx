import React from 'react';
import { Button, Typography } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

const { Title } = Typography;

const DashboardHeader: React.FC = () => (
  <div className="d-flex">
    <Title className="mr-20" level={2}>
      You’ve got <span className="pink-text">7 tasks</span> today
    </Title>
    <Button
      className="button button--secondary"
      size="large"
      style={{ fontSize: 14 }}
      icon={<PlusSquareOutlined />}
    >
      Add new
    </Button>
  </div>
);

export default DashboardHeader;
