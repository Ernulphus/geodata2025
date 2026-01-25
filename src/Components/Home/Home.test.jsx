import { expect, it } from 'vitest';
import Home from "./Home";

it('Renders home', () => {
  const result = (<Home />);
  expect(result).toMatchSnapshot();
})