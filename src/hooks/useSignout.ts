import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

export const useSignout = () => {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  const signout = useCallback(async () => {
    setLoading(true);
    const {error: signoutError} = await supabase.auth.signOut();
    setLoading(false);

    if (signoutError) {
      let errorMessage = "";
      switch (signoutError.message) {
        case "Network error: Failed to connect":
          errorMessage = "Tarmoq xatosi: ulanib bo'lmadi.";
          break;
        case "Invalid session or expired token":
          errorMessage = "Yaroqsiz seans yoki muddati o'tgan token.";
          break;
        case "No user is logged in":
          errorMessage = "Hechqanday foydalanuvchi tizimga kirmagan.";
          break;

        default:
          errorMessage = "Noma'lum xatolik yuz berdi.";
      }
      toast.error(errorMessage);
      setSuccess(false);
      return {success: false, error: signoutError.message};
    }

    router.push("/");
    setSuccess(true);
    return {success: true};
  }, [router, supabase]);

  return {signout, success, loading};
};
