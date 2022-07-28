import { Routes } from '@angular/router';
import { LevelCreateComponent } from 'app/components-primary/level/level-create/level-create.component';
import { LevelViewComponent } from 'app/components-primary/level/level-view/level-view.component';
import { LoginComponent } from 'app/components-primary/login/login.component';
import { SignupComponent } from 'app/components-primary/signup/signup.component';
import { StudentCreateComponent } from 'app/components-primary/student/student-create/student-create.component';
import { StudentViewComponent } from 'app/components-primary/student/student-view/student-view.component';
import { SubjectCreateComponent } from 'app/components-primary/subject/subject-create/subject-create.component';
import { SubjectViewComponent } from 'app/components-primary/subject/subject-view/subject-view.component';
import { TableLayoutComponent } from 'app/components-primary/table-layout/table-layout.component';
import { AuthGuard } from 'app/_guards/auth-guard.service';

import { UserProfileComponent } from '../../components-primary/user-profile/user-profile.component';
// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student',
        children : [
            {
                path: '',
                redirectTo : 'create',
                pathMatch :' full'
            },
            {
                path: 'create',
                component: StudentCreateComponent,
                canActivate: [AuthGuard]
        }]
    },
    {
        path: 'table-layout',
        component: TableLayoutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'subject',
        component: SubjectViewComponent,
        canActivate: [AuthGuard],
        children : [
            {
                path: '',
                redirectTo : 'create',
                pathMatch :' full'
            },
            {
                path: 'create',
                component: SubjectCreateComponent,
                canActivate: [AuthGuard]
        }]
    },
    {
        path: 'level',
        component: LevelViewComponent,
        canActivate: [AuthGuard],
        children : [
            {
                path: '',
                redirectTo : 'create',
                pathMatch :' full'
            },
            {
                path: 'create',
                component: LevelCreateComponent,
                canActivate: [AuthGuard]
        }]
    },
    {
        path: 'create',
        component: StudentCreateComponent,
        canActivate: [AuthGuard]
    },
];
