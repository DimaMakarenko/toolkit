import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { syncList } from "../../store/reducers/syncList/selectors";
import { addTask } from "../../store/reducers/syncList";
// components
import Form from "../Form";
// types
import { TTask } from "../../store/reducers/syncList/index";

const SyncList = () => {
  const list: TTask[] = useSelector(syncList);
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    dispatch(addTask(data));
  };

  return (
    <div>
      <Form sumbit={handleSubmit} />
      {list.map((el: TTask, ind: number) => (
        <div key={ind}>{el.title}</div>
      ))}
    </div>
  );
};

export default SyncList;
