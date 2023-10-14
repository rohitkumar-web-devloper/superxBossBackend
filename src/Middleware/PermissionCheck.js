
const { Permission, UserPermissions } = require("../models");
const { success, wrapRequestHandler, error } = require("../helper/response");

const checkPermission = async (req, res, next, permissionName) => {
  const exist = await Permission.findOne({
    attributes: ['id'],
    where: {
      name: permissionName
    }
  });

  const PermissionAccess = await UserPermissions.findOne({
    where: {
      user_id: req.login_token.id,
      permission_id: exist.id
    }
  });

  if (PermissionAccess) {
    next();
  } else {
    return res.status(400).json(error("You don't have permission"));
  }
};

module.exports = {
  Created_Brand: (req, res, next) => checkPermission(req, res, next, "CREATE_BRAND"),
  Update_Brand: (req, res, next) => checkPermission(req, res, next, "UPDATE_BRAND"),
  Created_Vehicle: (req, res, next) => checkPermission(req, res, next, "CREATE_VEHICLE"),
  Update_Vehicle: (req, res, next) => checkPermission(req, res, next, "UPDATE_VEHICLE"),
  Create_Category: (req, res, next) => checkPermission(req, res, next, "CREATE_CATEGORY"),
  Update_Category: (req, res, next) => checkPermission(req, res, next, "UPDATE_CATEGORY"),
  Create_Product: (req, res, next) => checkPermission(req, res, next, "CREATE_PRODUCT"),
  Update_Product: (req, res, next) => checkPermission(req, res, next, "UPDATE_PRODUCT"),
  Create_User: (req, res, next) => checkPermission(req, res, next, "CREATE_USER"),
  Update_User: (req, res, next) => checkPermission(req, res, next, "UPDATE_USER"),
  Create_Faq: (req, res, next) => checkPermission(req, res, next, "CREATE_FAQ"),
  Update_Faq: (req, res, next) => checkPermission(req, res, next, "UPDATE_FAQ"),
  Create_Role: (req, res, next) => checkPermission(req, res, next, "CREATE_ROLE"),
  Update_Role: (req, res, next) => checkPermission(req, res, next, "UPDATE_ROLE"),
  Create_Recharge: (req, res, next) => checkPermission(req, res, next, "CREATE_RECHARGE"),
  Update_Recharge: (req, res, next) => checkPermission(req, res, next, "UPDATE_RECHARGE"),
  Create_Shipping: (req, res, next) => checkPermission(req, res, next, "CREATE_SHIPPING"),
  Update_Shipping: (req, res, next) => checkPermission(req, res, next, "UPDATE_SHIPPING"),
  Create_Coupon: (req, res, next) => checkPermission(req, res, next, "CREATE_COUPON"),
  Update_Coupon: (req, res, next) => checkPermission(req, res, next, "UPDATE_COUPON"),
  Update_Rating: (req, res, next) => checkPermission(req, res, next, "UPDATE_RATING"),
  Create_Banner: (req, res, next) => checkPermission(req, res, next, "CREATE_BANNER"),
  Delete_Banner: (req, res, next) => checkPermission(req, res, next, "DELETE_BANNER")
};

// Hello

