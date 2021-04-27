export default {
  schema: "http://",
  host: process.env.APP_HOSTNAME || "rickandmortyapi.com",
  helpers: {
    character: "/character",
    name: "/?name=",
    page: "/?page=",
    api: "/api",
  },
}