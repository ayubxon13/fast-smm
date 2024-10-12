import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {toast} from "sonner";

export const useSignup = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  const signup = useCallback(
    async (formData: FormData) => {
      setLoading(true);
      const username = formData.get("username") as string;
      const phone = formData.get("phone") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const data = {
        email: email,
        password: password,
        options: {
          data: {
            phone: phone,
            password: password,
            username: username,
            balance: 0,
          },
        },
      };
      const {error: signupError} = await supabase.auth.signUp(data);
      setLoading(false);

      if (signupError) {
        setSuccess(false);

        let errorMessage = "";
        switch (signupError.message) {
          case "User already registered":
            errorMessage = "Foydalanuvchi allaqachon ro'yxatdan o'tgan.";
            break;
          case "Invalid email address":
            errorMessage = "Noto'g'ri email manzili.";
            break;
          case "Password is too weak":
            errorMessage = "Parol juda kuchsiz.";
            break;
          case "Email not confirmed":
            errorMessage = "Email tasdiqlanmagan.";
            break;
          case "Invalid password":
            errorMessage = "Noto'g'ri parol.";
            break;
          default:
            errorMessage = "Noma'lum xatolik yuz berdi.";
        }

        toast.error(errorMessage);
        return {success: false, error: signupError.message};
      }
      setSuccess(true);
      return {success: true};
    },
    [supabase]
  );

  return {signup, success, loading};
};
