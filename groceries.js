
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
window.onload = loadCookieList;
var myList = [];
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function saveList()
{
  var save = myList.toString();
  setCookie("saveCook", save, 3);
  getCookie("saveCook");
}
function displayItem(input)
{
  var comp = input;
  var bool = false;
  for(var i=0; i <= myList.length; i++)
  {
    if(comp != myList[i])
    {
      bool = true;
    }
  }
  if(bool == true)
  {
    myList.push(input);
  }

}
function clearList()
{
  document.getElementById("listDisplay").value = "";
  for(var i = 0; i <= myList.length; i++)
  {
    myList.pop();
  }

    console.log(myList);
}
function removeParentListItem()
{
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  myList.splice(itemIndex,1);
  console.log(myList);

}
function loadCookieList()
{
  var cook = getCookie("saveCook");
  var arrayCookie = cook.split(" ");
  for(var i=0; i < arrayCookie.length; i++)
  {
    displayItem(arrayCookie[i]);
  }

}
function addItem()
{
  var input = document.getElementById("newItem").value;
  var list = document.getElementById("listDisplay");
  var item = document.createElement("li");
  var iconClose = document.createElement("span");
  var btnClose = document.createElement("button");
  btnClose.addEventListener("click", removeParentListItem);
  iconClose.classList.add("glyphicon");
  iconClose.classList.add("glyphicon-remove");
  btnClose.appendChild(iconClose);
  btnClose.classList.add("btn");
  btnClose.classList.add("btn-danger");
  btnClose.classList.add("btn-xs");
  item.appendChild(btnClose);
  /*for(var i = 0; i > myList.length; i++)
  {*/
  var itemName =  document.createTextNode(input);
  var vari = myList.indexOf(input);
  if(vari == -1)
  {
    myList.push(input);
    console.log(myList);
  }
  //}
  item.appendChild(itemName);
  list.appendChild(item);
  document.getElementById("newItem").value = "";
  displayItem(input);

}
