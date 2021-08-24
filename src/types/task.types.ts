type Task = {
  id: string;
  name: string;
  status: 'Pending' | 'Progressing' | 'Completed';
  priority: 'Minor' | 'Normal' | 'Critical';
  users: string[];
};

export default Task;
