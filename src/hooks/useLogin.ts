import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const login = useCallback(
    async (formData: FormData) => {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const {error: loginError} = await supabase.auth.signInWithPassword(data);
      setLoading(false); // End loading

      if (loginError) {
        setError(loginError.message); // Set error message
        setSuccess(false); // Indicate failure
        router.push("/error");
        return {success: false, error: loginError.message};
      }

      router.refresh(); // Revalidates the page
      router.push("/");
      setSuccess(true); // Indicate success
      return {success: true};
    },
    [router, supabase]
  );

  return {login, error, success, loading};
};
