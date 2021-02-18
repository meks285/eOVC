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
  },
  {
    path: 'vulnerablechildren',
    loadChildren: () => import('./pages/vulnerablechildren/vulnerablechildren.module').then( m => m.VulnerablechildrenPageModule)
  },
  {
    path: 'vulnerablehouseholdref',
    loadChildren: () => import('./pages/vulnerablehouseholdref/vulnerablehouseholdref.module').then( m => m.VulnerablehouseholdrefPageModule)
  },
  {
    path: 'communitypaediatric',
    loadChildren: () => import('./pages/communitypaediatric/communitypaediatric.module').then( m => m.CommunitypaediatricPageModule)
  },
  {
    path: 'ovcstatusupdate',
    loadChildren: () => import('./pages/ovcstatusupdate/ovcstatusupdate.module').then( m => m.OvcstatusupdatePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
