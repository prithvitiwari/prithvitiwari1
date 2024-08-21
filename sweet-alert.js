$(function(e) {

    // Add Cart
    $(document).on("click", ".add_cart", function(e) {
        console.log('sdgijdfoigjdfoigj');
        $('body').removeClass('timer-alert');
        let url = $(this).data('url');
        swal({
                title: "Alert",
                text: "Are you sure, add product in cart.",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No, cancel it!'
            },
            function(isConfirm) {
                if (isConfirm) {
                    window.location.href = url;
                }
            });
    });

    // pancard_number
    $("#pancard_number").keydown(function(e) {
        let value = $(this).val().toUpperCase();
        $(this).val(value);
    });

    // logout
    $(document).on("click", "#logout", function(e) {
        $('body').removeClass('timer-alert');
        let url = $(this).data('url');
        swal({
                title: "Alert",
                text: "Are you sure, logout this account.",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No, cancel it!'
            },
            function(isConfirm) {
                if (isConfirm) {
                    window.location.href = url;
                }
            });
    });

    // single delete
    $(document).on("click", "#single_delete", function(e) {
        $('body').removeClass('timer-alert');
        let url = $(this).data('url');
        swal({
                title: "Alert",
                text: "Are you sure, delete this record.",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No, cancel it!'
            },
            function(isConfirm) {
                if (isConfirm) {
                    window.location.href = url;
                }
            });
    });

    // single status
    $(document).on("click", "#single_status", function(e) {
        $('body').removeClass('timer-alert');
        let url = $(this).data('url');
        swal({
                title: "Alert",
                text: "Are you sure, change this record status.",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No, cancel it!'
            },
            function(isConfirm) {
                if (isConfirm) {
                    window.location.href = url;
                }
            });
    });

    
    // pending_complete status
    $(document).on("click", ".pending_complete_status", function(e) {
        console.log('sdgjsdfjgrfjgdfgndffgnedkgn');
        $('body').removeClass('timer-alert');
        let url = $(this).data('url');
        swal({
                title: "Alert",
                text: "Are you sure, change this record status.",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No, cancel it!'
            },
            function(isConfirm) {
                if (isConfirm) {
                    window.location.href = url;
                }
            });
    });


    // single status
    $(document).on("change", "#order_status", function(e) {
        $('body').removeClass('timer-alert');
        let url = $(this).data('url');
        let value = $(this).val();
        if (window.location.search == '') {
            url = url + '?status=' + value;
        } else {
            url = url + window.location.search + '&status=' + value;
        }
        swal({
                title: "Alert",
                text: "Are you sure, change this record status to " + value + ".",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No, cancel it!'
            },
            function(isConfirm) {
                if (isConfirm) {
                    window.location.href = url;
                }
            });
    });




    // Message
    $(document).on("click", "#but1", function(e) {
        $('body').removeClass('timer-alert');
        var message = $("#message").val();
        if (message == "") {
            message = "Your message";
        }
        swal(message);
    });
    // With message and title
    $(document).on("click", "#but2", function(e) {
        $('body').removeClass('timer-alert');
        var message = $("#message").val();
        var title = $("#title").val();
        if (message == "") {
            message = "Your message";
        }
        if (title == "") {
            title = "Your message";
        }
        swal(title, message);
    });
    // Show image
    $(document).on("click", "#but3", function(e) {
        $('body').removeClass('timer-alert');
        var message = $("#message").val();
        var title = $("#title").val();
        if (message == "") {
            message = "Your message";
        }
        if (title == "") {
            title = "Your message";
        }
        swal({
            title: title,
            text: message,
            imageUrl: '../assets/images/brand/logo-2.png'
        });
    });
    // Timer
    $(document).on("click", "#but4", function(e) {
        $('body').addClass('timer-alert');
        var message = $("#message").val();
        var title = $("#title").val();
        if (message == "") {
            message = "Your message";
        }
        if (title == "") {
            title = "Your message";
        }
        message += "(close after 2 seconds)";
        swal({
            title: title,
            text: message,
            timer: 2000,
            showConfirmButton: false
        });
    });
    //
    $(document).on("click", "#click", function(e) {
        $('body').removeClass('timer-alert');
        var type = $("#type").val();
        swal({
            title: "Title",
            text: "Your message",
            type: type
        });
    });
    // Prompt
    $(document).on("click", "#prompt", function(e) {
        $('body').removeClass('timer-alert');
        swal({
            title: "Add",
            text: "Enter your message",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            inputPlaceholder: "Your message"
        }, function(inputValue) {
            if (inputValue != "") {
                swal("Input", "You have entered : " + inputValue);
            }
        });
    });
    // Confirm
    $(document).on("click", "#confirm", function(e) {
        $('body').removeClass('timer-alert');
        swal({
            title: "Alert",
            text: "Are you really want to exit",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: 'Exit',
            cancelButtonText: 'Stay on the page'
        });
    });
    $(document).on("click", "#click", function(e) {
        swal('Congratulations!', 'Your message has been succesfully sent', 'success');
    });
    //payment alert
    $(document).on("click", "#click-payment", function(e) {
        swal('Congratulations!', 'Your Order is Placed', 'success');
    });
    $(document).on("click", "#click1", function(e) {
        $('body').removeClass('timer-alert');
        swal({
            title: "Alert",
            text: "Waring alert",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: 'Exit',
            cancelButtonText: 'Stay on the page'
        });
    });
    $(document).on("click", "#click2", function(e) {
        $('body').removeClass('timer-alert');
        swal({
            title: "Alert",
            text: "Danger alert",
            type: "error",
            showCancelButton: true,
            confirmButtonText: 'Exit',
            cancelButtonText: 'Stay on the page'
        });
    });
    $(document).on("click", "#click3", function(e) {
        $('body').removeClass('timer-alert');
        swal({
            title: "Alert",
            text: "Info alert",
            type: "info",
            showCancelButton: true,
            confirmButtonText: 'Exit',
            cancelButtonText: 'Stay on the page'
        });
    });
});