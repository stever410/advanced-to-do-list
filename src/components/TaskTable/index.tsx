import React from 'react';
import {
  Avatar, Badge, Table, Tag,
} from 'antd';
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors';
import { LiteralUnion } from 'antd/lib/_util/type';
import { ColumnsType } from 'antd/lib/table';

import Task from '../../types/task.types';

const columns: ColumnsType<Task> = [
  {
    dataIndex: 'name',
    key: 'name',
  },
  {
    dataIndex: 'status',
    key: 'status',
    render: (value, { status }) => {
      let color: LiteralUnion<PresetColorType | PresetStatusColorType, string> = 'processing';
      if (status === 'Completed') {
        color = 'green';
      } else if (status === 'Pending') {
        color = 'orange';
      }
      return (
        <Tag color={color} style={{ borderRadius: 8.5, border: 'none' }}>
          {status === 'Progressing' ? 'In progress' : status}
        </Tag>
      );
    },
  },
  {
    dataIndex: 'priority',
    key: 'priority',
    render: (value, { priority }) => {
      let color: PresetStatusColorType = 'processing';
      if (priority === 'Normal') {
        color = 'success';
      } else if (priority === 'Critical') {
        color = 'error';
      }
      return <Badge status={color} text={priority} />;
    },
  },
  {
    dataIndex: 'users',
    key: 'users',
    render: (value, { users }) => (
      <Avatar.Group
        maxCount={2}
        maxStyle={{ color: '#F2F2F2', backgroundColor: '#6FCF97' }}
      >
        {users.map((user) => (
          <Avatar src={user} />
        ))}
      </Avatar.Group>
    ),
  },
];

const data: Task[] = [
  {
    id: '1',
    name: 'Evaluate the addition and deletion of user IDs.',
    status: 'Progressing',
    priority: 'Minor',
    users: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80',
    ],
  },
  {
    id: '2',
    name: 'Evaluate the addition and deletion of user IDs.',
    status: 'Pending',
    priority: 'Normal',
    users: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80',
    ],
  },
  {
    id: '3',
    name: 'Evaluate the addition and deletion of user IDs.',
    status: 'Completed',
    priority: 'Critical',
    users: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80',
    ],
  },
];

const TaskTable: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    showHeader={false}
    pagination={false}
  />
);

export default TaskTable;
