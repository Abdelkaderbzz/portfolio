import DotsTrigger from './DotsTrigger';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { toggleNavigation } from '../../store/settings/settingsSlice';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom matchers

const mockStore = configureStore([]);
describe('DotsTrigger', () => {
  it('dispatches toggleNavigation action on button click', () => {
    const initialState = {
      settings: {
        isNavigationbarOpened: true,
      },
    };
    const store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <DotsTrigger />
      </Provider>
    );
    const dotsButton = getByTestId('dot-button');
    fireEvent.click(dotsButton);
    const dispatchedActions = store.getActions();
    expect(dispatchedActions).toContainEqual(toggleNavigation());
  });
  it('renders HiOutlineDotsVertical icon when isNavigationBarOpened', () => {
    const initialState = {
      settings: {
        isNavigationbarOpened: true,
      },
    };
    const store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <DotsTrigger />
      </Provider>
    );

    const dotsButton = getByTestId('dot-button');

    expect(dotsButton.firstChild).toHaveClass('menu-icon');
  });

  it('renders TfiArrowCircleRight icon when isNavigationbarOpened is false', () => {
    const initialState = {
      settings: {
        isNavigationbarOpened: false,
      },
    };
    const store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <DotsTrigger />
      </Provider>
    );
    const dotsButton = getByTestId('dot-button');
    const svg2 = getByTestId('svg2');
    expect(svg2).toBeInTheDocument();
    expect(dotsButton.firstChild).toHaveClass('menu-icon');
  });
  it('should not render the comp if widthw less then 1290', () => {
    window.innerWidth = 1390;
    const initialState = {
      settings: {
        isNavigationbarOpened: true,
      },
    };
    const store = mockStore(initialState);
    const { queryByTestId } = render(
      <Provider store={store}>
        <DotsTrigger />
      </Provider>
    );
    const dotsTriggerElement = queryByTestId('dot-button');

    expect(dotsTriggerElement).not.toBeInTheDocument();
  });
});
