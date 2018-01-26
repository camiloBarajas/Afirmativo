import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-specification',
  templateUrl: './project-specification.component.html',
  styleUrls: ['./project-specification.component.css']
})
export class ProjectSpecificationComponent implements OnInit {

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
