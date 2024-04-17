const user = {
  state: {
    fold: false,
    refreshed: false,
  },
  mutations: {
    modifyFoldStatus: (state, foldStatus) => {
      state.fold = foldStatus;
    },
    modifyRefreshStatus: (state, refreshStatus) => {
      state.refreshed = refreshStatus;
    },
  },
};

export default user;
