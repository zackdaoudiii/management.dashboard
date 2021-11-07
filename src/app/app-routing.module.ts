import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './Pages/Auth/login/login.component';
import {SideBarComponent} from "./Components/Layout/side-bar/side-bar.component";
import {NavbarComponent} from "./Components/Layout/navbar/navbar.component";
import {LayoutComponent} from "./Components/Layout/layout/layout.component";
import {DashboardComponent} from "./Pages/dashboard/dashboard.component";
import {ListProductsComponent} from "./Pages/Products/list-products/list-products.component";
import {AddProductComponent} from "./Pages/Products/add-product/add-product.component";
import {UpdateProductComponent} from "./Pages/Products/update-product/update-product.component";

const routes: Routes = [

    {path : '' , component: LoginComponent},
    {path :'test', component:LoginComponent},
  {
    path: '', component : LayoutComponent ,
    children:
      [
        //** start Dashboard Component **/
        { path: 'dashboard', component: DashboardComponent },
        //** end Dashboard Component **/

        //** start Products Component **/
        {path:'products' , component : ListProductsComponent},
        {path:'product/add' , component : AddProductComponent},
        {path:'product/update' , component : UpdateProductComponent},

        //** end Products Component **/


      ]
  },
  // {
  //   path: '',
  //   redirectTo: 'dashboard/default',
  //   pathMatch: 'full',
  // },
  // { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  // { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  // { path: '**', redirectTo: 'dashboard/default' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
