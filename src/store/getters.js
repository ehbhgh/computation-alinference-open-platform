import cacheView from "./modules/cachaView"

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  accessUser: state => state.user.accessUser,
  cacheViews: state => state.cacheView.cacheViews,
  menuList: state => state.user.menuList,
  fold:state => state.setting.fold,
  refreshed:state => state.setting.refreshed,
}
export default getters
