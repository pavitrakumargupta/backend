const router=require("express").Router() 
const {authUser,getResturantDetails,editPost,insertNew,cronJob}=require("../controllers/userDetails")

// handle User
router.post("/User/authUser",authUser)
router.post("/editPost",editPost)
router.get("/getResturantDetails",getResturantDetails)
router.get("/cronJobrun",cronJob)

// export
module.exports=router; 