import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    photos = [
      {
        url: 'https://images.unsplash.com/photo-1539418561314-565804e349c0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Flamant rose dans un lac au coucher du soleil'
      },
      {
        url: 'https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Flamant roses avec un lac en arrière-plan'
      },
      {
        url: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsYW1pbmdvfGVufDB8MXwwfHx8Mg%3D%3D',
        alt: 'Flamants roses en vol'
      },
      {
        url: 'https://images.unsplash.com/photo-1529654674248-a940ce22fe51?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsYW1pbmdvfGVufDB8MXwwfHx8Mg%3D%3D',
        alt: 'Flamant rose sur un lac'
      },
      {
        url: 'https://images.unsplash.com/photo-1564499022942-5fac4f61b64f?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Flamant roses qui se nourrissent dans un lac'
      },
      {
        url: 'https://images.unsplash.com/photo-1575824285366-059b454f222d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZsYW1pbmdvfGVufDB8MXwwfHx8Mg%3D%3D',
        alt: 'Flamants roses qui volent dans le ciel au coucher du soleil'
      },
      {
        url: 'https://images.unsplash.com/photo-1740403328254-94305e9a9c26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZsYW1pbmdvJTIwY2FtYXJndWV8ZW58MHwxfDB8fHwy',
        alt: 'Flamant rose sur un lac d\'eau salée'
      },
      {
        url: 'https://images.unsplash.com/photo-1700663505427-a32cfff32691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZsYW1pbmdvJTIwY2FtYXJndWV8ZW58MHwxfDB8fHwy',
        alt: 'Flamants roses dans un lac au coucher du soleil'
      }
    ];

}
