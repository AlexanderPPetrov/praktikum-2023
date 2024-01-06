$(function() {

    const $loginButton = $('#login-button')
    const $registerButton = $('#register-button')

    $loginButton.on('click', function() {
        const email = $('#email').val()
        const password = $('#password').val()

        const userData = {
            email,
            password,
        }

        //Create some validation and return if it's not valid
        //Otherwise send data to some backend
        
        console.log(userData)


        // $registerButton.addClass('bg-info')
        // $registerButton.removeClass('bg-info')
        // $registerButton.toggleClass('bg-info')

        // $registerButton.hide()
        // $registerButton.show()

    })

    const $loadUsers = $('#load-users')
    const $clearUsers = $('#clear-users')
    const $findUserInput = $('#find-user')
    let userList = []

    $loadUsers.on('click', function() {
        readUsers()
    })

    $clearUsers.on('click', function() {
        clearUserList()
    })

    $findUserInput.on('input', function() {
        const findUserValue = $findUserInput.val()
        const filteredUsers = filterUsers(userList, findUserValue)
        renderUsers(filteredUsers)
    })

    function clearUserList() {
        $('#users-container').empty()
    }

    function readUsers() {
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
          })
        .done(function(response) {
            userList = response
            renderUsers(userList)
        });
    }

    function filterUsers(users = [], stringMatch = 'r') {
        const match = stringMatch.toLowerCase()
        const filteredUsers = users.filter(({ username }) => {
            return username.toLowerCase().includes(match)
        })
        return filteredUsers
    }

    function renderUsers(users) {
        clearUserList()
        users.forEach(user => {
            renderUser(user)
        })
    }

    //Will not work as there are no elements .remove-user 
    //when click handler is attached
    $('.remove-user').on('click', function() {
        console.log('please log something')
    })

    $(document).on('click', '.remove-user', function() {
        //TODO 
        //create a function to remove user from userList
        //create a function for remove user from the dom
        const $buttonClicked = $(this)
        const $userContainer = $buttonClicked.closest('.alert')
        const userId = $userContainer.attr('id').split('-')[1]
        userList = userList.filter(user => user.id !== parseInt(userId))
        $userContainer.remove()
    });

    function renderUser({id, username}) {
        const $div = $('<div>').html(username)
        $div.attr('id', `user-${id}`)
        $div.addClass('alert alert-light d-flex justify-content-between align-items-center');
        const $removeButton = $('<button>').html('Изтрий')
        $removeButton.addClass('btn btn-danger remove-user')
        $div.append($removeButton)
        $('#users-container').append($div)
    }



});

