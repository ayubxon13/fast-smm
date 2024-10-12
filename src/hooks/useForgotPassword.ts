import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {toast} from "sonner";

export const useForgotPassword = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  const forgotPassword = useCallback(
    async (email: string) => {
      setLoading(true);
      const {error: forgotError} = await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo: `${window.location.origin}/dashboard/account`,
        }
      );
      setLoading(false);

      if (forgotError) {
        let errorMessage = "";
        switch (forgotError.message) {
          case "Network error: Failed to connect":
            errorMessage = "Tarmoq xatosi: ulanib bo'lmadi.";
            break;
          case "User not found":
            errorMessage = "Foydalanuvchi topilmadi.";
            break;
          case "Invalid email format":
            errorMessage = "Elektron pochta formati noto'g'ri.";
            break;
          case "Too many attempts. Please try again later.":
            errorMessage =
              "Juda ko'p urinishlar. Keyinroq qayta urinib ko'ring.";
            break;
          case "Internal server error":
            errorMessage = "Serverdagi ichki xatolik.";
            break;
          default:
            errorMessage = "Noma'lum xatolik yuz berdi.";
        }
        toast.error(errorMessage);
        setSuccess(false);
        return {success: false, error: forgotError.message};
      }

      setSuccess(true);
      return {success: true};
    },
    [supabase]
  );

  return {forgotPassword, success, loading};
};
