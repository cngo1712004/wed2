import { Component, EventEmitter, Output } from '@angular/core';
import { navDatabar } from './navdata';
interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean; // biểu trị trạng thái thu gọn
}

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
    @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
    collapsed: boolean = false;
    navdata = navDatabar;
    screenWidth: number = 0;
    //toggleCollapse: chuyển đổi thu gọn
    toggleCollapse(): void {
        this.collapsed = true;
        console.log({ collapsed: this.collapsed, screenWidth: this.screenWidth });
        this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
    //closeSideNav: đóng điều hướng bên
    closeSideNav(): void {
        this.collapsed = false;
        this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
}
