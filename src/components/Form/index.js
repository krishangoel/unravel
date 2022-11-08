import { useState, useContext, useLayoutEffect } from "react";
import StyledForm from "./style";
import { Button, DatePicker, Select, Form, Input } from "antd";
import { ACTION_TYPES } from "../../actionTypes";
import { Context } from "../../Store";
import { useNavigate, useParams } from "react-router-dom";
import {
  OPTIONS1,
  OPTIONS2,
  OPTIONS3,
  OPTIONS4,
  OPTIONS5,
  initialState,
} from "./constant";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

const BudgetForm = (props) => {
  const [state, dispatch] = useContext(Context);
  const [data, setData] = useState(initialState || {});
  let { id } = useParams();
  let navigate = useNavigate();
  const { dashbaord: { budget = [] } = {} } = state;
  const editState = budget.filter((item) => Number(item.id) === Number(id))[0];
  const [form] = Form.useForm();

  useLayoutEffect(() => {
    if (id) {
      const startDate = new Date(editState.startDate).toLocaleDateString(
        "default"
      );
      const endDate = new Date(editState.endDate).toLocaleDateString("default");
      const updatedData = {
        ...editState,
        startDate: moment(startDate, dateFormat),
        endDate: moment(endDate, dateFormat),
      };
      setData(updatedData);
    }
  }, [id, editState]);

  const onFinish = () => {
    const updatedData = {
      ...data,
      startDate: moment(data.startDate).toDate().getTime(),
      endDate: moment(data.endDate).toDate().getTime(),
    };
    if (id) {
      dispatch({
        type: ACTION_TYPES.EDIT,
        payload: { data: updatedData, id: id, },
      });
    } else {
      dispatch({
        type: ACTION_TYPES.ADD,
        payload: { data: updatedData },
      });
    }
    setData(initialState);
    navigate("/dashboard/list");
  };

  const onFieldsChange = (agrs) => {
    setData((prev) => ({
      ...prev,
      [agrs[0].name[0]]: agrs[0].value,
    }));
  };

  const onCancel = () => {
    navigate("/dashboard/list");
  };

  return (
    <StyledForm
      name="demo"
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFieldsChange={onFieldsChange}
      onFinish={onFinish}
      initialValues={id ? editState : initialState}
    >
      <Form.Item
        label="Name"
        name={["name"]}
        rules={[{ required: true, message: "Please enter name!" }]}
      >
        <Input value={data.name} />
      </Form.Item>

      <Form.Item
        label="Description"
        name={["desc"]}
        rules={[{ required: true, message: "Please enter description" }]}
      >
        <Input.TextArea rows={4} value={data.desc} />
      </Form.Item>

      <Form.Item
        label="Type"
        name={["type"]}
        rules={[{ required: true, message: "Please select type!" }]}
      >
        <Select value={data.type} style={{ width: 120 }} options={OPTIONS1} />
      </Form.Item>

      <Form.Item label="Period" name="period">
        <Select value={data.period} style={{ width: 120 }} options={OPTIONS2} />
      </Form.Item>

      <Form.Item label="Start Date" name="startDate" valuePropName="startDate">
        <DatePicker format={dateFormat} value={data.startDate} />
      </Form.Item>

      <Form.Item label="End Date" name="endDate" valuePropName="endDate">
        <DatePicker format={dateFormat} value={data.endDate} />
      </Form.Item>

      <Form.Item label="Scope" name="scope">
        <Select value={data.scope} style={{ width: 120 }} options={OPTIONS3} />
      </Form.Item>

      <Form.Item label="Budget Status" name="budgetStatus">
        <Input
          type="number"
          name="cost"
          value={data.budgetStatus.cost}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              budgetStatus: { ...prev.budgetStatus, cost: e.target.value },
            }))
          }
        />
        <Input
          type="number"
          name="budget"
          value={data.budgetStatus.budget}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              budgetStatus: { ...prev.budgetStatus, budget: e.target.value },
            }))
          }
        />
      </Form.Item>

      <Form.Item label="Comments" name="comments">
        <Select
          value={data.comments.title}
          style={{ width: 120 }}
          onChange={(value) =>
            setData((prev) => ({
              ...prev,
              comments: { ...prev.comments, title: value },
            }))
          }
          options={OPTIONS4}
        />
        <Input.TextArea
          rows={4}
          value={data.comments.text}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              comments: { ...prev.comments, text: e.currentTarget.value },
            }))
          }
        />
      </Form.Item>

      <Form.Item label="Actions" name="actions">
        <Select
          value={data.actions}
          mode="multiple"
          style={{ width: "100%" }}
          defaultValue={["OPTIMIZE"]}
          optionLabelProp="label"
          options={OPTIONS5}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="secondary"
          htmlType="button"
          onClick={onCancel}
          className="cancel-btn"
        >
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default BudgetForm;
