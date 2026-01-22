import { Component, Inject, Input, OnInit, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search-service';
import { Observable } from 'rxjs';
import { SearchResponse, SearchResult } from '../../../../shared/models/searchResponse.interface';

@Component({
  selector: 'app-search-component',
  imports: [],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
})
export class SearchComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private searchService : SearchService
  ){}
  
  @Input() results : SearchResponse | null = null;

  ngOnInit(): void {
    console.log('kakita')
    this.route.queryParams.subscribe(params =>{
      const query = params['q'];

      if (query){
        this.search(query)
      }
    })
  }


  search(query : string){
     this.searchService.searchWithoutFilter(query)
    .subscribe(result => {
      console.log(result);
      this.results = result;
    });
  }

}
