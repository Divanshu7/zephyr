// authRoutes.js
import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,getOrdersController,
  orderStatusController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewear/authMiddlewear.js"; // Corrected function name


const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password",forgotPasswordController)
router.get("/test", requireSignIn, isAdmin, testController); // Corrected middleware function name
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });
  router.put("/profile", requireSignIn, updateProfileController);

  //orders
  router.get("/orders", requireSignIn, getOrdersController);
  
  //all orders
  router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
  
  // order status update
  router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );
export default router;
