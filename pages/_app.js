import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head"
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from "@apollo/client"
import {createUploadLink} from "apollo-upload-client"

const link = createUploadLink({
  uri: "http://localhost:4000/graphql"
})

const client = new ApolloClient({
  cache: new InMemoryCache,
  link
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Head>
      {/* APP TITLE */}
      <title>Handbook</title>

      {/* APP FAVICON */}
      <link rel="icon" href="./favicon.png" />
    
      {/* FONT FAMILIES */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Ubuntu:wght@500&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
