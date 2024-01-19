function calculate() {
    var amount = parseFloat(document.getElementById('amount').value) || 0;
    var member = parseFloat(document.getElementById('member').value) || 1;
    var tableCost = parseFloat(document.getElementById('tableCost').value) || 0;
    var auction = parseFloat(document.getElementById('auction').value) || 0;

    var result = (amount - (auction - tableCost)) / member;

    document.getElementById('result').innerText = 'Result: ' + result.toFixed(2);
}
