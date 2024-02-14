import { Application, Router } from "express";
import { HealthRouter } from "./health.route";
import { ProductRouter } from "./product.route";

const _routes: Array<[string, Router]> = [['/health', HealthRouter], ['/product', ProductRouter]]
    
export const routes = (app:Application) =>{
    _routes.forEach((route) => {
        const [path, router] = route
        app.use(path, router)
    })
}