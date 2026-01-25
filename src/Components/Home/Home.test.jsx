import { expect, it } from 'vitest';
import Home from "./Home";

it('looks correct', () => {
  const result = (<Home />);
  expect(result).toMatchScreenshot('home-page');
})