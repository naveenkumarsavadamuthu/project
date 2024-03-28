import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {
  searchTerm: string = '';
  countries: any[] = [];
  filteredCountries: any[] = []; 
  showDropdown: boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: any[]) => {
      this.countries = data;
      this.filteredCountries = data; 
    });
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectCountry(country: string): void {
    this.searchTerm = country;
    this.toggleDropdown();
  }

  filterCountries(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredCountries = this.countries.filter(country =>
        country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCountries = this.countries;
    }
  }
}
