import "./App.css";

// import data
import GetGantt from "./component/graphql-component/GetGantt";

// Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import AppGantt from "./component/Gantt-Component/AppGantt";
import TestMutation from "./component/graphql-component/TestMutation";
import { Testing } from "./component/graphql-component/Testing";
import TestProject from "./component/graphql-component/TestProject";
import AppTest from "./AppTest";
import AppGantt_testsecond from "./component/Gantt-Component/AppGantt_testsecond";
import AddGantt from "./component/Gantt-Component/useCustomHook.js";
import KayakKamu from "./component/Gantt-Component/useCustomHook.js";

const errorLink = onError(({ graphQLErrors, nerworkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) =>
      alert(`Graphql error ${message}`)
    );
  }
});

// const link = from([errorLink, new HttpLink({ uri: 'http://arkadium.my.id:4000/graphql' })]);

// const httplink2 = new HttpLink({ uri: 'http://arkadium.my.id:4000/graphql' }) 

const httpLink = createHttpLink({
  uri: 'http://arkadium.my.id:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNSIsInVzZXJuYW1lIjoiVGVzdGltb25pYWwiLCJlbWFpbCI6ImNvYmEyQGdtYWlsLmNvbSIsInJvbGVfaWQiOjIsImV4cCI6MTY3MTUwNjkyNywiaWF0IjoxNjcxNTAzMzI3LCJpc3MiOiJnb2xhbmctand0In0.t-w2ddBM_f93_FzCFXs3-mV9iCRtT6fXHQj4uLvRkC4";
  // const ciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNSIsInVzZXJuYW1lIjoiVGVzdGltb25pYWwiLCJlbWFpbCI6ImNvYmEyQGdtYWlsLmNvbSIsInJvbGVfaWQiOjIsImV4cCI6MTY2OTIxNTc1OCwiaWF0IjoxNjY5MjEyMTU4LCJpc3MiOiJnb2xhbmctand0In0.leddvSe_fZfYGiIPWOL-N_16tOBcpc0CLsQI3t_Q6vY";
  // // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  // uri: 'http://arkadium.my.id:4000/graphql',
  cache: new InMemoryCache(),
  // opts: {
  //   credentials: "same-origin",
  // },
  link: authLink.concat(httpLink),
  // link
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <AppGantt /> */}
      {/* <AppGantt_testsecond /> */}
      <TestProject />
      {/* <KayakKamu /> */}
    </ApolloProvider>
  );
}

export default App;
