export class Project {

  public id: string;
  public name: string;
  public description: string;
  public createdDate: Date;

  //#region Navigation Properties

  // public Specification: Specificaction ;
  // public Tests: Array<Test> ;
  // public TestsScenario: Array<TestScenario> ;
  // public Users: Array<UserProject> ;
  // public Incidents: Array<Incident> ;

  //#endregion

  public constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.createdDate = new Date();
    // this.Tests = new Array<Test>();
    // this.Users = new Array<UserProject>();
    // this.Incidents = new Array<Incident>();
    // this.TestsScenario = new Array<TestScenario>();
  }

}
