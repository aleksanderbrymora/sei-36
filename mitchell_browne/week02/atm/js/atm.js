$(document).ready(function() {



//make capable to include floats

// clean up commentary


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
  const input_message = `#${type}_message`
  const animation = 'animated flash';
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
    } else if (account[accountType] + account[accountNonType] <= amount) {
      $(input_message).css('visibility', 'visible').addClass(animation).one('animationend', function() {
        $(balance).removeClass(animation);
        $(input_message).css('visibility', 'hidden');
      });
    };
    if (account[accountNonType] === 0) {
      $(balanceNonType).addClass('zero_balance');
    }
  }
  $(input).val('');
  if (account[accountType] === 0) {
    $(balance).addClass('zero_balance');
  }
}

//BUTTONS

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

//Input box update with placeholder upon click

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


// scroll effect to move middle border line and bring opacity of main page up
$(document).ready(function() {

  let $w = $(window);
  let $line = $('.line');
  let lastScrollTop = $w.scrollTop();
  let _y = 0;

  $w.scroll(function(event) {
    let st = $w.scrollTop();
    let bottom = ((st / $w.height())-1)*200;
    let opacity = (st / $w.height())-0.1;
    let shadow = (st / $w.height())*10;
    let box_shadow = (st / $w.height())*1;
    let rotate = (st / $w.height())*390;
    console.log(st);
    lastScrollTop = st;
    $line.css({'bottom': bottom+'vh', 'opacity': opacity});
    $('.title').css('text-shadow', `${shadow}px ${shadow}px 0 #000,0px 0px 0 #000`);
    $('.balance').css('box-shadow', `${box_shadow}mm ${box_shadow}mm 0 #000`);
    $('#container').css('opacity', opacity);
    $('#logo').css('transform', `rotate(${rotate}deg)`);
  });
})












});
