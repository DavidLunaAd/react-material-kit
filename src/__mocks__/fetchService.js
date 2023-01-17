
export const getAllUsers = async () => {

    let response = await fetch('https://reqres.in/api/users');
    console.log('Response: ' , response);
    return response.json()
    
 }
