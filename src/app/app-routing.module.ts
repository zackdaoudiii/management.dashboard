import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './Pages/Auth/login/login.component';
import {SideBarComponent} from "./Components/Layout/side-bar/side-bar.component";
import {NavbarComponent} from "./Components/Layout/navbar/navbar.component";
import {LayoutComponent} from "./Components/Layout/layout/layout.component";
import {DashboardComponent} from "./Pages/dashboard/dashboard.component";

const routes: Routes = [

    {path : '' , component: LoginComponent},
    {path :'test', component:LayoutComponent},
  {
    path: '', component : LayoutComponent ,
    children:
      [
        { path: 'dashboard', component: DashboardComponent },

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
