const base = {
    get() {
        return {
            url : "http://localhost:8080/kuaicandiandiancanjiesuan/",
            name: "kuaicandiandiancanjiesuan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kuaicandiandiancanjiesuan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "快餐店点餐结算系统"
        } 
    }
}
export default base
