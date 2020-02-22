$(document).ready(function() {

//place border line in middle, with GA bank logo in circle in center. keep 100% opacity

//make capable to include floats
//add scroll up to front page with GA logo


// create object to hold account information
account = {
  checking_amount: 0,
  savings_amount: 0,
};

const pimpMa = function() {
  if (account.checking_amount === 420 || account.savings_amount === 420) {
    $('.button').prop({'type':'image','src':'img/giphy.gif'});
  } else if (account.checking_amount !== 420 && account.savings_amount !== 420) {
    $('.button').prop({'type':'button','src':''});
  }
}

const addAmount = function(type) {
  const input = `#${type}_amount`;
  const accountType = `${type}_amount`;
  const balance = `#${type}_balance`;
  const animation = 'animated flash';
  if ($(input).val() > 0) {
    const amount = parseInt($(input).val());
    account[accountType] += amount;
    $(balance).html(`$${account[accountType]}`).addClass(animation).one('animationend', function() {
      $(balance).removeClass(animation);
    });
    $(balance).removeClass('zero_balance');
  }
  $(input).val('');
}

const deductAmount = function(type, nonType) {
  const input = `#${type}_amount`;
  const accountType = `${type}_amount`;
  const accountNonType = `${nonType}_amount`;
  const balance = `#${type}_balance`;
  const balanceNonType = `#${nonType}_balance`;
  if ($(input).val() > 0) {
    const amount = parseInt($(input).val());
    if (account[accountType] >= amount) {
      account[accountType] -= amount;
      $(balance).html(`$${account[accountType]}`).addClass('animated flash').one('animationend', function() {
        $(balance).removeClass('animated flash');
      });
    } else if (account[accountType] + account[accountNonType] >= amount) {
      account[accountNonType] -= amount - account[accountType];
      account[accountType] = 0;
      $(balance).html(`$${account[accountType]}`).addClass('animated flash').one('animationend', function() {
        $(balance).removeClass('animated flash');
      });
      $(balanceNonType).html(`$${account[accountNonType]}`).addClass('animated flash').one('animationend', function() {
        $(balanceNonType).removeClass('animated flash');
      });
    }
    if (account[accountNonType] === 0) {
      $(balanceNonType).addClass('zero_balance');
    }
  }
  $(input).val('');
  if (account[accountType] === 0) {
    $(balance).addClass('zero_balance');
  }
}

// checking deposit button
$('#checking_deposit').on('click', function() {
  addAmount('checking');
  pimpMa();
});

// checking withdraw button
$('#checking_withdraw').on('click', function() {
  deductAmount('checking','savings');
  pimpMa();
});

// savings deposit button
$('#savings_deposit').on('click', function() {
  addAmount('savings');
  pimpMa();
});

// savings withdraw button
$('#savings_withdraw').on('click', function() {
  deductAmount('savings','checking');
  pimpMa();
});


// change input box look upon click
$('#checking_amount').click(function(e) {
    // $(this).addClass('input_box_on');
    $(this).attr('placeholder',' ');
    e.stopPropagation();
});

$(document).click(function() {
    // $('#checking_amount').removeClass('input_box_on');
    $('#checking_amount').attr('placeholder', '$amount');
});

$('#savings_amount').click(function(e) {
    // $(this).addClass('input_box_on');
    $(this).attr('placeholder',' ');
    e.stopPropagation();
});

$(document).click(function() {
    // $('#savings_amount').removeClass('input_box_on');
    $('#savings_amount').attr('placeholder', '$amount');
});


// mouseEnter and mouseLeave for checking and saving divs
const $checking_content = $('#checking_content');
$checking_content.on('mouseenter', function() {
  $checking_content.removeClass('hidden_content');
}).on('mouseleave', function() {
  $checking_content.addClass('hidden_content')
});

const $savings_content = $('#savings_content');
$savings_content.on('mouseenter', function() {
  $savings_content.removeClass('hidden_content');
}).on('mouseleave', function() {
  $savings_content.addClass('hidden_content')
});















});
