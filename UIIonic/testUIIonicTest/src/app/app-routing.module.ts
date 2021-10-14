import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-list/user-add',
    loadChildren: () => import('./user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-list/user-info',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
