import { useMutation } from '@apollo/client';
import React from 'react'
import { ADD_GANTT } from '../../GraphQL/Mutations';

export default function useCustomHook() {
  const [addGantt, { data: addGanttData, error: addGanttError }] =
    useMutation(ADD_GANTT);
  return (
    <div>{console.log("aaa")}</div>
  )
}

// usemutation
// import { useMutation } from '@apollo/client';
// import React from 'react'
// import { ADD_GANTT } from '../../GraphQL/Mutations';

// how to use useMutation
// https://www.apollographql.com/docs/react/data/mutations/
