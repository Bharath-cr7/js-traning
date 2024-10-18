function validnum()
 {
    const phonenumElement = document.getElementById("phone");
    

    const phonenum = phonenumElement.value; 

    
    if (phonenum.length !== 10) 
        {

        alert("Phone number is not valid");
        return;
                    
        }

    for (let i = 0; i < phonenum.length; i++) 
    {
        const char = phonenum.charAt(i);
        
        if (char < '0' || char > '9') 
        {
            alert("Phone number is not valid");
            return; 
        }
    }
    
    alert("Phone number is valid");
}
