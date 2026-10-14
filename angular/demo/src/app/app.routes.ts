import { Routes } from '@angular/router';
import { Pipes } from './pipes/pipes';
import { Signals } from './signals/signals';

export const routes: Routes = [
    {
        path: 'signal',
        component: Signals
    },
    {
        path: 'pipes',
        component: Pipes
    }
];
