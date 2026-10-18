export const environment = {
  production: false,
  auth0: {
    domain: 'login.morphus.site',
    clientId: 'Og0Iwuw9Z4l3dRC9ZjrZZCNEkXMZUO9n',
    callbackPath: '/admin',
    authorizationParams: {
      audience: 'https://morphus.site', // 🧙‍♂️ A tranca mágica que faltava!
    },
  },
  // 🚀 ADICIONE ESTA LINHA AQUI:
  apiUrl: 'http://localhost:5248',
};
