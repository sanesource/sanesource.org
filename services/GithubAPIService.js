import NetworkService from "./NetworkService";
import { objToQueryString } from "../utils";
import { DEFAULT_GET_OPTIONS } from "../constants/APIConstants";

class GithubService extends NetworkService {
  constructor(host) {
    super(host);
  }

  getFormattedRepo(repo) {
    const formattedRepo = {
      title: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      languages: [repo.language],
      link: repo.html_url,
    };
    return formattedRepo;
  }

  /**
   *
   * @description Gets n projects from repository
   *
   * @param {Number} n Number of projects, Maximum 100
   * @param {Object} options
   * @param {('all'|'public'|'private'|'forks'|'sources'|'member'|'internal')} options.type
   * @param {('created'|'updated'|'pushed'|'full_name')} options.sort
   * @param {String} options.org Organisation name
   */
  getProjects(n = 6, options, cb) {
    const _options = {
      type: options?.type || "public",
      sort: options?.sort || "updated",
      per_page: n,
    };
    const org = options?.org || "sanesource";
    const qString = objToQueryString(_options);
    const url = `${this.host}/orgs/${org}/repos?${qString}`;
    this.requestSync(url, DEFAULT_GET_OPTIONS, cb);
  }
}

export default new GithubService("https://api.github.com");
