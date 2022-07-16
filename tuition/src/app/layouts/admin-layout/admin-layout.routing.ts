import { Routes } from '@angular/router';
import { LoginComponent } from 'app/components-primary/login/login.component';
import { SignupComponent } from 'app/components-primary/signup/signup.component';
import { StudentViewComponent } from 'app/components-primary/student/student-view/student-view.component';
import { TableLayoutComponent } from 'app/components-primary/table-layout/table-layout.component';

import { UserProfileComponent } from '../../components-primary/user-profile/user-profile.component';
// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'student',     component: StudentViewComponent },
    { path: 'table-layout', component: TableLayoutComponent},
    { path: 'signup', component: SignupComponent}
];
