import { useMutation } from "@apollo/client";
import React from "react";
import { ADD_GANTT } from "../../GraphQL/Mutations";

function MyComponent() {
  // Pass mutation to useMutation
  const [addGantt, { data: addGanttData, error: addGanttError }] =
    useMutation(ADD_GANTT);

  const createGantt = (name, description, user_id, start_time, end_time) => {
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

  return <div>{console.log("aaaa")} </div>;
}

export default MyComponent;