import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'caresupport-checklist',
    loadChildren: () => import('./pages/caresupport-checklist/caresupport-checklist.module').then( m => m.CaresupportChecklistPageModule)
  },
  {
    path: 'consentform',
    loadChildren: () => import('./pages/consentform/consentform.module').then( m => m.ConsentformPageModule)
  },
  {
    path: 'vulnerablechildren',
    loadChildren: () => import('./pages/vulnerablechildren/vulnerablechildren.module').then( m => m.VulnerablechildrenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
