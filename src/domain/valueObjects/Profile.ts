export class Profile {
  private photoUrl: string
  private linkedInUrl: string 

  constructor(photoUrl: string, linkedInUrl: string) {
    this.photoUrl = photoUrl;
    this.linkedInUrl = linkedInUrl;
  }
}