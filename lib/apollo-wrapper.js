// 'use client'
// import React from 'react'
// import { ApolloClient, ApolloLink, HttpLink, SuspenseCache } from '@apollo/client';
// import {ApolloNextAppProvider, NextSSRInMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";

// const GRAPHQL_ENDPOINT =
//   process.env.GRAPHQL_ENDPOINT || "https://rickandmortyapi.com/graphql";

//   const makeClient = () =>{
//     const httpLink = new HttpLink({
//         uri: GRAPHQL_ENDPOINT,
//     })
//     return new ApolloClient({
//         cache: new NextSSRInMemoryCache(),
//         link:
//           typeof window === "undefined"
//             ? ApolloLink.from([
//                 // in a SSR environment, if you use multipart features like
//                 // @defer, you need to decide how to handle these.
//                 // This strips all interfaces with a `@defer` directive from your queries.
//                 new SSRMultipartLink({
//                   stripDefer: true,
//                 }),
//                 httpLink,
//               ])
//             : httpLink,
//       });
//   }

//   function makeSuspenseCache() {
//     return new SuspenseCache();
//   }
  


// function makeSuspenseCache() {
//   return new SuspenseCache();
// }

// const ApolloWrapper = ({children}) => {
//   return (
//     <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
//         {children}
//     </ApolloNextAppProvider>
//   )
// }

// export default ApolloWrapper