import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const CORE_GANTT_DATA = gql`
    fragment CoreGanttData on GanttData {
        ID
        name
        start_time
        end_time
    }
`;
