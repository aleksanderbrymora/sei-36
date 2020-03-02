//Document loader
$(document).ready(function() {

//====================
//Account object
//====================

// create object to hold account information
account = {
  checking_amount: 0,
  savings_amount: 0,
};

//====================
//420 Easter Egg
//====================

const pimpMa = function() {
  if (account.checking_amount === 420 || account.savings_amount === 420) {
    $('.button').prop({'type':'image','src':'img/giphy.gif'});
  } else if (account.checking_amount !== 420 && account.savings_amount !== 420) {
    $('.button').prop({'type':'button','src':''});
  }
}

//==============================
//Deposit and Withdraw Functions
//==============================

const addAmount = function(type) {
  // assign variables with 'checking' or 'savings' keyword type
  const input = `#${type}_amount`;
  const accountType = `${type}_amount`;
  const balance = `#${type}_balance`;
  const animation = 'animated flash';

  // if input is number greater than zero, add to balance
  if ($(input).val() > 0) {
    const amount = +(parseFloat($(input).val()).toFixed(2));
    account[accountType] += amount;
    // ensures balance is to 2 decimal places
    account[accountType] = + account[accountType].toFixed(2);

    $(balance).html(`$${account[accountType]}`).addClass(animation).one('animationend', function() {
      $(balance).removeClass(animation);
    });
    $(balance).removeClass('zero_balance');
  };

  // remove input from input box
  $(input).val('');

};

const deductAmount = function(type, nonType) {
  // assign variables with 'checking' or 'savings' keyword type
  const input = `#${type}_amount`;
  const accountType = `${type}_amount`;
  const accountNonType = `${nonType}_amount`;
  const balance = `#${type}_balance`;
  const balanceNonType = `#${nonType}_balance`;
  const input_message = `#${type}_message`
  const animation = 'animated flash';

  // if input is number greater than zero, deduct from balance
  if ($(input).val() > 0) {
    const amount = +(parseFloat($(input).val()).toFixed(2));

    // if funds are available
    if (account[accountType] >= amount) {
      account[accountType] -= amount;
      // ensures balance is to 2 decimal places
      account[accountType] = + account[accountType].toFixed(2);
      // update balance and add animation
      $(balance).html(`$${account[accountType]}`).addClass(animation).one('animationend', function() {
        $(balance).removeClass(animation);
      });

      // overdraft protection
    } else if (account[accountType] + account[accountNonType] >= amount) {
      account[accountNonType] -= amount - account[accountType];
      // ensures balance is to 2 decimal places
      account[accountNonType] = + account[accountNonType].toFixed(2);
      account[accountType] = 0;
      // update balance box and add animation
      $(balance).html(`$${account[accountType]}`).addClass(animation).one('animationend', function() {
        $(balance).removeClass(animation);
      });
      // update other balance box and add animation
      $(balanceNonType).html(`$${account[accountNonType]}`).addClass('animated flash').one('animationend', function() {
        $(balanceNonType).removeClass('animated flash');
      });

      // insufficient funds
    } else if (account[accountType] + account[accountNonType] <= amount) {
      // provide insufficient funds message to user
      $(input_message).css('visibility', 'visible').addClass(animation).one('animationend', function() {
        $(input_message).removeClass(animation);
        $(input_message).css('visibility', 'hidden');
      });
    };

    // add zero_balance class to other balance box
    if (account[accountNonType] === 0) {
      $(balanceNonType).addClass('zero_balance');
    };
  };

  // remove input from input box
  $(input).val('');
  // add zero_balance class to balance box
  if (account[accountType] === 0) {
    $(balance).addClass('zero_balance');
  };

};

//============================
//Deposit and Withdraw Buttons
//============================

// checking deposit button
$('#checking_deposit').on('click', function() {
  addAmount('checking');
  pimpMa();
}).on('mousedown', function() {
  $(this).addClass('pressed_button');
}).on('mouseup', function() {
  $(this).removeClass('pressed_button');
});

// checking withdraw button
$('#checking_withdraw').on('click', function() {
  deductAmount('checking','savings');
  pimpMa();
}).on('mousedown', function() {
  $(this).addClass('pressed_button');
}).on('mouseup', function() {
  $(this).removeClass('pressed_button');
});

// savings deposit button
$('#savings_deposit').on('click', function() {
  addAmount('savings');
  pimpMa();
}).on('mousedown', function() {
  $(this).addClass('pressed_button');
}).on('mouseup', function() {
  $(this).removeClass('pressed_button');
});

// savings withdraw button
$('#savings_withdraw').on('click', function() {
  deductAmount('savings','checking');
  pimpMa();
}).on('mousedown', function() {
  $(this).addClass('pressed_button');
}).on('mouseup', function() {
  $(this).removeClass('pressed_button');
});

// $('#savings_withdraw').on('click', function() {
//   deductAmount('savings','checking');
//   pimpMa();
// }).animateButton(this);
//
// const animateButton = function(this) {
//   $(this).on('mousedown', function() {
//     $(this).addClass('pressed_button');
//   }).on('mouseup', function() {
//     $(this).removeClass('pressed_button');
//   });
// };


//=====================
//Input Box Upon Click
//=====================

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

//===================================
//Checking and Saving focus on screen
//===================================

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

//====================
//Scroll Effects
//====================

// scroll effect to move middle border line, bring opacity of main page up, rotate logo, increase text-shadow on title, increase box-shadow on balance
$(document).ready(function() {

  let $w = $(window);
  let $line = $('.line');
  let lastScrollTop = $w.scrollTop();
  let _y = 0;

  $w.scroll(function(event) {
    // assign variables to scrollTop and window height expression
    let st = $w.scrollTop();
    let bottom = ((st / $w.height())-1)*200;
    let opacity = (st / $w.height())-0.1;
    let shadow = (st / $w.height())*10;
    let box_shadow = (st / $w.height())*1;
    let rotate = (st / $w.height())*390;
    lastScrollTop = st;

    // animate css properties to elements
    $line.css({'bottom': bottom+'vh', 'opacity': opacity});
    $('.title').css('text-shadow', `${shadow}px ${shadow}px 0 #000,0px 0px 0 #000`);
    $('.balance').css('box-shadow', `${box_shadow}mm ${box_shadow}mm 0 #000`);
    $('#container').css('opacity', opacity);
    $('#logo').css('transform', `rotate(${rotate}deg)`);
  });
})

});
