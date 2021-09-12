export const validate = (data , type) => {
    const errors = {};

    if(type === "signup") {

    if(!data.name) {
        errors.name = "Name can not be empty";
    } else {
        delete errors.name;
    }

    if(!data.email) {
        errors.email = "Email can not be empty";
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = "Email invalid";
    } else {
        delete errors.email;
    }

    if(!data.password) {
        errors.password = "Password can not be empty";
    } else if(data.password.length < 6) {
        errors.password = "Password must be 6 characters or more";
    } else {
        delete errors.password;
    }

    if(!data.confirmpassword) {
        errors.confirmpassword = "Confirm password";
    } else if(data.confirmpassword !== data.password) {
        errors.confirmpassword = "Password not match";
    } else {
        delete errors.confirmpassword;
    }

    if(!data.isaccept) {
        errors.isaccept = "Please accept regulation"
    } else {
        delete errors.isaccept;
    }
    } else {
        if(!data.email) {
            errors.email = "Email can not be empty";
        } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
            errors.email = "Email invalid";
        } else {
            delete errors.email;
        }

        if(!data.password) {
            errors.password = "Password can not be empty";
        } else if(data.password.length < 6) {
            errors.password = "Password must be 6 characters or more";
        } else {
            delete errors.password;
        }
    }
    return errors;
}