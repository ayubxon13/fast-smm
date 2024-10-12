import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {toast} from "sonner";

export const useLogin = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  const login = useCallback(
    async (formData: FormData) => {
      setLoading(true);
      const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const {error: loginError} = await supabase.auth.signInWithPassword(data);
      setLoading(false);

      if (loginError) {
        setSuccess(false);

        let errorMessage = "";
        switch (loginError.message) {
          case "User already registered":
            errorMessage = "Foydalanuvchi allaqachon ro'yxatdan o'tgan.";
            break;
          case "Invalid login credentials":
            errorMessage = "Noto'g'ri kirish ma'lumotlari.";
            break;
          case "Email not confirmed":
            errorMessage = "Email tasdiqlanmagan.";
            break;
          case "Password is too weak":
            errorMessage = "Parol juda kuchsiz.";
            break;
          case "User not found":
            errorMessage = "Foydalanuvchi topilmadi.";
            break;
          case "Invalid or expired token":
            errorMessage = "Noto'g'ri yoki muddati o'tgan token.";
            break;
          default:
            errorMessage = "Noma'lum xatolik yuz berdi.";
        }

        toast.error(errorMessage);
        return {success: false, error: loginError.message};
      }

      setSuccess(true);
      return {success: true};
    },
    [supabase]
  );

  return {login, success, loading};
};
