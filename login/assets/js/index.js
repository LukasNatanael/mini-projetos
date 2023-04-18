function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    
    console.log(data)
    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute('src', data.picture)
                
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "339551330840-liqqnritsnagkgdvsqru3q3vlvm10k00.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDivLogin"),
    { 
        theme:"filled_blue",
        size: "large",
        type:"standard",
        shape:"rectangular",
        text:"signin_with",
        size:"large",
        logo_alignment:"left",
        width:"300" }  // customization attributes
  );

  google.accounts.id.renderButton(
    document.getElementById("buttonDivRegister"),
    { 
        theme:"filled_white",
        size: "large",
        type:"standard",
        shape:"rectangular",
        text:"signup_with",
        size:"large",
        logo_alignment:"left",
        width:"300" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}

