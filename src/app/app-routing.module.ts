import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./Test/test/test.component";

const routes: Routes = [

  {path : 'test', component : TestComponent}
  // { path: '', component: LoginComponent  },
  // // { path: 'dashboard', component: LayoutComponent  },
  // { path: 'test', component: HomeTestComponent},
  // {
  //   path: '', component : LayoutComponent ,
  //   children:
  //     [
  //       { path: 'dashboard', component: DashboardComponent },
  //       { path: 'invoice', component: HomeTestComponent },
  //
  //     ]
  // },
  /*** its need to be always in the last A Mon cheff hassane */
  // { path: '**',component   : WrongRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
