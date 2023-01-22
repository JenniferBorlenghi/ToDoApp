import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, Space, Select, Divider, Popconfirm } from "antd";

export default function Task({
  id,
  description,
  completed,
  label,
  handleChangeLabel,
  handleStatusChange,
  handleRemoveTask,
}) {
  const changeTaskStatus = () => {
    handleStatusChange(id);
  };

  const removeTask = () => {
    handleRemoveTask(id);
  };

  const changeLabel = (newLabel) => {
    handleChangeLabel(id, newLabel);
  };

  return (
    <>
      <h3>{description}</h3>
      <p>Id: {id}</p>

      <div>
        <span>Label: </span>
        <Select
          defaultValue={label}
          style={{ width: 120 }}
          onChange={changeLabel}
          options={[
            { value: "Personal", label: "Personal" },
            { value: "Housechores", label: "Housechores" },
            { value: "Studies", label: "Studies" },
            { value: "Work", label: "Work" },
          ]}
        />
      </div>

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
