
const { userDashboardGet} = require("../../controllers/user/dashboard");
const { userStakeholderGet} = require("../../controllers/user/stakeholder");
const { userWithdrawGet} = require("../../controllers/user/withdraw");
const { userJobGet} = require("../../controllers/user/job");
const { userShopGet} = require("../../controllers/user/shop");
const { userVtuGet} = require("../../controllers/user/vtu");
const { userUpgradeGet} = require("../../controllers/user/upgrade");
const { userTaskGet} = require("../../controllers/user/task");
const { userpublishProductGet} = require("../../controllers/user/publishProduct");
const { userProductVendorGet} = require("../../controllers/user/productVendor");
const { userSellerGet} = require("../../controllers/user/sellerPortal");
const { userAdduserGet} = require("../../controllers/user/add-new-user");
const { userLeaderboardGet} = require("../../controllers/user/leaderBoard");
const { userProfileGet, userSecurityGet, userBlockGet} = require("../../controllers/user/settings");
const userRoute = require("express").Router();

//<!-----------------DASHBOARD------------------>
//DASHBOARD
userRoute.route("/dashboard").get(userDashboardGet);

//STAKEHOLDWE
userRoute.route("/stakeholder").get(userStakeholderGet);

//SETTINGS
userRoute.route("/setting/profile").get(userProfileGet);

//SECURITY
userRoute.route("/setting/security").get(userSecurityGet)

//JOB DASHBOARD
userRoute.route("/job").get(userJobGet);

//WITHDRAW DASHBOARD
userRoute.route("/withdraw").get(userWithdrawGet);

//VTU DASHBOARD
userRoute.route("/vtu").get(userVtuGet);

//UPGRADE DASHBOARD
userRoute.route("/upgrade").get(userUpgradeGet);

//TASK DASHBOARD
userRoute.route("/task").get(userTaskGet);


//MARKET DASHBOARD
userRoute.route("/market/shop").get(userShopGet);

//ADD NEW PRODUCT
userRoute.route("/market/shop/publish-product").get(userpublishProductGet);

//PRODUCT VENDOR
userRoute.route("/market/shop/vendor").get(userProductVendorGet);

//SELLER PORTAL
userRoute.route("/market/shop/affiliate").get(userSellerGet);

//ADD NEW USER
userRoute.route("/p2p").get(userAdduserGet);

//LEADERBOARD
userRoute.route("/leaderboard").get(userLeaderboardGet);

//WEBVIEW BLOCK
userRoute.route("/*").get(userBlockGet);



module.exports = userRoute