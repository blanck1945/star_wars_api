interface ApiRoutes {
  planetUrl: string;
  peopleUrl: string;
}

export const apiCalls: ApiRoutes = {
  planetUrl: "http://swapi.dev/api/planets",
  peopleUrl: "http://swapi.dev/api/people",
};
