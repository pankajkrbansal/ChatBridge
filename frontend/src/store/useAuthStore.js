import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isUpdatingProfile: false,
  isLoggingIn: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({authUser:res.data})
    } catch (err) {
        console.log(`Error In checkAuth ${err}`)
      set({authUser:null})
    }finally{
        set({isCheckingAuth:false})
    }
  },
  signup: async(data) => {
    set({isSigningUp:true})
    try{
      const res = await axiosInstance.post("/auth/signup", data)
      set({authUser:res.data})
      toast.success("Account Created Successfully")
      
    }catch(err){
      toast.error(err.response.data.message)
    }finally{
    set({isSigningUp:false})

    }
  }
}));
