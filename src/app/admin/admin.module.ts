import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserEditComponent } from './user-management/user-edit/user-edit.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { ProductEditComponent } from './product-management/product-edit/product-edit.component';
import { CategoryListComponent } from './category-management/category-list/category-list.component';
import { CategoryEditComponent } from './category-management/category-edit/category-edit.component';
import { RoleListComponent } from './role-management/role-list/role-list.component';
import { RoleCreateComponent } from './role-management/role-create/role-create.component';
import { RoleEditComponent } from './role-management/role-edit/role-edit.component';
import { BannerListComponent } from './banner-management/banner-list/banner-list.component';
import { BannerCreateComponent } from './banner-management/banner-create/banner-create.component';
import { BannerEditComponent } from './banner-management/banner-edit/banner-edit.component';
import { CategoryCreateComponent } from './category-management/category-create/category-create.component';
import { ProductCreateComponent } from './product-management/product-create/product-create.component';
import { OrderListComponent } from './order-management/order-list/order-list.component';
import { OrderDetailComponent } from './order-management/order-detail/order-detail.component';
import { FeedbackListComponent } from './feedback-and-comments/feedback-list/feedback-list.component';
import { CommentListComponent } from './feedback-and-comments/comment-list/comment-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        UserListComponent,
        UserEditComponent,
        ProductListComponent,
        ProductEditComponent,
        CategoryListComponent,
        CategoryEditComponent,
        RoleListComponent,
        RoleCreateComponent,
        RoleEditComponent,
        BannerListComponent,
        BannerCreateComponent,
        BannerEditComponent,
        CategoryCreateComponent,
        ProductCreateComponent,
        OrderListComponent,
        OrderDetailComponent,
        FeedbackListComponent,
        CommentListComponent,
        SidenavComponent,
        BodyComponent,
    ],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
