let userId = ""

function buyProd(fsProdPath) {
  fastspring.builder.add(fsProdPath);
  fastspring.builder.checkout();
}

function buyProdPage(fsProdPath) {
  qty = document.getElementById('fs-qty').value;
  qty = parseInt(qty, 10)
  fastspring.builder.update(fsProdPath, qty);
  fastspring.builder.checkout();
}

function adjQty(prod) {
  qty = document.getElementById('fs-qty').value;
  qty = parseInt(qty, 10)
  fastspring.builder.update(prod, qty);
}

function popupWebhookReceived(fsData) {
  if ( fsData ) {
    let orderInfo = {
      user: {
        fs_id: fsData.account
      },
      order: {
        orderId: fsData.id
      }
    }

    userId = fsData.account

    fetch('api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderInfo)
    })
    .then(function(response) {
      return response.status
    })
  }
}

function popupClose( orderReference ) {
  if ( orderReference ) {
    fastspring.builder.reset()
    // userUrl = `localhost:3000/${userId}`
    window.location.replace(userId);
  } else {
    window.location.replace("localhost:3000/");
  }

}