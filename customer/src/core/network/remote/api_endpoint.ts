const Endpoint = {
  GRAPHQL: `/graphql`,
  BOOK_DETAIL: (id: string) => `/public/book/${id}`,
};

export default Endpoint;
