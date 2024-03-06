import { Routes } from '@angular/router';
import { TableAlunosComponent } from './components/table-alunos/table-alunos.component';
import { InputAlunosComponent } from './components/input-alunos/input-alunos.component';
import { IndexComponent } from './components/index/index.component';


export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'table', component: TableAlunosComponent},
    {path: 'input', component: InputAlunosComponent}
];
