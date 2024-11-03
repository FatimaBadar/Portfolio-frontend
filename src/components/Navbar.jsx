
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
            // items: [
            //     {
            //         label: 'Components',
            //         icon: 'pi pi-bolt'
            //     },
            //     {
            //         label: 'Blocks',
            //         icon: 'pi pi-server'
            //     },
            //     {
            //         label: 'UI Kit',
            //         icon: 'pi pi-pencil'
            //     },
            //     {
            //         label: 'Templates',
            //         icon: 'pi pi-palette',
            //         items: [
            //             {
            //                 label: 'Apollo',
            //                 icon: 'pi pi-palette'
            //             },
            //             {
            //                 label: 'Ultima',
            //                 icon: 'pi pi-palette'
            //             }
            //         ]
            //     }
            // ]
        },
        {
            label: 'Skills',
            icon: 'pi pi-star'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        