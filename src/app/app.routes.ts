import { Routes } from '@angular/router';
import { PublicTemplast } from './+pages/+public/public-templast/public-templast';
import { HomePage } from './+pages/+public/home-page/home-page';
import { AboutPage } from './+pages/+public/about-page/about-page';
import { ProductsPage } from './+pages/+public/products-page/products-page';
import * as privatePages from './+pages/+private/products-page/products-page';
import { ContactPage } from './+pages/+public/contact-page/contact-page';
import { LoginPage } from './+pages/+public/login-page/login-page';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { UsersPage } from './+pages/+private/users-page/users-page';
import { OrdersPage } from './+pages/+private/orders-page/orders-page';

export const routes: Routes = [
{path:'public',component:PublicTemplast,children:[
    {path:'home', component:HomePage},
    {path:'about',component:AboutPage},
    {path:'products',component:ProductsPage},
    {path:'contact', component:ContactPage},
    {path:'login',component:LoginPage},
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'home'}
]},
{path:'private',component:PublicTemplast,children:[
    {path:'dashboard',component:DashboardPage},
    {path:'users', component:UsersPage},
    {path:'products',component:privatePages.ProductsPage},
    {path:'orders',component:OrdersPage},
    {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
    {path:'**',redirectTo:'dashboard'},
]},
{path:'',redirectTo:'public',pathMatch:'full'},
{path:'**',redirectTo:'public'}
];
