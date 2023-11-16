import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/Layout/main/main.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { CartComponent } from './components/Pages/cart/cart.component';
import { CategoryComponent } from './components/Pages/category/category.component';
import { ProductComponent } from './components/Pages/product/product.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { BlogComponent } from './components/Pages/blog/blog.component';
import { AboutComponent } from './components/Pages/about/about.component';
import { RegisterComponent } from './components/Pages/register/register.component';
import { ContacsComponent } from './components/Pages/contacs/contacs.component';

const routes: Routes = [
    {
        path: "", component: MainComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'cart', component: CartComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'product', component: ProductComponent },
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'abouts', component: AboutComponent },
            { path: 'contacs', component: ContacsComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
