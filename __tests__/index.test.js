import { render, cleanup } from "@testing-library/react";
import Home from "../components/Home/Home";

afterEach(cleanup);

test("Home should render", () => {
  const { getByText } = render(<Home />);

  expect(getByText("Bienvenido a tu pokedex.")).toBeInTheDocument;
});
