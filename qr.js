function qr(){
  event_data = {
    'code_wizard':{
        'fees': '500',
    },
    'java_coding_contest':{
        'fees': '100',
    },
    'web_design_workshop':{
    'fees':'50',
    },
    'python_hackathon':{
        'fees': '200',
    }
  }
  amount=event_data[localStorage.getItem('event')]['fees']
  upi = 'upi://pay?pa=' + '8200639454398@paytm' + '&pn=' + 'LJU' + '%20Name&am=' + amount + '&cu=INR';
  document.getElementById("amount").innerHTML='\u{020B9}'+amount
  qrcode = new QRCode(document.getElementById('qrcode'), {
    text: upi,
    width: 460,
    height: 370,
    colorDark: '#000',
    colorLight: '#fff',
    correctLevel: QRCode.CorrectLevel.H
  });
}
