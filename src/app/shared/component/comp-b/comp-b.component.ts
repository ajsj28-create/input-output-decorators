import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
// 🧩 Task 1
@Input() childFname!: string;
@Input() childLname!: string;
@Input() childAge!: number;
@Input() childCity!: string;
@Input() childProfession!: string;
@Input() childCompany!: string;
@Input() childHobby!: string;
@Input() childExperience!: number;
@Input() childFavLang!: string;
@Input() childPetName!: string;
@Input() childPetType!: string;
@Input() childMarried!: string;

// 🧩 Task 2
@Input() childStudentName!: string;
@Input() childSchool!: string;
@Input() childGrade!: number;
@Input() childFavSubject!: string;
@Input() childBestFriend!: string;
@Input() childFavSport!: string;
@Input() childDream!: string;
@Input() childCity2!: string;
@Input() childTeacherName!: string;
@Input() childMarks!: number;

// 🧩 Task 3
@Input() childBrand!: string;
@Input() childModel!: string;
@Input() childPrice!: number;
@Input() childColor!: string;
@Input() childStorage!: string;
@Input() childCamera!: string;
@Input() childOs!: string;
@Input() childOwner!: string;
@Input() childPurchaseYear!: number;
@Input() childWarranty!: string;

// 🧩 Task 4
@Input() childMovieName!: string;
@Input() childDirector!: string;
@Input() childReleaseYear!: number;
@Input() childActor!: string;
@Input() childGenre!: string;
@Input() childRating!: number;
@Input() childDuration!: string;
@Input() childPlatform!: string;
@Input() childFavScene!: string;

// 🧩 Task 5
@Input() childTraveler!: string;
@Input() childCountry!: string;
@Input() childCity5!: string;
@Input() childDays!: number;
@Input() childFavPlace!: string;
@Input() childLocalFood!: string;
@Input() childStayHotel!: string;
@Input() childTravelMode!: string;
@Input() childSpent!: string;

// 🧩 Task 6
@Input() childPlayerName!: string;
@Input() childTeam!: string;
@Input() childRuns!: number;
@Input() childBalls!: number;
@Input() childOpponent!: string;
@Input() childVenue!: string;
@Input() childMatchType!: string;
@Input() childResult!: string;
@Input() childStrikeRate!: number;

// 🧩 Task 7
@Input() childAuthor!: string;
@Input() childBook!: string;
@Input() childGenre7!: string;
@Input() childPublished!: number;
@Input() childCopiesSold!: string;
@Input() childMainCharacter!: string;
@Input() childSetting!: string;
@Input() childPublisher!: string;

// 🧩 Task 8
@Input() childShopName!: string;
@Input() childOwner8!: string;
@Input() childLocation!: string;
@Input() childOpenTime!: string;
@Input() childCloseTime!: string;
@Input() childBestSelling!: string;
@Input() childFoundedYear!: number;
@Input() childEmployees!: number;
@Input() childRating8!: number;

// 🧩 Task 9
@Input() childTrainer!: string;
@Input() childGymName!: string;
@Input() childExperience9!: number;
@Input() childSpecialization!: string;
@Input() childLocation9!: string;
@Input() childClients!: number;
@Input() childTiming!: string;
@Input() childRating9!: number;

// 🧩 Task 10
@Input() childRestaurant!: string;
@Input() childChef!: string;
@Input() childCuisine!: string;
@Input() childLocation10!: string;
@Input() childSignatureDish!: string;
@Input() childRating10!: number;
@Input() childEstablished!: number;
@Input() childBranches!: number;

// 🧩 Task 11
@Input() childSinger!: string;
@Input() childConcertName!: string;
@Input() childLocation11!: string;
@Input() childDate!: string;
@Input() childCrowd!: number;
@Input() childTicketPrice!: number;
@Input() childDuration11!: string;
@Input() childOrganizer!: string;

