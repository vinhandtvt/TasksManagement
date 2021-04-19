import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[];
  TeamMembersSummary = [];
  TeamMembers = [];
  Today: Date;


  constructor(private dashboardServic: DashboardService) { }

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 23432;
    this.Today = new Date();

    this.Clients = [
      "ABC Infotech Ltd.",
      "DEF software Solutions",
      "GHI Industries"
    ];

    this.Projects = [
      "Project A",
      "Project B",
      "Project C",
      "Project D"
    ];
    this.Years = [
      2021, 2020, 2019, 2018, 2017, 2016, 2015
    ];
    this.TeamMembersSummary = this.dashboardServic.getTeamMemberSummary();

    this.TeamMembers = [
      { Region: "East", Members: [
        {ID: 1, Name: "Ford", Status: "Available", Simbol: "fa fa-phone"},
        {ID: 2, Name: "Miller", Status: "Available", Simbol: "fa fa-phone"},
        {ID: 3, Name: "Jones", Status: "Busy", Simbol: "fa fa-user-times"},
        {ID: 4, Name: "James", Status: "Busy", Simbol: "fa fa-user-times"},
      ]},
      { Region: "West", Members: [
        {ID: 1, Name: "Anna", Status: "Available", Simbol: "fa fa-phone"},
        {ID: 2, Name: "Arun", Status: "Busy", Simbol: "fa fa-user-times"},
        {ID: 3, Name: "Varun", Status: "Busy", Simbol: "fa fa-user-times"},
        {ID: 4, Name: "Ubeck", Status: "Busy", Simbol: "fa fa-user-times"},
      ]},
      { Region: "South", Members: [
        {ID: 1, Name: "Yann", Status: "Available", Simbol: "fa fa-phone"},
        {ID: 2, Name: "Vincent", Status: "Available", Simbol: "fa fa-phone"},
        {ID: 3, Name: "Tom", Status: "Busy", Simbol: "fa fa-user-times"},
        {ID: 4, Name: "Corner", Status: "Available", Simbol: "fa fa-phone"},
      ]},
      { Region: "North", Members: [
        {ID: 1, Name: "Cat", Status: "Available", Simbol: "fa fa-phone"},
        {ID: 2, Name: "Jerry", Status: "Busy", Simbol: "fa fa-user-times"},
        {ID: 3, Name: "Dust", Status: "Available", Simbol: "fa fa-phone"},
        {ID: 4, Name: "Uke", Status: "Busy", Simbol: "fa fa-user-times"},
      ]},
    ]

  }

  onProjectChange($event) {
    $event.preventDefault();
    switch($event.target.innerHTML) {
      case 'Project A':
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52436;
        break;
      
      case 'Project B':
        this.ProjectCost = 3214124;
        this.CurrentExpenditure = 32432;
        this.AvailableFunds = 1324234;
        break;
      
      case 'Project C':
        this.ProjectCost = 53446445;
        this.CurrentExpenditure = 108977;
        this.AvailableFunds = 13252;
        break;
      
      case 'Project D':
        this.ProjectCost = 41375434;
        this.CurrentExpenditure = 45745;
        this.AvailableFunds = 23523;
        break;
      
    }
    
  }

}
