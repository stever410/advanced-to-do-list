import React from 'react';
import { Avatar, Input, PageHeader, Button, Badge } from 'antd';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';

import './styles.scss';

const Navbar: React.FC = () => (
  <PageHeader
    title="BrandHere"
    ghost={false}
    subTitle={
      <Input
        size="large"
        placeholder="Search anything... "
        bordered={false}
        prefix={<SearchOutlined className="mr-10" />}
      />
    }
    extra={[
      <Button
        icon={
          <Badge dot>
            <BellOutlined style={{ fontSize: 22 }} />
          </Badge>
        }
        size="large"
        type="text"
        style={{ backgroundColor: '#fff' }}
      />,
      <Avatar
        className="avatar-gradient-border"
        src="https://images.unsplash.com/photo-1503414265207-455bcd0955dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
      />,
    ]}
  />
);

export default Navbar;
