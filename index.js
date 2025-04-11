(function () {
  "use strict";

  kintone.events.on(["app.record.create.show"], (event) => {
    alert(event.type);
    alert("Hello World!!!!");
    console.log("hoge");
    return event;
  });
})();
