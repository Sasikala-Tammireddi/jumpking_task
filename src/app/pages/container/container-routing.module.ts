import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContainerPage } from "./container.page";
import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: ContainerPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: "categories",
        loadChildren: () =>
          import("./categories/categories.module").then(
            (m) => m.CategoriesPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "studio",
        loadChildren: () =>
          import("./studio/studio.module").then((m) => m.StudioPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: "explore",
        loadChildren: () =>
          import("./explore/explore.module").then((m) => m.ExplorePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./profile/profile.module").then((m) => m.ProfilePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: "",
        redirectTo: "/container/home"
      },
    ],
  },
  {
    path: "/container/home",
    redirectTo: "fullPath"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerPageRoutingModule {}
