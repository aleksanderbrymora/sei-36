
const gaChecking = {
  type: 'checking',
  amount: 100
}

const gaSavings = {
  type: 'savings',
  amount: 50
}

function deposit(account, amt){
  account.amount += amt
  return;
}

function withdraw(account, amt){
  if (amt >(gaSavings.amount + gaChecking.amount)) {
    return false;
  } else {
      if(amt > account.amount ) {
        const diffAmt = amt - account.amount;

        if(account.type === 'savings'){
          account.amount -= account.amount;
          gaChecking.amount -= diffAmt;
        } else {
          account.amount -= account.amount;
          gaSavings.amount -= diffAmt;
        }
      } else {
          account.amount -= amt;
      }
      return true;
  }
}

$(document).ready(function() {

    const $chkBal = $('#checking-balance');
    const $savBal = $('#savings-balance');

    const $chkAmt = $('#checking-amount');
    const $savAmt = $('#savings-amount')

    let $account = undefined;
    let $amount  = undefined;
    let gaAcct   = undefined;

    refreshBank();

    $('#savings-deposit,#checking-deposit,#checking-withdraw,#savings-withdraw').on('click',function (e) {
      const eventID = $(e.target).attr('id');

      switch (eventID) {
        case 'checking-deposit' :
        case 'checking-withdraw':
            setChecking();
          break;
        case 'savings-deposit'  :
        case 'savings-withdraw' :
            setSavings();
          break;
        default:
          console.log('no events handled');
      }

      const amount = parseInt($amount.val());

      if (Number.isNaN(amount)) {
        alert('Please enter a valid amount');
        $amount.val('');
      } else {
        if((eventID == 'checking-withdraw') || (eventID == 'savings-withdraw'))
        {
          if (withdraw(gaAcct, amount)) {
            if (gaSavings.amount == 0) {
                $savBal.css('background-color', '#F52F4F');
            }
            if(gaChecking.amount == 0){
                $chkBal.css('background-color', '#F52F4F');
            }
          } else {
            alert('Account(s) does not have sufficient funds.');
          }
        }
        else if((eventID == 'savings-deposit') || (eventID == 'checking-deposit')) {
          deposit(gaAcct, amount);
          $account.css('background-color', '#E3E3E3');
        } else {
          console.log('no processing executed');
        }
        refreshBank();
        $amount.val('');
      }
    });

    function refreshBank() {
      $chkBal.text(`$${gaChecking.amount}`);
      $savBal.text(`$${gaSavings.amount}`);
    }

    function setSavings(){
      $account = $savBal;
      $amount  = $savAmt;
      gaAcct   = gaSavings;
    }

    function setChecking(){
      $account = $chkBal;
      $amount  = $chkAmt;
      gaAcct   = gaChecking;
    }
});
