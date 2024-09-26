const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {};

const loadPreviousPage = async () => {};

const onUserChanged = () => {};

const reloadPage = async () => {};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
