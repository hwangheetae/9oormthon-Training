class Github {
    constructor() {
      this.client_id = "Iv1.7804a38d47577684";
      this.client_secret = "c1088a7e34cb538f79605837fa60309517e3e38c";
      this.repo_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {profile, repos};
    }
  
  }