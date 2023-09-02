import http from "./http";

class BaseApi {
  get(resource) {
    return http.get(`${resource}`);
  }

  getById(resource, params) {
    return http.get(`${resource}/${params}`);
  }

  create(resource, params) {
    return http.post(`${resource}`, params);
  }
  postWithParams(resource, params, data) {
    return http.post(`${resource}/${params}`, data);
  }

  update(resource, params) {
    return http.put(`${resource}`, params);
  }

  delete(resource, params) {
    return http.delete(`${resource}`, params);
  }

  deleteAll(resource) {
    return http.delete(`${resource}`);
  }
}

export default new BaseApi();
