import StyledTable, { StyledTag, StyledEdit, StyledDelete } from "./style";
import { Context } from "../../Store";
import React, { useContext } from "react";
import { TABLE_COLUMNS } from "./constant";
import { Progress } from "antd";
import { ACTION_TYPES } from "../../actionTypes";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getProgressPercentage } from "../../utils";

const getColumns = (dispatch, navigate) => {
  return [
    {
      ...TABLE_COLUMNS.NAME,
      render: (data) => {
        return data.name;
      },
    },
    {
      ...TABLE_COLUMNS.DESC,
      render: (data) => {
        return data.desc;
      },
    },
    {
      ...TABLE_COLUMNS.TYPE,
      render: (data) => {
        return data.type;
      },
    },

    {
      ...TABLE_COLUMNS.PERIOD,
      render: (data) => {
        return data.period;
      },
    },

    {
      ...TABLE_COLUMNS.START_DATE,
      render: (data) => {
        return moment(data.startDate).format("YYYY/MM/DD");
      },
    },
    {
      ...TABLE_COLUMNS.END_DATE,
      render: (data) => {
        return moment(data.endDate).format("YYYY/MM/DD");
      },
    },
    {
      ...TABLE_COLUMNS.SCOPE,
      render: (data) => {
        return data.scope;
      },
    },
    {
      ...TABLE_COLUMNS.BUDGET_STATUS,
      render: (data) => {
        return (
          <>
            {data.budgetStatus?.budget && data.budgetStatus?.cost ? (
              <Progress
                percent={getProgressPercentage(
                  data.budgetStatus?.budget,
                  data.budgetStatus?.cost
                )}
                status="active"
              />
            ) : (
              ""
            )}
            <div>Budget: {data.budgetStatus.budget}</div>
            <div>Cost: {data.budgetStatus.cost}</div>
          </>
        );
      },
    },
    {
      ...TABLE_COLUMNS.COMMENTS,
      render: (data) => {
        return (
          <>
            <div style={{ fontWeight: "700" }}>{data.comments.title}</div>
            <div>{data.comments.text}</div>
          </>
        );
      },
    },
    {
      ...TABLE_COLUMNS.ACTION,
      render: (data) => {
        return data.actions.map((item) => {
          return <StyledTag>{item}</StyledTag>;
        });
      },
    },
    {
      ...TABLE_COLUMNS.EDIT_DELETE,
      render: (data) => {
        return (
          <>
            <StyledEdit
              onClick={() => navigate(`/dashboard/form/${data.id}?edit=true`)}
            >
              Edit
            </StyledEdit>
            <StyledDelete
              onClick={() =>
                dispatch({
                  type: ACTION_TYPES.DELETE,
                  payload: { id: data.id },
                })
              }
            >
              Delete
            </StyledDelete>
          </>
        );
      },
    },
  ];
};

const Table = ({ search }) => {
  const [state, dispatch] = useContext(Context);
  let navigate = useNavigate();

  const getDataSource = () => {
    let filteredEvents = state.dashbaord.budget;
    if (search) {
      filteredEvents = state.dashbaord.budget.filter(({ name }) => {
        name = name.toLowerCase();
        return name.includes(search);
      });
    }

    return filteredEvents || [];
  };
  return (
    <StyledTable
      columns={getColumns(dispatch, navigate)}
      rowKey={"id"}
      dataSource={getDataSource()}
    />
  );
};

export default Table;
