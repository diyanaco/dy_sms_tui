import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BranchModel } from 'app/model/branch.model';
import { PrimaryState } from 'app/store/primary-store/primary.state';
import { Store } from '@ngrx/store';
import { selectBranches } from 'app/store/primary-store/primary.selector';
import { GlobalConstants } from 'app/global-constants';
import { loadOnSelectedBranch } from 'app/store/primary-store/primary.action';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private $layer: any
    constructor(
        location: Location, 
        private element: ElementRef, 
        private router: Router,
        private store : Store<PrimaryState>
        ) {
        this.location = location;
        this.sidebarVisible = false;
    }
    $branch_list : Observable<BranchModel[]>
    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        console.log(this.listTitles)
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
        this.$branch_list = this.store.select(selectBranches)
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function () { //asign a function
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getBreadcrumbs() {
        const breadcrumb = this.location.path().toString().replaceAll('/', '>').slice(1)
        return breadcrumb
    }

    logout() {
        localStorage.removeItem('auth_tkn');
        localStorage.removeItem('auth_meta');
    }

    onChangeBranch(event){
        GlobalConstants.current_branch = event
        // TODO #38 Need to take in account multiple branches selected
        // On selected branch(es) we will call the 
        // getbyquery based on branch(es)

        //Load all into store based on branchId
        this.store.dispatch(loadOnSelectedBranch())
    }
}
