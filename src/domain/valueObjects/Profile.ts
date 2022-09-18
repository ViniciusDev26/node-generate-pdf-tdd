export class Profile {
  private readonly photoUrl: string
  private readonly linkedInUrl: string

  constructor (photoUrl: string, linkedInUrl: string) {
    this.photoUrl = photoUrl
    this.linkedInUrl = linkedInUrl
  }

  public getPhotoUrl (): string {
    return this.photoUrl
  }

  public getLinkedInUrl (): string {
    return this.linkedInUrl
  }
}
