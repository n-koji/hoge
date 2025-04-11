(function () {
  "use strict";

  kintone.events.on(["app.record.create.show"], (event) => {
    alert(event.type);
    return event;
  });
})();
