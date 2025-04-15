import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {roleGuard} from "./guards/role.guard";
import {visitorOnlyGuard} from "./guards/visitor-only.guard";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {authGuard} from "./guards/auth.guard";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'article/:id', component: ArticlePageComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactFormComponent, canActivate: [authGuard] },
  { path: 'registration', component: SignupFormComponent, canActivate: [visitorOnlyGuard]  },
  { path: 'login', component: LoginPageComponent, canActivate: [visitorOnlyGuard]  },
  { path: 'admin', component: AdminPageComponent, canActivate: [roleGuard('ROLE_ADMIN')] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard] },

  { path: '**', component: NotFoundComponent }

];
