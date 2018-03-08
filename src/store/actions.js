export const saveFavoriteList = function ({commit}, song) {
    commit(types.SET_SINGER, saveFavorite(song))
  }