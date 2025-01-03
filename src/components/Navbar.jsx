import React from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        if(location.pathname !== path){
            navigate(path);
        }
    }

    const items = [
        {
            label: 'F A T I M A',
            command: () => handleNavigation('/')
        },
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => handleNavigation('/'),
            visible: location.pathname === "/" || location.pathname === "/projects",
        },
        {
            label: 'About Me',
            icon: 'pi pi-user',
            url: '/#aboutme',
            visible: location.pathname === "/"
        },
        {
            label: 'Projects',
            icon: 'pi pi-trophy',
            command: () => handleNavigation('/projects'),
            visible: location.pathname === "/" || location.pathname === "/projects",

        },
        {
            label: 'Skills',
            icon: 'pi pi-star',
            url: '/#skills',
            visible: location.pathname === "/"
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: '/#contact',
            visible: location.pathname === "/"
        }
    ];

    const visibleItems = items.filter(item => item.visible !== false);

    return (
        <div className="card navbar-card">
            <Menubar model={visibleItems} className="menu"/>
            {/* start={<p style={{paddingRight: '100px'}}>F A T I M A</p>} /> */}
        </div>
    )
}        