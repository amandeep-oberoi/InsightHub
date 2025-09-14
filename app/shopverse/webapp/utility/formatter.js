sap.ui.define([

], function () {
    "use strict";

    const Formatter = {
        priceState(fUnitPrice) {
            if (fUnitPrice === undefined || fUnitPrice === null) {
                return "None";
            }
            if (fUnitPrice < 10) {
                return "Success";
            } else if (fUnitPrice < 30) {
                return "Warning";
            } else {
                return "Error";
            }

        },

        categoryImage(picture) {
            if (picture) {
                return "data:image/bmp;base64," + picture.substring(104);
            }
            return "No Picture";

        }
    };

    return Formatter;
});
