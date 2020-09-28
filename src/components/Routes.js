import Characters from "./Characters";
import Comics from "./Comics";

const Pages = [
  {
    path: "/",
    exact: true,
    main: Characters,
  },
  {
    path: "/comics",
    exact: true,
    main: Creators,
  },
];

export default Pages;
