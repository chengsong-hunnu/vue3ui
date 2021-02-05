import request from "@/utils/request"

// 获取个人信息
export function getInfo(id) {
    return request({
        url: "/post",
        method: "get",
        params: id
    })
}
