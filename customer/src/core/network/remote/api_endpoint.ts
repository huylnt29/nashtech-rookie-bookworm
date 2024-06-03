const Endpoint = {
  GRAPHQL: `/graphql`,
  BOOK_DETAIL: (id: string) => `/public/book/${id}`,
  NEW_ORDER: `/public/order`,
  NEW_REVIEW: `/public/review`,
};

export default Endpoint;