// 🧩 Task 12
@Input() childCarBrand!: string;
@Input() childModel12!: string;
@Input() childOwner12!: string;
@Input() childRange!: string;
@Input() childPrice12!: string;
@Input() childBattery!: string;
@Input() childTopSpeed!: string;
@Input() childColor12!: string;

// 🧩 Task 13
@Input() childTeacher!: string;
@Input() childSubject!: string;
@Input() childSchool13!: string;
@Input() childExperience13!: number;
@Input() childFavTopic!: string;
@Input() childAwards!: number;
@Input() childCity13!: string;

// 🧩 Task 14
@Input() childEmployee!: string;
@Input() childDesignation!: string;
@Input() childDepartment!: string;
@Input() childCompany14!: string;
@Input() childYears!: number;
@Input() childCity14!: string;
@Input() childProjects!: number;
@Input() childTeamSize!: number;

// 🧩 Task 15
@Input() childYoutuber!: string;
@Input() childSubscribers!: string;
@Input() childContentType!: string;
@Input() childJoinYear!: number;
@Input() childUploads!: number;
@Input() childFavVideo!: string;
@Input() childCountry15!: string;

// 🧩 Task 16
@Input() childGame!: string;
@Input() childPlayer!: string;
@Input() childRank!: string;
@Input() childPlayHours!: number;
@Input() childFavAgent!: string;
@Input() childBestWeapon!: string;
@Input() childRegion!: string;

// 🧩 Task 17
@Input() childDeveloper!: string;
@Input() childStack!: string;
@Input() childCompany17!: string;
@Input() childExp!: number;
@Input() childFavTech!: string;
@Input() childProjectCount!: number;
@Input() childMentor!: string;
@Input() childLocation17!: string;

// 🧩 Task 18
@Input() childPhotographer!: string;
@Input() childCamera18!: string;
@Input() childSpecialization18!: string;
@Input() childExperience18!: number;
@Input() childLocation18!: string;
@Input() childAwards18!: number;
@Input() childClients18!: number;

// 🧩 Task 19
@Input() childChef19!: string;
@Input() childShow!: string;
@Input() childSeason!: number;
@Input() childDish!: string;
@Input() childRank19!: string;
@Input() childCity19!: string;
@Input() childFans!: string;

// 🧩 Task 20
@Input() childArtist!: string;
@Input() childArtStyle!: string;
@Input() childMedium!: string;
@Input() childExhibitions!: number;
@Input() childAwards20!: number;
@Input() childCity20!: string;
@Input() childFavPiece!: string;

// 🧩 Task 21
@Input() childDoctor!: string;
@Input() childSpecialization21!: string;
@Input() childHospital!: string;
@Input() childExperience21!: number;
@Input() childCity21!: string;
@Input() childPatientsPerDay!: number;
@Input() childRating21!: number;

// 🧩 Task 22
@Input() childPilot!: string;
@Input() childAirline!: string;
@Input() childExperience22!: number;
@Input() childAircraft!: string;
@Input() childRoutes!: string;
@Input() childFlightHours!: number;

// 🧩 Task 23
@Input() childInfluencer!: string;
@Input() childPlatform23!: string;
@Input() childFollowers!: string;
@Input() childNiche!: string;
@Input() childCollaborations!: number;
@Input() childCountry23!: string;

// 🧩 Task 24
@Input() childStudent!: string;
@Input() childUniversity!: string;
@Input() childCourse!: string;
@Input() childSemester!: number;
@Input() childCgpa!: number;
@Input() childProject!: string;
@Input() childMentor24!: string;

// 🧩 Task 25
@Input() childEntrepreneur!: string;
@Input() childStartup!: string;
@Input() childIdea!: string;
@Input() childFounded!: number;
@Input() childEmployees25!: number;
@Input() childFunding!: string;
@Input() childCity25!: string;

  constructor() { }

  ngOnInit(): void {}

}
