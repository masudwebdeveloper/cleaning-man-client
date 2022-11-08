export const authJwt = (user) => {
   const userEmail = {
      email: user.email,
   }

   fetch('http://localhost:5000/jwt', {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(userEmail)
   })
      .then(res => res.json())
      .then(data => {
         localStorage.setItem('jwt-token', data.token)
         // navigate(from, { replace: true });

      })
}