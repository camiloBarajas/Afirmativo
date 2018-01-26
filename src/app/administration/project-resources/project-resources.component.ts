import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrls: ['./project-resources.component.css']
})
export class ProjectResourcesComponent implements OnInit {

  private sub: any;
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      // In a real app: dispatch action to load the details here.
   });
  }

}
