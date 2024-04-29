import { Apollo } from "apollo-angular";
import { GET_companies } from '../queries/companies.query';
import { Injectable } from "@angular/core";

@Injectable()
export class CompaniesService {
  constructor (private apollo:Apollo){}

  getCompanies(){
    return this.apollo.watchQuery({
      query: GET_companies
    }).valueChanges;
  }

  test(){
    console.log('companiesService')
  }
}