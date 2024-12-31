import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items = [
        {
            label: 'F A T I M A',
            url: '/'
        },
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'About Me',
            icon: 'pi pi-user',
            url: '#aboutme'
        },
        {
            label: 'Projects',
            icon: 'pi pi-trophy',
            url: '/projects'
        },
        {
            label: 'Skills',
            icon: 'pi pi-star',
            url: '#skills'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: '#contact'
        }
    ];

    return (
        <div className="card navbar-card">
            <Menubar model={items} className="menu"/>
            {/* start={<p style={{paddingRight: '100px'}}>F A T I M A</p>} /> */}
        </div>
    )
}        