export const changeActiveStep = (id: ?string) => {
  return {
    type: 'SELECT_STEP',
    id,
  };
};

export const toggleComposer = () => {
  return {
    type: 'TOGGLE_COMPOSER',
    value: false,
  };
};

export const openSearch = () => {
  return {
    type: 'TOGGLE_SEARCH_OPEN',
    value: true,
  };
};

export const closeSearch = () => {
  return {
    type: 'TOGGLE_SEARCH_OPEN',
    value: false,
  };
};
