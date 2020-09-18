import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Input, Switch, Upload, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class Task extends Component {
  render() {
    const {
      task: { id, type },
      index,
    } = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div
            className="task-container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {type === 'button' ? (
              <Button type="primary">Button</Button>
            ) : type === 'input' ? (
              <div>
                Input Field
                <Input />
              </div>
            ) : type === 'switch' ? (
              <div>
                Switch Button
                <Switch style={{ marginLeft: 5 }} />
              </div>
            ) : type === 'upload' ? (
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            ) : type === 'checkbox' ? (
              <Checkbox>Check Box</Checkbox>
            ) : (
              type
            )}
          </div>
        )}
      </Draggable>
    );
  }
}
export default Task;
