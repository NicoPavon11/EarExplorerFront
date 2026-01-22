import { Component, OnInit ,inject} from '@angular/core';
import { SearchComponent } from '../../components/search-component/search-component';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search-service';
import { filter, map, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchResponse } from '../../../../shared/models/searchResponse.interface';

@Component({
  selector: 'app-search-page',
  imports: [SearchComponent,AsyncPipe],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  results$!: any | SearchResponse;
  ngOnInit(): void {
    console.log('kakona')
      this.results$ = this.route.queryParams.pipe(
    map((params) => params['q']),
    filter((q): q is string => !!q && q.trim().length > 0),
    switchMap((query) => this.searchService.searchWithoutFilter(query)),
  );
  }
  
}
