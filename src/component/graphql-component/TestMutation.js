import React, { useEffect, useState } from "react";
import { ADD_GANTT, DELETE_GANTT, UPDATE_GANTT } from "../../GraphQL/Mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_GANTT_DATA } from "../../GraphQL/Queries";
import { CardContent, Grid, Typography } from "@material-ui/core";

function TestMutation() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("This is Static Description");
  const [user_id, setUserId] = useState(5); // 5 is the user_id of the user that is logged in
  const [start_time, setStartTime] = useState();
  const [end_time, setEndTime] = useState();

  const [addGantt, { data: addGanttData, error: addGanttError }] =
    useMutation(ADD_GANTT);
  const [updateGantt, { data: updateGanttData, error: updateGanttError }] =
    useMutation(UPDATE_GANTT);
  const [deleteGantt, { data: deleteGanttData, error: deleteGanttError }] =
    useMutation(DELETE_GANTT);
  // const [deleteGantt, { error: deleteGanttError}] = DELETE_GANTT;

  const createGantt = () => {
    addGantt({
      variables: {
        name: name,
        description: description,
        user_id: user_id,
        start_time: start_time,
        end_time: end_time,
      },
    });

    if (addGanttError) {
      console.log(JSON.stringify(addGanttError, null, 2));
    }
  };

  const changeGantt = () => {
    updateGantt({
      variables: {
        id: id,
        name: name,
        description: description,
        user_id: user_id,
        start_time: start_time,
        end_time: end_time,
      },
    });

    if (updateGanttError) {
      console.log(JSON.stringify(updateGanttError, null, 2));
    }
  };

  const removeGantt = () => {
    deleteGantt({
      variables: {
        id: id,
      },
    });

    if (deleteGanttError) {
      console.log(JSON.stringify(deleteGanttError, null, 2));
    }
  };

  // print gantt data //
  const { error, loading, data } = useQuery(GET_GANTT_DATA);
  const [ganttdata, setGantt] = useState([]);
  // Create Data Static
  const ganttTask = {
    data: [],
    links: [
      { id: 1, source: 1, target: 2, type: "1" },
      { id: 2, source: 2, target: 3, type: "0" },
    ],
  };
  useEffect(() => {
    if (data) {
      console.log("Data Ready");
      setGantt(data.gantt.data);
    } else {
      console.log("No data");
    }
  }, [data]);

  function subStringDate(str) {
    return str.substring(0, 10);
  }

  function printGanttData() {
    if (data) {
      return ganttdata.map((gantt) => {
        const startDate = subStringDate(gantt.start_time);
        const endDate = subStringDate(gantt.end_time);

        ganttTask.data.push({
          id: gantt.ID,
          name: gantt.name,
          start_date: startDate,
          end_date: endDate,
        });

        // map data to text
        return (
          <div item xs={12} sm={6} md={4} lg={3} key={gantt.ID}>
            <div>
              <p variant="h5" component="h2">
                {gantt.ID}
              </p>
              <p variant="h5" component="h2">
                {gantt.name}
              </p>
              <p color="textSecondary">{gantt.description}</p>
              <p color="textSecondary">{gantt.start_time}</p>
              <p color="textSecondary">{gantt.end_time}</p>
            </div>
          </div>
        );

        return <></>;
      });
    }
    return <></>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="ID"
        onChange={(e) => {
          setID(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="User ID"
        value={user_id}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="start time"
        onChange={(e) => {
          setStartTime(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="End time"
        onChange={(e) => {
          setEndTime(e.target.value);
        }}
      />
      <button onClick={createGantt}>Create Gantt</button>
      <button onClick={changeGantt}>Update Gantt</button>
      <button onClick={removeGantt}>Delete Gantt</button>
      {printGanttData()}
    </div>
  );
}

export default TestMutation;
