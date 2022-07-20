import http from "@/http-common"
class UserDataService {
  getAll(): Promise<any> {
    return http.get("/users")
  }
  get(id: any): Promise<any> {
    return http.get(`/users/${id}`)
  }
  create(data: any): Promise<any> {
    return http.post('/users', data)
  }
  update(id: any, data: any): Promise<any> {
    return http.put(`/users/${id}`, data)
  }
  delete(id: any): Promise<any> {
    return http.delete(`/users/${id}`)
  }
  addTimeOff(): Promise<any> {
    return http.post('/dates')
  }
}
export default new UserDataService