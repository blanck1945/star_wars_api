interface ApiRoutes {
  planetUrl: string;
  peopleUrl: string;
}

export const apiCalls: ApiRoutes = {
  planetUrl: "https://swapi.dev/api/planets",
  peopleUrl: "https://swapi.dev/api/people",
};
