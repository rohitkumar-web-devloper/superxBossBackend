// const { Brand, UserPermissions, Permission } = require("../models");
// const { success, wrapRequestHandler, error } = require("../helper/response")
// const Created_Brand = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_BRAND"
//     }
//   })
//   const go = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (go) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Brand = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_BRAND"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Created_Vehicle = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_VEHICLE"
//     }
//   })
//   const go = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (go) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Vehicle = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_VEHICLE"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_Category = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_CATEGORY"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Category = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_CATEGORY"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission "))
//   }
// }
// const Create_Product = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_PRODUCT"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Product = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_PRODUCT"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_User = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_USER"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_User = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_USER"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_Faq = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_FAQ"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Faq = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_FAQ"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_Role = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_ROLE"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Role = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_ROLE"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_Recharge = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_RECHARGE"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Recharge = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_RECHARGE"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_Shipping = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_SHIPPING"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Shipping = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_SHIPPING"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_Coupon = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_COUPON"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Coupon = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_COUPON"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Update_Rating = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "UPDATE_RATING"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Create_Banner = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "CREATE_BANNER"
//     }
//   })
//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// const Delete_Banner = async (req, res, next) => {
//   const exist = await Permission.findOne({
//     attributes: ['id'],
//     where: {
//       name: "DELETE_BANNER"
//     }
//   })

//   const PermissionAccess = await UserPermissions.findOne({
//     where: {
//       user_id: req.login_token.id,
//       permission_id: exist.id
//     }
//   })
//   if (PermissionAccess) {
//     next()
//   } else {
//     return res.status(400).json(error("You don't have permission"))
//   }
// }
// module.exports = {
//   Created_Brand, Update_Brand, Create_Category, Update_Category, Create_Product, Update_Product, Create_User, Update_User,
//   Create_Faq, Update_Faq, Create_Role, Update_Role, Create_Recharge, Update_Recharge, Create_Shipping, Update_Shipping, Create_Coupon, Update_Coupon,
//   Update_Rating, Create_Banner, Delete_Banner, Created_Vehicle, Update_Vehicle
// }
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

