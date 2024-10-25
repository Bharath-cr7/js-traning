function form()
{
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const mobnum = document.getElementById('mob').value.trim();
    const dob = document.getElementById('dob').value;

    if(!fname)
    {
        alert("First Name is required");
        return;
    }
    else if(fname.length<=3||!typeof(Number))
    {
        alert("Invalid First Name");
        return;
     }
     for (let i = 0; i < fname.length; i++)
     {
        if (fname[i] >= '0' && fname[i] <= '9') 
        {
            alert("Invalid First Name");
            return ; 
        }
    }

    if(!lname)
    {
        alert("Last Name is required");
        return;
     }
     else if(lname.length<=3){
        alert("Invalid Last Name");
        return;
        
     }
    if(!mobnum)
    {
        alert("Mobile Number is required");
        return;
    }
    else if(mobnum.length!==10){
        alert("Invalid Mobile Number");
        return;
        
    }
    if(!dob)
    {
        alert("Date of Birth is required");
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    if (isNaN(dobDate.getTime()) || dobDate >= today) 
    {
        alert("Invalid Date of Birth");
        return;
    }
    
       
console.log("First Name:",fname);
console.log("Last Name:",lname);
console.log("Mobile Number:",mobnum);
console.log("Date Of Birth:",dob);

}







