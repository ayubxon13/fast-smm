import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";

export const useSignup = () => {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const signup = useCallback(
    async (formData: FormData) => {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      const firstName = formData.get("first-name") as string;
      const lastName = formData.get("last-name") as string;
      const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        options: {
          data: {
            full_name: `${firstName} ${lastName}`,
            balance: 0,
            email: formData.get("email") as string,
          },
        },
      };

      const {error: signupError} = await supabase.auth.signUp(data);
      setLoading(false); // End loading

      if (signupError) {
        setError(signupError.message); // Set error message
        setSuccess(false); // Indicate failure
        router.push("/error");
        return {success: false, error: signupError.message};
      }

      router.refresh(); // Revalidates the page
      router.push("/");
      setSuccess(true); // Indicate success
      return {success: true};
    },
    [router, supabase]
  );

  return {signup, error, success, loading};
};
