import request from "@/service/request";

export default {
  login: (data) => {
    return request.post("/device/platform/addition", data);
  },
  loginOut: (data) => {
    return request.get("/app/appConfig/query");
  },
};
