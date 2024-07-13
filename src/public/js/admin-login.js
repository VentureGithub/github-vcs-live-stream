import { json } from "stream/consumers";

const button= document.getElementById("search-button")
// const input=document.getElementById("email,password")
button.addEventListener('click', async(event) => {
    event.preventDefault();
    try{
        const response= await fetch('http://157.245.109.206:8083/auth/login-by-admin-super-admin',{
            method:"POST",
            headers:{
                'Content-Type':' application/json'
            },
            body:JSON.stringify({email,password}),
        });
        const data= await response.json();
        console.log("response",data);
        localStorage.setItem("login",json.stringify(data));
    }
    catch (error) {
        console.error('Login error:', error);
        console.log("login failed:",error)
    }
});