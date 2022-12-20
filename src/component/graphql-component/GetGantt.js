// TEST READ GANTT
import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_GANTT_DATA } from "../../GraphQL/Queries";
import { GET_SCAFFOLD_DATA } from "../../GraphQL/Queries";

/*
// First Try
function GetGantt() {
  const { error, loading, data } = useQuery(GET_GANTT_DATA);
  //   const { error, loading, data } = useQuery(GET_SCAFFOLD_DATA);

  useEffect(() => {
    if (data) {
      console.log(data);
    } else {
      console.log("No data");
    }
  }, [data]);

  return <div />;
}

export default GetGantt;
*/

/*
// Second Try (work)
function GetGantt() {
  const { error, loading, data } = useQuery(GET_GANTT_DATA);
  //   const { error, loading, data } = useQuery(GET_SCAFFOLD_DATA);
  const [ganttdata, setGantt] = useState([]);
  useEffect(() => {
    if (data) {
      setGantt(data.gantt.data);
    }
  }, [data]);

  function subStringDate(str) {
    return str.substring(0, 10);
  }

  return (
    <div>
      {" "}
      {ganttdata.map((gantt) => {
        var startDate = subStringDate(gantt.start_time);
        var endDate = subStringDate(gantt.end_time);
        return (
          <h1>
            {" "}
            {gantt.ID} <br></br>
            {gantt.name}
            <br></br>
            {startDate}
            <br></br>
            {endDate}
          </h1>
        );
      })}
    </div>
  );
}

export default GetGantt;
*/

/*
// Third Try (failed pass the ganttData to another file
export function GetGantt() {
  const { error, loading, data } = useQuery(GET_GANTT_DATA);
  //   const { error, loading, data } = useQuery(GET_SCAFFOLD_DATA);
  const [ganttdata, setGantt] = useState([]);
  useEffect(() => {
    if (data) {
      setGantt(data.gantt.data);
    }
  }, [data]);
  return ganttdata;
}
export function subStringDate(str) {
  return str.substring(0, 10);
}
*/

/*
// forth try (failed)
function GetGantt() {
  const { error, loading, data } = useQuery(GET_SCAFFOLD_DATA);
  //   const { error, loading, data } = useQuery(GET_SCAFFOLD_DATA);
  const [ganttdata, setGantt] = useState([]);
  var test = [];
  useEffect(() => {
    if (data) {
      setGantt(data.scaffold.data);
    }
  }, [data]);

  function subStringDate(str) {
    return str.substring(0, 10);
  }

  return (
    <div>
      {" "}
      {ganttdata.map((gantt) => {
        // var startDate = subStringDate(gantt.start_time);
        // var endDate = subStringDate(gantt.end_time);
        var A = test.concat(gantt.name)
        return (
          console.log(test.concat(gantt.name))
        );
      })}
    </div>
  );
}

export default GetGantt;
*/

// // Create Data Static
// function dataParam(ID, Name, startDate, endDate) {
//   const data = {
//     data: [
// {
//   id: ID,
//   name: Name,
//   start_date: startDate,
//   end_date: endDate,
//   user_id: 1,
//   progress: 0.6,
// },
//     ],
//     links: [
//       { id: 1, source: 1, target: 2, type: "1" },
//       { id: 2, source: 2, target: 3, type: "0" },
//     ],
//   };
// }

/*
// fifth try (failed)
function GetGantt() {
  const { error, loading, data } = useQuery(GET_GANTT_DATA);
  //   const { error, loading, data } = useQuery(GET_SCAFFOLD_DATA);
  const [ganttdata, setGantt] = useState([]);
  useEffect(() => {
    if (data) {
      setGantt(data.gantt.data);
      console.log("DATA READY");
    } else {
      console.log("No data");
    }
  }, [data]);

  function subStringDate(str) {
    return str.substring(0, 10);
  }

  return (
    <div>
      {" "}
      {ganttdata.map((gantt) => {
        var startDate = subStringDate(gantt.start_time);
        var endDate = subStringDate(gantt.end_time);
        var data = [{
          id: gantt.ID,
          name: gantt.name,
          start_date: startDate,
          end_date: endDate,
          user_id: 1,
          progress: 0.6,
        }];
        return (
        <h1>
          {" "}
        </h1>
        );
      })}
    </div>
  );
}

export default GetGantt;
*/

// eight Try (scaffold)
/*
// Data static SOURCE
let data = {
  data: [
    { id: 1, name: 'Task #1', start_date: '2019-04-15', end_date: '2019-04-30' },
    { id: 2, name: 'Task #2', start_date: '2019-04-30', end_date: '2019-05-10' }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: "1" },
    { id: 2, source: 2, target: 3, type: "0" },
  ],
};
*/

// Create Data Static
let TEST123 = {
  data: [],
  links: [
    { id: 1, source: 1, target: 2, type: "1" },
    { id: 2, source: 2, target: 3, type: "0" },
  ],
};

function GetGantt() {
  const { error, loading, data } = useQuery(GET_GANTT_DATA);
  const [ganttdata, setGantt] = useState([]);
  useEffect(() => {
    if (data) {
      setGantt(data.getAllGantt.data);
    }else{
      console.log("No data");
    }
  }, [data]);

  function subStringDate(str) {
    return str.substring(0, 10);
  }

  return (
    <div>
      {" "}
      {/* {console.log(JSON.stringify(ganttdata))} */}
      {/* {console.log(JSON.stringify(TEST123))} */}
      {ganttdata.map((gantt) => {
        var startDate = subStringDate(gantt.start_time);
        var endDate = subStringDate(gantt.end_time);
        var A1 = gantt.ID;
        var A2 = gantt.name;
        var A3 = gantt.description;

        TEST123.data.push({
          id: gantt.ID,
          name: gantt.name,
          start_date: startDate,
          end_date: endDate,
        });

        return (
          <h1>
            {(JSON.stringify(TEST123))}
          </h1>
        );
      })}
    </div>
  );
}

export default GetGantt;
