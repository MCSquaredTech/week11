

// Player 1 Selectors 
let player1Image = $('#p1');
let player1Input = $('#p1-input');
let player1Name = $('#p1-name');

// Player 1 Click Events
$('#p1-btn').on('click', () => {
    player1Input.removeClass('hide');
    player1Input.addClass('show')
});

$('#p1-save').on('click', () => {
    // get Player information     
    let sex = $('#p1-maleRadio').is(":checked") ? './imgs/man.png' : './imgs/woman.png';
    // update Player information
    player1Image.attr("src", sex);
    $('#p1-title').text($('#p1-first-name').val())
    player1Name.text($('#p1-first-name').val()); 
    // clear the input box
    $('#p1-first-name').val('');
    // close the input area 
    player1Input.removeClass('show');
    player1Input.addClass('hide')
});

let player2Image = $('#p2');
let player2Input = $('#p2-input');
let player2Name = $('#p2-name');
$('#p2-btn').on('click', () => {
   player2Input.removeClass('hide');
   player2Input.addClass('show');
});

$('#p2-save').on('click', () => {
    // get Player information     
    let sex = $('#p2-maleRadio').is(":checked") ? './imgs/man.png' : './imgs/woman.png';
    // update Player information
    player2Image.attr("src", sex);
    $('#p2-title').text($('#p2-first-name').val())
    player2Name.text($('#p2-first-name').val()); 
    // clear the input box
    $('#p2-first-name').val('');
    // close the input area 
    player2Input.removeClass('show');
    player2Input.addClass('hide')
});



