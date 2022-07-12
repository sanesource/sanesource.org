class NetworkService {
  constructor(host) {
    this.host = host;
  }

  requestSync(url, options, cb) {
    fetch(url, options)
      .then((r) => r.json())
      .then((res) => cb(null, res))
      .catch((err) => cb(err, null));
  }
}

export default NetworkService;
