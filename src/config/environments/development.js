module.exports = {
  mongo: {
    hosts: [
      'localhost:27017',
    ],
    database: '',
    username: 'root',
    password: 'root',
    debug: true,
    replicaSet: '',
    server: {
      auto_reconnect: true,
      poolSize: 10,
      socketOptions: {
        keepAlive: 1,
      },
    },
  },
  loggingOptions: {
    console: {
      enabled: true,
    },
  },
  serviceEndPoint: {
    auth0: 'https://dev-cherrychamp.us.auth0.com',
    auth0UserManagement: 'https://dev-cherrychamp.us.auth0.com/api/v2/',
  },
  aws: {
  },
  auth0: {
    clientId: 'BSEaKapX6i1ZZxFASGLg8HLEWQ4oZ0JP',
    clientSecret: 'LaQFGl_TGH9TGW2r9atKFrmKNG_r3fy7YNv938yFtrlAKEj16fCuaLlnxYgJpbUx',
  }
};
