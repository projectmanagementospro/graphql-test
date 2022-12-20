import React, { useEffect, useState } from "react";
import { ADD_GANTT, DELETE_GANTT, UPDATE_GANTT } from "../../GraphQL/Mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_GANTT_DATA, GET_PROJECT_DATA } from "../../GraphQL/Queries";
import { CardContent, Grid, Typography } from "@material-ui/core";

function TestProject() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("This is Static Description");
  const [user_id, setUserId] = useState(5); // 5 is the user_id of the user that is logged in
  const [start_time, setStartTime] = useState();
  const [end_time, setEndTime] = useState();

  //   const [addGantt, { data: addGanttData, error: addGanttError }] =
  //     useMutation(ADD_GANTT);
  //   const [updateGantt, { data: updateGanttData, error: updateGanttError }] =
  //     useMutation(UPDATE_GANTT);
  //   const [deleteGantt, { data: deleteGanttData, error: deleteGanttError }] =
  //     useMutation(DELETE_GANTT);
  //   // const [deleteGantt, { error: deleteGanttError}] = DELETE_GANTT;

  //   const createGantt = () => {
  //     addGantt({
  //       variables: {
  //         name: name,
  //         description: description,
  //         user_id: user_id,
  //         start_time: start_time,
  //         end_time: end_time,
  //       },
  //     });

  //     if (addGanttError) {
  //       console.log(JSON.stringify(addGanttError, null, 2));
  //     }
  //   };

  //   const changeGantt = () => {
  //     updateGantt({
  //       variables: {
  //         id: id,
  //         name: name,
  //         description: description,
  //         user_id: user_id,
  //         start_time: start_time,
  //         end_time: end_time,
  //       },
  //     });

  //     if (updateGanttError) {
  //       console.log(JSON.stringify(updateGanttError, null, 2));
  //     }
  //   };

  //   const removeGantt = () => {
  //     deleteGantt({
  //       variables: {
  //         id: id,
  //       },
  //     });

  //     if (deleteGanttError) {
  //       console.log(JSON.stringify(deleteGanttError, null, 2));
  //     }
  //   };

  // print gantt data //
  const { error, loading, data } = useQuery(GET_PROJECT_DATA);
  const [projectdata, setProject] = useState([]);
  // Create Data Static

  useEffect(() => {
    if (data) {
      console.log("Data Ready");
      console.log(data);
      setProject(data.project.Data);
    } else {
      console.log("No data");
    }
  }, [data]);

  function subStringDate(str) {
    return str.substring(0, 10);
  }

  function printSumCost() {
    var sumCost = 0;
    var projectCurrency = "";
    projectdata.map((project) => {
      sumCost = sumCost + project.cost_plan;
      projectCurrency = project.currency_symbol;
    });
    return (
      <div>
        <p>
          {projectCurrency} {sumCost}
        </p>
      </div>
    );
  }

  function printSumActual() {
    var sumAct = 0;
    var projectCurrency = "";
    projectdata.map((project) => {
      sumAct = sumAct + project.cost_actual;
      projectCurrency = project.currency_symbol;
    });
    return (
      <div>
        <p>
          {projectCurrency} {sumAct}
        </p>
      </div>
    );
  }

  function PrintProjectData() {
    var sumCost = 0;
    var sumAct = 0;

    if (data) {
      return projectdata.map((project) => {
        // map data to text
        return (
          <div item xs={12} sm={6} md={4} lg={3} key={project.ID}>
            <div>
              <p variant="h5" component="h2">
                {project.ID}
              </p>
              <p variant="h5" component="h2">
                {project.name}
              </p>
              <p color="textSecondary">
                {(sumCost = sumCost + project.cost_plan)}
              </p>
              <p color="textSecondary">{project.cost_actual}</p>
              <p color="textSecondary">{project.currency_symbol}</p>
            </div>
            {console.log(project)}
          </div>
        );

        return <></>;
      });
    }
    return <></>;
  }

  return (
    <div>
      {/* <input
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
      <button onClick={D}>Create Gantt</button>
      <button onClick={changeGantt}>Update Gantt</button>
      <button onClick={removeGantt}>Delete Gantt</button> */}
      {printSumCost()}
      {printSumActual()}
    </div>
  );
}

export function SumActual() {
  const { error, loading, data } = useQuery(GET_PROJECT_DATA);
  const [projectdata, setProject] = useState([]);

  useEffect(() => {
    if (data) {
      console.log("Data Ready");
      console.log(data);
      setProject(data.project.Data);
    } else {
      console.log("No data");
    }
  }, [data]);

  function printSumActual() {
    var sumAct = 0;
    var projectCurrency = "";
    projectdata.map((project) => {
      sumAct = sumAct + project.cost_actual;
      projectCurrency = project.currency_symbol;
    });
    return (
      <div>
        <p>
          {projectCurrency} {sumAct}
        </p>
      </div>
    );
  }

  return <div>{printSumActual()}</div>;
}

export function SumCost() {
  const { error, loading, data } = useQuery(GET_PROJECT_DATA);
  const [projectdata, setProject] = useState([]);

  useEffect(() => {
    if (data) {
      console.log("Data Ready");
      console.log(data);
      setProject(data.project.Data);
    } else {
      console.log("No data");
    }
  }, [data]);

  function printSumCost() {
    var sumCost = 0;
    var projectCurrency = "";
    projectdata.map((project) => {
      sumCost = sumCost + project.cost_plan;
      projectCurrency = project.currency_symbol;
    });
    return (
      <div>
        <p>
          {projectCurrency} {sumCost}
        </p>
      </div>
    );
  }

  return <div>{printSumCost()}</div>;
}

export default TestProject;
