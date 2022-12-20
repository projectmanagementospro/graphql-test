import { gql } from "@apollo/client";

export const ADD_GANTT = gql`
  mutation addGantt(
    $name: String!
    $description: String!
    $user_id: Int!
    $start_time: DateTime!
    $end_time: DateTime!
  ) {
    addGantt(
      input: {
        name: $name
        description: $description
        user_id: $user_id
        start_time: $start_time
        end_time: $end_time
      }
    ) {
      data {
        ID
      }
    }
  }
`;

export const UPDATE_GANTT = gql`
  mutation updateGantt(
    $id: String!
    $name: String!
    $description: String!
    $user_id: Int!
    $start_time: DateTime!
    $end_time: DateTime!
  ) {
    updateGantt(
      id: $id
      input: {
        name: $name
        description: $description
        user_id: $user_id
        start_time: $start_time
        end_time: $end_time
      }
    ) {
      data {
        ID
      }
    }
  }
`;

export const DELETE_GANTT = gql`
  mutation deleteGantt($id: String!) {
    deleteGantt(id: $id)
  }
`;
