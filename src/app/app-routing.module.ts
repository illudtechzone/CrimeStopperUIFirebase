import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService } from './services/security/auth-guard.service' ;


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'create-complaint', loadChildren: './pages/create-complaint/create-complaint.module#CreateComplaintPageModule', canActivate: [AuthGuardService]},
  { path: 'add-comment', loadChildren: './pages/add-comment/add-comment.module#AddCommentPageModule', canActivate: [AuthGuardService]},
  { path: 'missing', loadChildren: './pages/missing/missing.module#MissingPageModule', canActivate: [AuthGuardService] },
  { path: 'signup-login', loadChildren: './pages/signup-login/signup-login.module#SignupLoginPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
