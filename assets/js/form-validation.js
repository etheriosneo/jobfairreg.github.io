function validateForm() {
    	var a = document.forms["myForm"]["fname"].value;
	var b = document.forms["myForm"]["lname"].value;
	var c = document.forms["myForm"]["gender"].value;
	var d = document.forms["myForm"]["email"].value;
	var e = document.forms["myForm"]["dyear"].value;
	var f = document.forms["myForm"]["dmonth"].value;
	var g = document.forms["myForm"]["dday"].value;
	var h = document.forms["myForm"]["mobno"].value;
	var j = document.forms["myForm"]["colname"].value;
	var k = document.forms["myForm"]["brname"].value;
	var l = document.forms["myForm"]["styear"].value;
	var n = document.forms["myForm"]["iduration"].value;
	var o= document.forms["myForm"]["pref1"].value;
	var p = document.forms["myForm"]["pref2"].value;
	var r = document.forms["myForm"]["terms"].value;
    if (a == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (b == "") {
        alert("Last Name must be filled out");
        return false;
    }

    if (c == "") {
        alert("Gender must be filled out");
        return false;
    }
    if (d == "") {
        alert("email must be filled out");
        return false;
    }

    if (e == "") {
        alert("Birth Year must be filled out");
        return false;
    }
    if (f == "") {
        alert("Birth Month must be filled out");
        return false;
    }

    if (g == "") {
        alert("Bith Day must be filled out");
        return false;
    }
    if (h == "") {
        alert("Mobile No must be filled out");
        return false;
    }
    if (j == "") {
        alert("College Name must be filled out");
        return false;
    }

    if (k == "") {
        alert("Branch Name must be filled out");
        return false;
    }
    if (l == "") {
        alert("Year must be filled out");
        return false;
    }

    if (n == "") {
        alert("preferred number of days must be filled out");
        return false;
    }

    if (o == "") {
        alert("First Company Prefernece must be filled out");
        return false;
    }
    if (p == "") {
        alert("Second Company Prefernece must be filled out");
        return false;
    }
    if (r == "") {
        alert("You must agree to the terms and conditions");
        return false;
    }
}