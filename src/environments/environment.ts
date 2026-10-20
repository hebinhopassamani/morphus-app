export const environment = {
  production: false,
  auth0: {
    domain: 'www.morphus.me',
    clientId: 'Og0Iwuw9Z4l3dRC9ZjrZZCNEkXMZUO9n',
    callbackPath: '/login/callback',
    authorizationParams: {
      audience: 'https://morphus.me', // 🧙‍♂️ A tranca mágica que faltava!
    },
  },
  // 🚀 ADICIONE ESTA LINHA AQUI:
  apiUrl: 'http://localhost:5248',
};
