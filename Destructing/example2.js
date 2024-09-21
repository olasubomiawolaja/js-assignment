// destructing in function parameters
function display_user_info({name, age}) {
    console.log(`Name: ${name}, Age:${age}`)
}

const user = {name: "Bob", age: 20}

display_user_info(user)