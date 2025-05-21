// cơ chế chuyển đổi JSXJSX

// https://babeljs.io/ su dung Babel để chuyển đổi JSX thành JS
// Code JSX
    function formatName(user){
    return user.firstName + ' ' + user.lastName;
    }
    const users = {
    firstName: 'Nguyen', 
    lastName: 'Son'
    }

    function getGreeting(users){
    if(userss){
        return <h1> Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, stranger.</h1>
    }

    console.log(getGreeting(users));

// Chuyển về JS
    import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
    function formatName(user) {
    return user.firstName + ' ' + user.lastName;
    }
    const user = {
    firstName: 'Nguyen',
    lastName: 'Son'
    };
    function getGreeting(user) {
    if (user) {
        return /*#__PURE__*/_jsxs("h1", {
        children: [" Hello, ", formatName(user)]
        });
    }
    return /*#__PURE__*/_jsx("h1", {
        children: "Hello, stranger."
    });
    }
    console.log(getGreeting(user));