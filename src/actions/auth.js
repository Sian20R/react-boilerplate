  
//const axios = require('axios');

// export const verifyJti = async (jti, staffNumber) => {
//     var bodyFormData = new FormData();
//     bodyFormData.set('jti', jti);
//     bodyFormData.set('staffNumber', staffNumber);


//     return await axios({
//         method: 'post',
//         url: `${process.env.WEB_API}cryptography/VerifyJti`,
//         data: bodyFormData,
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             'Authorization': `Bearer ${JwtToken.getToken()}`
//         }
//     })
//         .then(function (response) {
//             //handle success
//             //console.log("Action Result : " + response.data.symmetricKey);
//             //console.log("Action Result : " + response.data.symmetricKey);
//             return response;
//         })
//         .catch(function (response) {
//             //handle error
//             console.error(response);
//         });

// };


export const login = (email, password) => {
    let token = null;
    if (email != null && password != null) {
        token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.i5LqSGMp75kWUKuWtku72IUWGicpxrzv5hN34xD8dEI"
    }
    
    return token;
}
