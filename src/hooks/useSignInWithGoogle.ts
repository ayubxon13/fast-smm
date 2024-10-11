import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";

export const useSignInWithGoogle = () => {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const signInWithGoogle = useCallback(async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state
    const {data, error: googleError} = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    setLoading(false); // End loading

    if (googleError) {
      setError(googleError.message); // Set error message
      setSuccess(false); // Indicate failure
      router.push("/error");
      return {success: false, error: googleError.message};
    }

    router.push(data.url);
    setSuccess(true); // Indicate success
    return {success: true};
  }, [router, supabase]);

  return {signInWithGoogle, error, success, loading};
};
