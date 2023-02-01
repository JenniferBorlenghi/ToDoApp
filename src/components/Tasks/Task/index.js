import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, Space, Divider, Popconfirm } from "antd";

export default function Task({
  id,
  description,
  completed,
  onStatusChange,
  onRemoveTask,
}) {
  const changeTaskStatus = () => {
    onStatusChange(id);
  };

  const removeTask = () => {
    onRemoveTask(id);
  };

  return (
    <>
      <h3>{description}</h3>
      <p>Id: {id}</p>

      <p>
        Status:{" "}
        {completed ? (
          <span>
            <CheckCircleOutlined /> Completed
          </span>
        ) : (
          <span>
            <CloseCircleOutlined /> Not Completed
          </span>
        )}
      </p>
      <Space>
        <Button type="primary" onClick={changeTaskStatus}>
          <SyncOutlined /> Change Status
        </Button>
        <Button type="primary">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={removeTask}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined /> Delete Task
          </Popconfirm>
        </Button>
      </Space>

      <Divider />
    </>
  );
}
