class Cache {
  private token: string = '';

  private lang: string = 'en';

  getToken(): string {
    return this.token;
  }
  setToken(token: string): void {
    this.token = token;
  }

  getLang(): string {
    return this.lang;
  }

  setLang(lang: string): void {
    this.lang = lang;
  }
}
const cache = new Cache();
export default cache;
