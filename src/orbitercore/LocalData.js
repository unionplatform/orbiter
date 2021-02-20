//==============================================================================    
// CLASS DECLARATION
//==============================================================================
/** @class*/
net.user1.utils.LocalData = new Object();

var hasLocalStorage = false;
try {
  if (typeof localStorage !== "undefined") {
    hasLocalStorage = true;
  }
} catch (e) {
  // No local storage
}
if (hasLocalStorage) {
  net.user1.utils.LocalData.data = localStorage;
} else {
  net.user1.utils.LocalData.data = new net.user1.utils.LocalStorage();
}

net.user1.utils.LocalData.write = function (record, field, value) {
  // localStorage can't store objects, so combine record and field for keys
  net.user1.utils.LocalData.data.setItem(record+field, value);
};
  
net.user1.utils.LocalData.read = function (record, field) {
  var value = net.user1.utils.LocalData.data.getItem(record+field);
  return value == null ? null : value;
};

net.user1.utils.LocalData.remove = function (record, field) {
  var value = net.user1.utils.LocalData.data.getItem(record+field);
  if (value != null) {
    this.data.removeItem(record+field);
  }
};
