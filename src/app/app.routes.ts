import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Content } from './pages/content/content';

export const routes: Routes = [
    {
        path:'',component:Home
    },
    {
        path:'product',component:Product
    },
    {
        path:'contact',component:Contact
    },
    {
        path:'content/:id',component:Content
    }
];
