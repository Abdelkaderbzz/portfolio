import OneInfo from "./OneInfo";
import { render } from "@testing-library/react";

describe("OneInfo", () =>
{
  it('renders info name and value correctly', () =>
  { 
    const infoName = 'hello';
    const infoValue = 'Available';

    const { getByText } = render(
      <OneInfo infoName={infoName} infoValue={infoValue} />
    );
    expect(getByText(infoName)).toBeInTheDocument()
    expect(getByText(infoValue)).toBeInTheDocument()
  })  

})
